import NavbarMenu from "../Components/NavbarMenu/NavbarMenu";
// import Adsense from "../Components/Adsense/Adsense";
import FoodCard from "../Components/FoodCard/Card";
import Footer from "../Components/Footer/Footer";
import BottomNavbar from "../Components/BottomNavbar/BottomNavbar";
import { BottomNavbarContainer } from "../Components/BottomNavbar";
const Home = () => {
  return (
    <>
      <BottomNavbarContainer className="d-flex justify-content-between align-items-center">
        <BottomNavbar />
      </BottomNavbarContainer>
      {/* /////////////////// NAVBAR /////////////////// */}
      <div className="container">
        {/* /////////////////// NAVBAR-DEKSTOP /////////////////// */}
        <div className="navbar-menu">
          <NavbarMenu />
        </div>
      </div>
      {/* /////////////////// ADS CAROUSEL /////////////////// */}
      {/* <div
        className="container my
      -3"
      >
        <Adsense />
      </div> */}
      {/* /////////////////// FOOD CARDS /////////////////// */}
      <div className="container my-4">
        <section className="food-menu">
          <h3 className="text-uppercase fw-bolder">PREMIUM BURGER</h3>
        </section>
        <section className="cards">
          <FoodCard />
        </section>
      </div>
      {/* /////////////////// FOOTER /////////////////// */}
      <>
        <Footer />
      </>
    </>
  );
};

export default Home;
