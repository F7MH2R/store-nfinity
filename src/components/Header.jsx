//import header_image from "../assets/images/header_image.jpeg";
import "../styles/Header.css";
import reloj5 from "../assets/images/porta.png";
const Header = () => {
  return (
    <>
      <header>
        <img src={reloj5} alt="imagen de reloj" />
        <h1>
          El Arte de Medir el Tiempo!
          <br /> Explora Nuestra Colección de Relojes"
        </h1>
      </header>
    </>
  );
};

export default Header;
