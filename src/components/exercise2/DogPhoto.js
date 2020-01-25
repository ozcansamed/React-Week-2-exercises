import React from "react";

export default function DogPhoto({ dogPhotos }) {
  return (
    <div>
      <ul>
        {dogPhotos.map(img => (
          <li>
            <img
              src={img}
              alt='dog'
              style={{ width: "150px,", height: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
