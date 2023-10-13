import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <img src={props.image} alt={props.image_info} />
      <h2>{props.tittle}</h2>
      <p>{props.information}</p>
      <h3>{props.price}</h3>
      <Link to={{ pathname: "/Vista", state: { cardProps: props } }}>
        <button>Comprar</button>
      </Link>
    </div>
  );
}
export default Card;
