import head from "../assets/images/head.png";
import "../styles/Productos.css";
import Card from "./Card";
import relojes from "../relojes";
const Productos = () => {
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
    <div className="productos">
      <header className="inicio">
        <div>
          <h1>Encuentra una gran variedad de productos!</h1>
          <p>
            Descubre la elegancia atemporal con nuestra exclusiva colección de
            relojes: estilo y precisión en cada segundo.
          </p>
        </div>
        <div>
          <img src={head} alt="Imagen del header" />
        </div>
      </header>
      <section className="Destacados">{relojes.map(CreateCards)}</section>
    </div>
  );
};

export default Productos;
