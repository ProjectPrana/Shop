import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src="/img/logo.png" alt="" className="logo" />
        <div className="header__title">
          <h3 className="header__titleMain"> REACT SNEAKERS </h3>
          <p className="header__description"> Магазин лучших кроссовок </p>
        </div>
      </div>
      <div className="header__right">
        <div className="header__basket basket">
          <a href="" className="basket__link">
            <img src="/img/svg/basket.svg" alt="" className="basket__svg" />
            <span className="basket__title"> 1200 грн. </span>
          </a>
        </div>
        <div className="header__like like">
          <a href="" className="like__link">
            <img src="/img/svg/like.svg" alt="" className="like__svg" />
          </a>
        </div>
        <div className="header__profile profile">
          <a href="" className="profile__link">
            <img src="/img/svg/profile.svg" alt="" className="profile__svg" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
