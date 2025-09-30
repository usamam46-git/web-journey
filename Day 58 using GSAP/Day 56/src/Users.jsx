import React, { useEffect, useState, useRef } from "react";
import { ScaleLoader } from "react-spinners";
import UserCard from "./components/UserCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiUser } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const heroRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            setUserList(users);
            setIsLoading(false);
        };
        getUsers();
    }, []);

    useEffect(() => {
        if (!isLoading && userList.length > 0) {
            const cards = cardsRef.current.filter(Boolean);
            gsap.set(cards, { opacity: 0, y: 40 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=60%",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            tl.to(heroRef.current, {
                y: -160,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            });
            tl.to(cards, {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "power2.out",
            }, "<0.2");
        }
    }, [isLoading, userList]);

    const filteredUsers = userList.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
        if (!isLoading && filteredUsers.length > 0) {
            const cards = cardsRef.current.filter(Boolean);

            gsap.fromTo(
                cards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.5,
                    ease: "power2.out",
                }
            );
        }
    }, [filteredUsers, isLoading]);


    return (
        <div className="w-full">
            <section
                ref={heroRef}
                className="flex items-center justify-center h-screen text-7xl font-bold z-0 relative"
            >
                Users&nbsp;<CiUser />
            </section>
            <section className="m-4 min-h-screen">
                {isLoading ? (
                    <div className="flex justify-center mt-20">
                        <ScaleLoader />
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center mb-6 z-10 relative">
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-1/2 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-12 gap-4">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, i) => (
                                    <div
                                        key={user.id}
                                        className="col-span-12 sm:col-span-6 md:col-span-4"
                                        ref={(el) => (cardsRef.current[i] = el)}
                                    >
                                        <UserCard user={user} />
                                    </div>
                                ))
                            ) : (
                                <p className="text-center col-span-12">No users found</p>
                            )}
                        </div>

                    </>
                )}
            </section>
        </div>
    );
};

export default Users;
