import React from "react";
import {
  useTransition,
  animated,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import "./Gallary.css";
import image1 from "../../assets/image1.avif";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.avif";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
function Gallary() {
  // const springs = useSpring({
  //   from: { y: 100 },
  //   to: { y: 0 },
  // });
  const pictures = [
    {
      id: 1,
      src: image1,
      alt: "post-1",
    },
    {
      id: 2,
      src: image2,
      alt: "post-2",
    },
    {
      id: 3,
      src: image3,
      alt: "post-3",
    },
    {
      id: 4,
      src: image4,
      alt: "post-4",
    },
    {
      id: 5,
      src: image5,
      alt: "post-5",
    },
    {
      id: 6,
      src: image6,
      alt: "post-6",
    },
    {
      id: 7,
      src: image7,
      alt: "post-7",
    },
  ];
  const transApi = useSpringRef();
  const transition = useTransition(pictures, {
    // from: { y: 100 },
    //   to: { y: 0 },
    ref: transApi,
    trail: 400 / pictures.length,
    from: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 0 },
  });
  useChain([transApi], [0]);
  return (
    <div class="photos">
      {transition((style, item) => (
        <animated.div style={{ ...style }}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </animated.div>
      ))}
    </div>
  );
}

export default Gallary;
