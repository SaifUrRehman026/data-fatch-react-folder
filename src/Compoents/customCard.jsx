import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customCard.css";
import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImBehance } from "react-icons/im";
import { PiBeachBallLight } from "react-icons/pi";
import { BiLogoUpwork } from "react-icons/bi";
import { useTheme } from "../ThemeContext";
// import Navbar from './Navbar';

const CustomCard = ({
  id,
  username,
  email,
  phone,
  company,
  address,
  showDetails,
  image,
  // theme,
}) => {
   const { theme, toggleTheme } = useTheme();

  // const randomImage = images[Math.floor(Math.random() * images.length)];

 
  const navigate = useNavigate();
  return (
    <>
     
    <Card className={`h-100  custom-card ${theme}  `}>
       
      <Card.Body>
        <div className="styleIcon">
          <h6
            className="arwShow"
            onClick={() => 
              navigate("/")}
             style={{ visibility: showDetails ? "visible" : "hidden" }}
          >
            <IoIosArrowRoundBack />
          </h6>
          <h3 className="hrtShow">
            <SlHeart />
          </h3>
          <h3 className="threeDots">
            <BsThreeDotsVertical />
          </h3>
        </div>
        <div className="profile-wrapper mx-auto ">
          <Card.Img className="profile_dp" src={image} />
          <span className="verified-badge">✓</span>
        </div>

        <Card.Title className="usercrd">{username}</Card.Title>
        <Card.Text className="crd">
          <strong>Email:</strong> <span className="text-clr">{email}</span>  <br />
          <strong>Phone:</strong> {phone} <br />
          {showDetails && (
            <>
             
              <strong>Company:</strong> {company} <br />
              <strong>Address:</strong> {address}
            
            </>
          )}
          {!showDetails && (
            <Link to={`/user/${id}`} className="text-primary mt-2 d-block">
              <button className="detailsBtn"> See More</button>
            </Link>
          )}
          <div className="followers">
            <div className="read">
              <div className="read-icn">
                <PiBeachBallLight />
              </div>
            </div>

            <div className="read1">
              <div className="read1-icn">
                <ImBehance />
              </div>
            </div>
            <div className="read2">
              <div className="read2-icn">
                <BiLogoUpwork />
              </div>
            </div>
          </div>
          <div className="followers-txt">
            <div className="read-txt">
              <h5>12.8k</h5>
              <p>Followers</p>
            </div>

            <div className="read-txt">
              <h5>12.8k</h5>
              <p>Followers</p>
            </div>
            <div className="read-txt">
              <h5>12.8k</h5>
              <p>Followers</p>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};

export default CustomCard;
