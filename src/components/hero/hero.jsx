// Hero.js
import s from "./hero.module.css";
import heroImg from "../../images/redbook.jpg";

const Hero = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <img
          src={heroImg}
          alt="Рослини Червоної Книги"
          className={s.background}
        />
        <div className={s.contentWrapper}>
          <h1 className={s.title}>Відкрийте світ рослин Червоної Книги</h1>
          <p className={s.text}>
            Рослини Червоної Книги України – це унікальні види, які потребують
            нашого захисту. Дізнайтеся більше про їх важливість для екосистеми,
            загрози, які вони переживають, і як кожен з нас може допомогти
            зберегти це природне багатство для майбутніх поколінь.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
