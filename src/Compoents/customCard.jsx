import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customCard.css";
import { Link, useNavigate } from "react-router-dom";
import images from "../assets/images";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImBehance } from "react-icons/im";
import { PiBeachBallLight } from "react-icons/pi";
import { BiLogoUpwork } from "react-icons/bi";

const CustomCard = ({
  id,
  username,
  email,
  phone,
  company,
  address,
  showDetails,
  theme,
}) => {
<<<<<<< HEAD
  const randomImage = images[Math.floor(Math.random() * images.length)];
=======
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
>>>>>>> 9b9c57b7f7e2b263c22256cb990fb65af85db99d
  const navigate = useNavigate();
  return (
    <Card className={`h-100 custom-card ${theme}  `}>
      <Card.Body>
        <div className="styleIcon">
          <h6
            className="arwShow"
            onClick={() => 
              navigate("/")}
<<<<<<< HEAD
              style={{ display: showDetails ? "block" : "none" }}
=======
>>>>>>> 9b9c57b7f7e2b263c22256cb990fb65af85db99d
            
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
          <Card.Img className="profile_dp" src={randomImage} />
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
  );
};

export default CustomCard;
