import { NavLink } from "react-router-dom";
import {
  Container,
  HeroContainer,
  HeroContent,
  NavigationLink,
} from "./Main.styled";

function Main() {
  return (
    <div>
      <div>
        <HeroContainer>
          <Container className="container">
            <HeroContent>
              <h1>RentACar</h1>
              <p>
              RentACar - Car Rental Application
              </p>
              <p>
              RentCar is an innovative web application that provides car rental
              services in Ukraine. Our platform offers a wide selection of cars
              of various brands and configurations for your comfortable and safe travel.
              </p>
              <p>
                Discover RentACar as your go-to solution for convenient car
                rental services in Ukraine, simplifying the process from start
                to finish.
              </p>
              <NavigationLink>
                <NavLink to="/catalog">SEARCH NOW</NavLink>
              </NavigationLink>
            </HeroContent>
          </Container>
        </HeroContainer>
      </div>
    </div>
  );
}

export default Main;
