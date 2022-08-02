import classes from "./Card.module.css";
import Button from "./Button";

function Card({ image, title, About }) {
  return (
    <div className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.top}>
          <div className={classes.imagecontainer}>
            <img src={image} className={classes.imagee} alt="Project " />
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.innerbottom}>
            <h2>{title}</h2>
            <div className={classes.texta}>{About}</div>
            <div className={classes.buttons}>
              <Button>Show Code</Button>
              <Button>Visit Site</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
