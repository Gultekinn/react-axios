import React from "react";
import "./Card.css";
const Card = (props) => {
  console.log(props.volumeInfo)
  const {title, publisher, imageLinks}=props.volumeInfo
  return (
    <div>
      <div className="card__item">
        <div className="card__item__img">
          <img src={imageLinks.smallThumbnail} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{publisher}</p>
        <span>
          <a href="">Preview</a> <a href="">Details</a>
        </span>
      </div>
    </div>
  );
};

export default Card;
