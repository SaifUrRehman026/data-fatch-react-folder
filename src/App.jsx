import { useEffect, useState } from 'react';
import CustomCard from './Compoents/customCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light"); 
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

// SEARCH BAR CODE 
  const filterUsers=userData.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()) ||
  user.email.toLowerCase().includes(search.toLowerCase())

);

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
    minHeight: "50vh"
  };

  if (loading) {
    return <p style={centerStyle}>⏳ Loading users...</p>;
  }

  if (error) {
    return <p style={centerStyle}>❌ Error: {error}</p>;
  }

  return (
    <div className={`app-container mt-3 ${theme}`}>
      <Container >
        <div className='searchbar mb-3'>
        <input type="text" placeholder='search here '
         value={search} onChange={(e)=>setSearch(e.target.value)} className='form-control'/>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Fetch data from API</h1>
          
          <Button 
            variant={theme === "light" ? "dark" : "light"} 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </div>

        <Row className="g-4 cards-grid">
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
