import React from "react";
import "./Home.css";
import { FaCheckCircle } from "react-icons/fa";
import { data } from "../../data";
import { AiFillLike } from "react-icons/ai";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
function Home() {
  const stars = data[0].Stars;
  const CountOfPosts = data[0].CountOfPosts;
  const Favoutites = data[0].Favoutites;
  const Views = data[0].Views;
  const Followers = data[0].Followers;
  const Following = data[0].Following;
  const Likes = data[0].Likes;
  const posts = data[0].Posts;

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
              <ul className="">
                <li className="active">
                  <a href="/">{CountOfPosts} Posts</a>
                </li>
                <li>
                  <a href="/">galleries</a>
                </li>
                <li>
                  <a href="/">groups</a>
                </li>
                <li>
                  <a href="/">about</a>
                </li>
              </ul>
            </nav>

            <div class="posts">
              {posts.map((post, index) => (
                <div className="post__container" key={index}>
                  <div className="post_header">
                    <h1>{post.Title}</h1>
                    <AiFillLike size="25px" color="#fce323" />
                  </div>
                  <div className="post_body">{post.Body}</div>
                  <div className="post_footer">
                    <p>
                      <span className="post_type">{post.Type}</span> by{" "}
                      {post.PostedBy}
                    </p>

                    <p className="post_stats">
                      {post.TimeStats.Month} {post.TimeStats.Date}{" "}
                      <span>.</span> {post.TimeStats.TimeToRead} Read{" "}
                      <span>.</span> {post.TimeStats.NumberOfViews}
                      Views
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
