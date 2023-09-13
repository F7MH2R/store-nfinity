import "../styles/Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <ul className="redes">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/repoiuken/"
            >
              <i className="fab fa-facebook-f icon"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/repoiuken/"
            >
              <i className="fab fa-instagram icon"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/repoiuken/"
            >
              <i className="fab fa-whatsapp icon"></i>
            </a>
          </li>
        </ul>
      </footer>
      <div className="derechos">
        <small>CopyRight © {currentYear}</small>
      </div>
    </>
  );
}
export default Footer;
