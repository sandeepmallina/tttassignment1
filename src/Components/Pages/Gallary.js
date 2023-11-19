import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Gallary.css";
function Gallary() {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });
  const pictures = [
    {
      id: 1,
      src: "https://gumlet.assettype.com/homegrown%2Fimport%2F42022-Below-TTT.jpg",
      alt: "post-1",
    },
    {
      id: 2,
      src: "https://shubh25.weebly.com/uploads/3/8/8/7/38873647/319623_orig.jpg",
      alt: "post-2",
    },
    {
      id: 3,
      src: "https://a.cdn-hotels.com/gdcs/production17/d1366/9035a01f-643f-4710-80ff-0299e936494e.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      alt: "post-3",
    },
    {
      id: 4,
      src: "https://www.tripsavvy.com/thmb/TCx1SmJXEUJeBNccByacnNJPcmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAM_1821-beb64d32d22c4fccb1c2cb5342e1ec36.jpg",
      alt: "post-4",
    },
    {
      id: 5,
      src: "https://raw.githubusercontent.com/programmercloud/responsive-profile-page/main/img/img_1.avif",
      alt: "post-5",
    },
    {
      id: 6,
      src: "https://www.buzzincontent.com/uploads/large/TTT.jpg",
      alt: "post-6",
    },
    {
      id: 7,
      src: "https://i.pinimg.com/originals/0d/f4/26/0df42622ca91cd2ee2e23881e071c4be.jpg",
      alt: "post-7",
    },
  ];
  return (
    <animated.div class="photos" style={{ ...springs }}>
      {pictures.map((pic) => (
        <div key={pic.id}>
          <img src={pic.src} alt={pic.alt} />
        </div>
      ))}
    </animated.div>
  );
}

export default Gallary;
