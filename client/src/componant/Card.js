import React from "react";
import moment from 'moment'
import { Card } from 'antd';
import './Card.css'
const { Meta } = Card;

const CardComp = (props) => {
  const {item:{title,img,description,date,authorName}}= props;
  return (
      <div className="card">
        <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="blog-img" src={img} />}>
          <Meta title={'Title:'} description={title} />
          <br/>
          <Meta title={'Description:'} description={description} />
          <br/>
          <Meta title={'By:'} description={authorName} />
          <br/>
          <Meta title={'Posted:'} title={moment(date).add(1, 'days').calendar()} />
        </Card>
      </div>

  );
};
export default CardComp;
