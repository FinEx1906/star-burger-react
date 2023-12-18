import NavbarMenu from "../Components/NavbarMenu/NavbarMenu";
import FoodCard from "../Components/FoodCard/Card";
import Footer from "../Components/Footer/Footer";
import BottomNavbar from "../Components/BottomNavbar/BottomNavbar";
import { BottomNavbarContainer } from "../Components/BottomNavbar";
// import Adsense from "../Components/Adsense/Adsense";
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
        {/* /////////////////// ADS CAROUSEL /////////////////// */}
        <div className="ads-carousel">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/596/763/771/artwork-painting-nighthawks-edward-hopper-wallpaper-preview.jpg"
            alt=""
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "0.25rem",
            }}
          />
        </div>
      </div>
      {/* /////////////////// FOOD CARDS /////////////////// */}
      <div className="container my-4" style={{ zIndex: "-1" }}>
        <section className="food-menu">
          <h3 className="text-uppercase fw-bolder">PREMIUM BURGER</h3>
        </section>
        <section className="cards flex-wrap my-3 d-flex justify-content-between align-items-center w-100">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
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
