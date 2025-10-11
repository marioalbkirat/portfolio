import React, { useState } from "react";
import "./Card.css";
const Card = ({ img }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing((prev) => !prev);
    };
    return (
        <div className="card">
            <img
                src={img}
                alt="Paul Atreides"
            />
            <section>
                <h2>Paul Atreides</h2>
                <p>
                    Duke of House Atreides. Kwisatz Haderach. Lisan al-Gaib. Padishah Emperor.
                </p>
                <div>
                    <div className="tag" aria-label="15 million followers">
                        <i className="fa-solid fa-user"></i> 15M
                    </div>
                    <button
                        onClick={handleFollow}
                        className={isFollowing ? "following" : ""}
                    >
                        {isFollowing ? "Unfollow" : "Follow"}
                    </button>
                </div>
            </section>
        </div>
    );
};
export default Card;
