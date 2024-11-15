import s from "./header.module.css";
import logokvitka from "../../images/logokvitka-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.logoWrapper}>
            <img src={logokvitka} alt="logoPhoto" className={s.logo} />
            <p className={s.logoText}>Рослини Червоної Книги</p>
          </div>
          <nav>
            <ul className={s.list}>
              <li className={s.listItem}>
                <Link to="/" className={s.listItemText}>
                  Головна сторінка
                </Link>
              </li>
              <li className={s.listItem}>
                <Link to="/plants" className={s.listItemText}>
                  Рослини
                </Link>
              </li>
              <li className={s.listItem}>
                <Link to="/protection" className={s.listItemText}>
                  Охорона
                </Link>
              </li>
              <li className={s.listItem}>
                <Link to="/gallery" className={s.listItemText}>
                  Галерея
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
