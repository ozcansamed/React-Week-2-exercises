import React from "react";

export default function FriendProfile({ friend }) {
  return (
    <div>
      <ul>
        <li>
          <span>Name</span> : {friend.results[0].name.first}{" "}
          {friend.results[0].name.last}
        </li>
        <li>
          <span>Address</span> : {friend.results[0].location.street.name}{" "}
          {friend.results[0].location.street.number}{" "}
          <span className='country'>{friend.results[0].location.country}</span>
        </li>
        <li>
          <span>e-mail</span> : {friend.results[0].email}
        </li>
        <li>
          <span>Phone Number</span> : {friend.results[0].phone}
        </li>
      </ul>
    </div>
  );
}
