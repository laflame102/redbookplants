import s from "./footer.module.css";
import logo from "../../images/logokvitka-removebg-preview.png";

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logoWrapper}>
          <img src={logo} alt="logoPhoto" className={s.logo} />
          <p className={s.logoText}>Рослини Червоної Книги</p>
        </div>
        <p style={{ color: "white" }}>Коваль Андрій &#174;</p>
      </div>
    </footer>
  );
};

export default Footer;
