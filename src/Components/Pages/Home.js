import React from "react";
import "./Home.css";
import { FaCheckCircle } from "react-icons/fa";
import { data } from "../../data";
import { AiFillLike } from "react-icons/ai";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import Posts from "./Posts";
import { NavLink, Route, Routes } from "react-router-dom";
import Gallary from "./Gallary";
import Notfound from "./Notfound";

function Home() {
  const stars = data[0].Stars;
  const CountOfPosts = data[0].CountOfPosts;
  const Favoutites = data[0].Favoutites;
  const Views = data[0].Views;
  const Followers = data[0].Followers;
  const Following = data[0].Following;
  const Likes = data[0].Likes;

  return (
    <div className="home__container">
      <div className="header__wrapper">
        <header></header>
        <div className="cols__container">
          <div className="left__col">
            <div className="img__container">
              <img
                src="https://pbs.twimg.com/profile_images/1148507476578275328/fsrvymGR_400x400.jpg"
                alt="Anuj Gosalia"
              />
            </div>
            <h2>
              Anuj Gosalia <FaCheckCircle color="green" />
            </h2>
            <h3>Co-Founder & CEO - TTT</h3>
            <p>http://www.instagram.com/anujgosalia</p>
            <ul className="stats">
              <li>
                <FaStar color="#60d6eb" />
                <span>{stars}</span>
              </li>
              <li>
                <AiFillLike color="#dec85b" />
                <span>{Likes} K</span>
              </li>
              <li>
                <FaEye color="#94928b" />
                <span>{Views} K</span>
              </li>
              <li>
                <FaHeart color="#c42351" />
                <span>{Favoutites} K</span>
              </li>
            </ul>
            <ul className="about">
              <li>
                <span>{Followers}</span>Followers
              </li>
              <li>
                <span>{Following}</span>Following
              </li>
            </ul>
          </div>
          <div className="right__col">
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/posts"
                    className={({ isActive }) => (isActive ? "active" : " ")}
                  >
                    {CountOfPosts} Posts
                  </NavLink>
                </li>
                <li cl>
                  <NavLink
                    to="/gallary"
                    className={({ isActive }) => (isActive ? "active" : " ")}
                  >
                    galleries
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route path="/gallary" element={<Gallary />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
