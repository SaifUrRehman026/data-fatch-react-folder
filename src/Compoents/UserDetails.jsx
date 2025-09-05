import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "./customCard";
import { Row, Col, Button } from 'react-bootstrap';
import { useTheme } from '../ThemeContext.jsx';
import ThemeButton from "./ThemeButton";


const UserDetail = () => {
   const { theme, toggleTheme } = useTheme();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
     const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const foundUser = storedUsers.find((u) => u.id === parseInt(id));
    setUser(foundUser);
  }, [id]);

 
  if (!user) return  ;

  return (
    <>
    <span className={`d-flex justify-content-end ter `}>
<ThemeButton  theme={theme} toggleTheme={toggleTheme} />
    </span>

    <div className={`container pt-5 d-flex justify-content-center`}>
       
          
      <CustomCard
        username={user.name}
        email={user.email}
        phone={user.phone}
        company={user.company.name}
        address={`${user.address.street}, ${user.address.city}`}
        showDetails={true}
        image={user.image}
      />
    </div>
    </>
  );
};

export default UserDetail;
