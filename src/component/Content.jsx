import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Content.css";
import axios from "axios";
import { Card } from "@mui/material";
const Content = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=search+terms")
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      });
  }, []);

  const clickHandler = ()=>{
    axios
        .get("https://www.googleapis.com/books/v1/volumes?q=search+terms").then((res) => {
          setData(res.data.items)
          console.log(res.data.items)
        });
  }

  return (
    <div className="body">
      <div className="image">
        {" "}
        <h1 className="h1">Dada Book Searching App</h1>
      </div>
      <div className="page"></div>
      <div className="container__search">
        <input
          className="container__search__input"
          type="text"
          placeholder="Find book"
        />
        <button clickHandler={clickHandler} className="container__search__btn">
          <SearchIcon />
        </button>
      </div>

      <div className="cards">
        {data.map((volumeInfo, index) => {
          return <Card volumeInfo={volumeInfo} key={index} />;
        })}

        {/* <div className="card__item">
          <div className="card__item__img">
            <img
              src="image"
              alt=""
            />
          </div>
          <h3>name</h3>
          <p>title</p>
          <span>
            <a href="">Preview</a> <a href="">Details</a>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
