import React, { useEffect, useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getFriend = () => {
    setLoading(true);
    fetch("https://www.randomuser.me/api?results=1")
      .then(resp => resp.json())
      .then(data => {
        setFriend(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(getFriend, []);

  if (isLoading) {
    return <p>Getting data</p>;
  }
  if (hasError) {
    return <p>has error</p>;
  }
  if (friend) {
    return (
      <div className='friend'>
        <Button onClick={getFriend} />
        <FriendProfile friend={friend} />
      </div>
    );
  }
}
