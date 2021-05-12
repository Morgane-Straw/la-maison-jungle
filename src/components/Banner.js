import "../styles/Banner.css";
import leaf from "../assets/leaf.png";
function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={leaf} alt="feuille logo" className="lmj-logo" />
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
