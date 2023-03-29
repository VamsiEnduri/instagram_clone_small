import React from "react";
import flower from "../../assets/flower.jpg";
import "./Profile.css";
import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => state.insta);
  return (
    <div className="profile">
      <img src={flower} alt="" />
      <div>
        <h2>{state.user.username}</h2>
        <span>{state.user.posts}</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span>{state.user.followers}</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span>{state.user.following}</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <h3>{state.user.name}</h3>
        <p>{state.user.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
