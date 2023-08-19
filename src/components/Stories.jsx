import React from "react";
import Story from "./Story";
import img1 from '../assets/grany-family-bw-2.jpg'
import img2 from '../assets/granny-kitchen.jpg'
import img3 from '../assets/granny-reading.jpg'
import img4 from '../assets/bali-tourism.jpg'
import img5 from '../assets/grandma-photography.jpg'
import img6 from '../assets/holi.jpg'
const userStories = [
  { title: "Whispers of Yesterday", author: "Elizabeth Turner" ,img:img1},
  { title: "Grandma's Culinary Chronicles", author: "Mary Thompson" ,img:img2},
  { title: "Grandma's Journey Through Books", author: "Emily Parker" ,img:img3},
  { title: "Grandma's Bali Adventure", author: "Louisa Miller" ,img:img4},
  { title: "A Journey Through My Lens", author: "Lucy Adams" ,img:img5},
  { title: "A Vibrant Day with my Grandchildren", author: "Jane Foster" ,img:img6},
];
const Stories = () => {
  return (
    <div className="stories-wrapper">
      <h2 fontSize={40}>Empowering Voices </h2>
      <h3 fontSize={30}>
        Heartwarming Stories Shared by Our Elderly Customers
      </h3>
      <div className="story-grid">
        {userStories.map((user, ind) => {
          return <Story key={ind} title={user.title} author={user.author} img={user.img} />;
        })}
      </div>
    </div>
  );
};

export default Stories;
