import NavbarMenu from "../Components/NavbarMenu/NavbarMenu";
import Adsense from "../Components/Adsense/Adsense";
import FoodCard from "../Components/FoodCard/Card";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      {/* /////////////////// NAVBAR /////////////////// */}
      <div className="container">
        {/* /////////////////// NAVBAR-DEKSTOP /////////////////// */}
        <div className="navbar-menu">
          <NavbarMenu />
        </div>
      </div>
      {/* /////////////////// ADS CAROUSEL /////////////////// */}
      <div
        className="container my
      -3"
      >
        <Adsense />
      </div>
      {/* /////////////////// FOOD CARDS /////////////////// */}
      <div className="container">
        <section className="food-menu">
          <h3>Food Menu</h3>
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
