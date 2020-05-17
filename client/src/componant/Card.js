import React from "react";
import './Card.css'

const Card = (props) => {
  const {item:{title,img,description,date,authorName}}= props;
  return (
      <div className="card">
        <img src={`${img}`} 
              alt="blog-img"
              className="blog-container__img"/>
        <div className="container">
              <h2 className="blog-container__title">{title}</h2>
              <p className="blog-container__date">{description}</p>
              <p className="blog-container__text">{authorName}</p>
              <p className="blog-container__media">{date}</p>
        </div>
      </div>

  );
};

export default Card;