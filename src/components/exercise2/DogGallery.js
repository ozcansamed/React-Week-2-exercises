import React, { useState, useEffect } from "react";
import DogPhoto from "./DogPhoto";
import Button from "./Button";

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getDogPhoto = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(data => {
        setDogPhotos(data.message);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(getDogPhoto, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (hasError) {
    return <p>Something went wrong...</p>;
  }
  if (getDogPhoto) {
    return (
      <div className='dogPhotos'>
        <Button onClick={getDogPhoto} />
        <h6 style={{ marginBottom: "10px" }}>
          Get your first dog by clicking the button!
        </h6>
        <DogPhoto dogPhotos={dogPhotos} />
      </div>
    );
  }
}
