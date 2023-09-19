import "../styles/Home.css";
import Header from "./Header";

import Card from "./Card";
import relojes from "../relojes";
import reloj4 from "../assets/images/reloj4.png";

function Home() {
  function CreateCards(reloj) {
    return (
      <Card
        key={reloj.id}
        image={reloj.image}
        image_info={reloj.image_info}
        tittle={reloj.tittle}
        information={reloj.information}
        price={reloj.price}
      />
    );
  }
  return (
    <div>
      <Header />
      <div className="titulo">
        <h2>DESTACADOS</h2>
        <hr></hr>
      </div>

      <section className="Destacados">{relojes.map(CreateCards)}</section>
      <section className="Ubicacion">
        <div className="UbicacionInfo">
          <h2>Puedes Encontrarnos en:</h2>
          <p>
            Universidad Catolica de El dalvador, los dias martes en el edificio
            C aula C46, y los dias viernes en el edificio E aula E20, nuestra
            sucursal cuenta con la mejor seguridad y atencion 100%
            especializada.
          </p>
          <img src={reloj4} alt="imagen de reloj" />
        </div>
        <div className="mapa">
          <iframe
            title="Ubicación en el Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.596340267907!2d-89.55097142569616!3d13.982616191909331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e6202f8eeca1%3A0x976b0fd1a95a4d8a!2sUniversidad%20Cat%C3%B3lica%20de%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1693027294047!5m2!1ses-419!2ssv"
            width="90%"
            height="450"
            style={{ border: "2px solid goldenrod", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
