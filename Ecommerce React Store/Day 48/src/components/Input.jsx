import React from "react";

const NoDistractionSearchField = ({ searchTerm, setSearchTerm }) => {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1521080782982-e5e001d28e9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="mb-[50px] py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
        >
            <h1 className="pb-4">Search exclusive sale products in our store!</h1>
            <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                <div className="relative z-30 text-base text-black">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by categories!"
                        className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full bg-white"
                    />
                    <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
                </div>
            </div>
        </div>
    );
};

export default NoDistractionSearchField;