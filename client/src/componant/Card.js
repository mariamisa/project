import React from "react";
import { Card } from 'antd';
import './Card.css'
const { Meta } = Card;

const CardComp = (props) => {
  const {item:{title,img,description,date,authorName}}= props;
  return (
      <div className="card">
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="blog-img" src={`https://image.tmdb.org/t/p/w500/${img}`} />}>
          <Meta title={title} />
          <Meta title={description} />
          <Meta title={authorName} />
          <Meta title={date} />
        </Card>,
      </div>

  );
};
export default CardComp;