import React, { useState, useEffect } from "react";
const Dogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const url =
        "https://api.freeapi.app/api/v1/public/dogs?page=1&limit=10&query=Affenpinscher";
      const options = { method: "GET", headers: { accept: "application/json" } };

      try {
        const response = await fetch(url, options);
        const allDogs = await response.json();
        console.log(allDogs.data.data);
        setDogList(allDogs.data.data);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (isLoading) return <p>Data is loading....</p>;

  return (
    <div style={{ padding: "20px" }}>
      {dogList.map((dog) => (
        <div
          key={dog.id}
          style={{
            marginBottom: "30px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "400px",
          }}
        >
          <h2>{dog.name}</h2>
          <p>
            <strong>Breed Group:</strong> {dog.breed_group ?? "Unknown"}
          </p>
          <p>
            <strong>Life Span:</strong> {dog.life_span}
          </p>
          <p>
            <strong>Temperament:</strong> {dog.temperament}
          </p>
          {dog.image?.url && (
            <img
              src={dog.image.url}
              alt={dog.name}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dogs;
