import React, { useState } from "react";
import Card from "./Card";
import hero1 from "./heroImgs/hero-1.jpg";
import hero2 from "./heroImgs/hero-2.jpg";
import hero3 from "./heroImgs/hero-3.jpg";
import hero4 from "./heroImgs/hero-4.jpg";
import hero5 from "./heroImgs/hero-5.jpg";
import hero6 from "./heroImgs/hero-6.jpg";
import hero7 from "./heroImgs/hero-7.jpg";
import hero8 from "./heroImgs/hero-8.jpg";
import hero9 from "./heroImgs/hero-9.jpg";
import hero10 from "./heroImgs/hero-10.jpg";
import hero11 from "./heroImgs/hero-11.jpg";
import hero12 from "./heroImgs/hero-12.jpg";
import './GalleryCard.css';

function GalleryCard() {
  const imgObj = [
    {
      img: hero1,
      title: "Hero 1",
    },
    {
      img: hero2,
      title: "Hero 2",
    },
    {
      img: hero3,
      title: "Hero 3",
    },
    {
      img: hero4,
      title: "Hero 4",
    },
    {
      img: hero5,
      title: "Hero 5",
    },

    {
      img: hero6,
      title: "Hero 6",
    },
    {
      img: hero7,
      title: "Hero 7",
    },
    {
      img: hero8,
      title: "Hero 8",
    },
    {
      img: hero9,
      title: "Hero 9",
    },
    {
      img: hero10,
      title: "Hero 10",
    },
    {
      img: hero11,
      title: "Hero 11",
    },
    {
      img: hero12,
      title: "Hero 12",
    },
  ];

  const [images,setImages] = useState(imgObj);


  return (
    <div className="gallery">
       {
           images.map(({img,title})=>(
               <Card img={img} title={title} />
           ))
       }
    </div>
  );
}

export default GalleryCard;
