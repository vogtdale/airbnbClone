import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "../datePicker/DatePicker";
import "./Banner.css";

const Banner = () => {
  const history = useHistory()
  const [showDatePicker, setDatePicker] = useState(false);
  const [bannerInfo, setBannerInfo] = useState(true);

  const handleClick = () => {
    setDatePicker(!showDatePicker)
    setBannerInfo(!bannerInfo)
  }

  const explore = (e) => {
    e.preventDefault()
    history.push("/search")
  }

  return (
    <div className="banner">
      <div className="banner-search">
        <Button
          className="banner-searchButton"
          variant="outlined"
          onClick={handleClick}
        >
          Search Dates
        </Button>
        {showDatePicker && <DatePicker />}
      </div>

      {bannerInfo && (
        <div className="banner-info">
          <h1>Get out and stretch your imaginantion</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near you{" "}
          </h5>
          <Button onClick={explore} variant="outlined">Explore Nearby</Button>
        </div>
      )}
    </div>
  );
};

export default Banner;
