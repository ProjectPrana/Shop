import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link to="/">
          <img src="/img/logo.png" alt="" className={styles.logo} />
        </Link>
        <div className={styles.header__title}>
          <h3 className={styles.header__titleMain}> REACT SNEAKERS </h3>
          <p className={styles.header__description}>
            {" "}
            Магазин лучших кроссовок{" "}
          </p>
        </div>
      </div>
      <div className={styles.header__right}>
        <div className={styles.header__basket}>
          <a
            href="#"
            className={styles.basket__link}
            onClick={props.clickBasket}
          >
            <img
              src="/img/svg/basket.svg"
              alt=""
              className={styles.basket__svg}
            />
            <span className={styles.basket__title}> 1200 грн. </span>
          </a>
        </div>
        <div className={styles.header__like}>
          <Link to="/like" className={styles.like__link}>
            <img src="/img/svg/like.svg" alt="" className={styles.like__svg} />
          </Link>
        </div>
        <div className={styles.header__profile}>
          <a href="" className={styles.profile__link}>
            <img
              src="/img/svg/profile.svg"
              alt=""
              className={styles.profile__svg}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
