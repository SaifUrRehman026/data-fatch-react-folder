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
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setError("❌ User not found"));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!user) return ;

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
      />
    </div>
    </>
  );
};

export default UserDetail;
