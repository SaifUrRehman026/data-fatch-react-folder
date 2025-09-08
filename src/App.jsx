import { useEffect, useState } from 'react';
import CustomCard from './Compoents/customCard';
import { Row, Col} from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import { useTheme } from './ThemeContext.jsx';
import Navbar from './Compoents/Navbar';
import images from "./assets/images";

function App() {
    const { theme, toggleTheme } = useTheme();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(() => {
  return localStorage.getItem("userData") ? false : true;
});
  const [error, setError] = useState(null);
  // const [theme, setTheme] = useState("light"); 
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const userData=response.data.map(user=>({
       ...user,
       image:images[Math.floor(Math.random() * images.length)]
      }));
      setUserData(userData);
      localStorage.setItem("userData", JSON.stringify(userData))
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const localData=localStorage.getItem("userData")

   if(localData){
setUserData(JSON.parse(localData));

   }else{
    fetchData();
   }
  }, []);


// serach BAR
const filterUsers = userData.filter(user => 
  Object.values(user).some(value => 
    value.toString().toLowerCase().includes(search.toLowerCase())
  )
);


  if (loading) {
    return <p className='centerStyle'>⏳ Loading users...</p>;
  }

  if (error) {
    return <p className='centerStyle'>❌ Error: {error}</p>;
  }

  return (
   <div className={`app-container  ${theme}`}>
      <Container-fluid>
          <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        search={search}
        setSearch={setSearch}
      />
        <Row className="g-6 cards-grid">
          {filterUsers.map((user) => (
            <Col key={user.id} xs={12} sm={6} md={4} lg={4}>
              <CustomCard
                id={user.id}
                username={user.name}
                email={user.email}
                phone={user.phone}
                company={user.company}
                address={user.address}
                showDetails={false}
                theme={theme} 
                image={user.image}
              />
            </Col>
          ))}
        </Row>
      </Container-fluid>
    </div>
  );
}

export default App;
