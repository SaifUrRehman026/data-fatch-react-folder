import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customCard.css';
import { Link } from "react-router-dom";
const CustomCard = ({id, username, email, phone,company,  address,  showDetails, theme }) => {
  return (
    <Card className={`h-100 custom-card ${theme} shadow-sm `}>
      <Card.Body  >
        <Card.Title className='usercrd'>{username}</Card.Title>
        <Card.Text className='crd'>
          <strong>Email:</strong> {email} <br />
          <strong>Phone:</strong> {phone} <br />
          {/* <strong>Company:</strong> {company?.name} <br /> */}

          {showDetails && (
            <>
              <strong>Company:</strong> {company} <br />
              <strong>Address:</strong> {address}
            </>
          )}

          {!showDetails && ( <Link to={`/user/${id}`} className="text-primary mt-2 d-block">See more about</Link>)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
