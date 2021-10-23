import Card from "react-bootstrap/Card";
import home from "./Home.css";
import Imglogin from "./img/Imglogin.jpg";
import GoogleLogInOut from "./components/GoogleLogInOut";
import { Container } from "reactstrap";


const Home = ({setNombre, setProfilePic, setIsLoggedIn, isLoggedIn}) => {
  


  return (
    // <div className="container" style={{ home }}>
    //   <div className="abs-center">
        <Container className="d-flex justify-content-center" style={{ home }}>
        <Card className="card mt-5">
          <Card.Title className="text-center text-white mt-3" >BIENVENIDO</Card.Title>
          <Card.Img
            variant="top"
            src={Imglogin}
            className="image align-self-center"
            
          />
            <Card.Body>
            <Card.Title className="title_card text-white">Ingresa con Google</Card.Title>
            <GoogleLogInOut setNombre={setNombre} setProfilePic={setProfilePic} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
          </Card.Body>
        </Card>
        </Container>
    //   </div>
    // </div>
  );
};
export default Home;
