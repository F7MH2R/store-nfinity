function Card(props) {
  return (
    <div>
      <img src={props.image} alt={props.image_info} />
      <h2>{props.tittle}</h2>
      <p>{props.information}</p>
      <h3>{props.price}</h3>
      <button>Comprar</button>
    </div>
  );
}
export default Card;
