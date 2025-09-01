import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customCard.css';
import { Link, useNavigate } from "react-router-dom";
import images from "../assets/images";  
import { TiArrowLeftThick } from "react-icons/ti";
import { SlHeart } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";



const CustomCard = ({id, username, email, phone,company,  address,  showDetails, theme }) => {
  const navigate=useNavigate();
  return (
    <Card className={`h-100 custom-card ${theme} shadow-sm `}>
      <Card.Body  >
        <div className='styleIcon'>
<h6 className='arwShow' onClick={()=>{navigate("/")}}><TiArrowLeftThick /></h6>
<h3 className='hrtShow'><SlHeart /></h3>
<h3 className='threeDots'><BsThreeDotsVertical /></h3>
       </div>
      <div className='profile-wrapper mx-auto '>
         <Card.Img className='profile_dp'src={images.profile}/>
          <span className="verified-badge">✓</span>
           </div>

        <Card.Title className='usercrd'>{username}</Card.Title>
        <Card.Text className='crd'>
          <strong>Email:</strong> {email} <br />
          <strong>Phone:</strong> {phone} <br />

          {showDetails && (
            <>
              <strong>Company:</strong> {company} <br />
              <strong>Address:</strong> {address}
            </>
          )}

          {!showDetails && ( <Link to={`/user/${id}`} className="text-primary mt-2 d-block"><button className='detailsBtn'> See More</button></Link>)}
<div className='followers'>
<div className='read'>
            <img src={images.worldBank} alt="" srcset="" />
            
          </div>
        
          <div className='read1'>
            <img src={images.behance} alt="" srcset="" />
            
          </div>
           <div className='read2'>
             <img src={images.upArrow} alt="" srcset="" />
          </div>
</div>

<div className='followers-txt'>
<div className='read-txt'>
            <h5>12.8k</h5>
            <p>Followers</p>
          </div>
        
          <div className='read-txt'>
                       <h5>12.8k</h5>
                       <p>Followers</p>

            
          </div>
           <div className='read-txt'>
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
