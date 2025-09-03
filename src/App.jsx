import { useEffect, useState } from 'react';
import CustomCard from './Compoents/customCard';
import { Row, Col, Button } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light"); 
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

// SEARCH BAR CODE 
  const filterUsers=userData.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()) ||
  user.email.toLowerCase().includes(search.toLowerCase())

);



  if (loading) {
    return <p className='centerStyle'>⏳ Loading users...</p>;
  }

  if (error) {
    return <p className='centerStyle'>❌ Error: {error}</p>;
  }

  return (
    <div className={`app-container  ${theme}`}>
      <container>
        <div className='nav'>
        <div className='searchbar mb-3'>
        <input type="text" placeholder='search here '
         value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control'/>
        </div>
          
          <Button className='themeBtn'
            variant={theme === "light" ? "dark" : "light"} 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </div>

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
                // image={user.image}
              />
            </Col>
          ))}
        </Row>
      </container >
    </div>
  );
}

export default App;
