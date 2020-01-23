import React from "react";

export default function DogPhoto({ dogPhotos }) {
  return (
    <div>
      <img
        src={dogPhotos}
        alt='dog'
        style={{ width: "150px,", height: "100px" }}
      />
    </div>
  );
}
