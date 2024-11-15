import s from "./plant.module.css";
import one from "../../images/ten/1.png";
import two from "../../images/ten/2.png";
import three from "../../images/ten/3.png";
import four from "../../images/ten/4.png";
import five from "../../images/ten/5.png";
import six from "../../images/ten/6.png";
import seven from "../../images/ten/7.png";
import eight from "../../images/ten/8.png";
import nine from "../../images/ten/9.png";
import ten from "../../images/logokvitka-removebg-preview.png";

const Plant = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.container}>
          <div className={s.textWithImage}>
            <img src={one} alt="Description" className={s.leftImage} />
            <h3 className={s.name}>Рослина 1: Лілія лісова</h3>
            <p>
              Лілія лісова (Lilium martagon) — це багаторічна рослина, що
              занесена до Червоної книги України через свою рідкість. Вона
              зростає в лісах та на лісових галявинах, на території Вінниччини
              її можна зустріти в Карпатах і лісових зонах. Лілія лісова має
              витончені квіти рожевого або пурпурного кольору. Ця рослина
              потребує особливих умов для росту, зокрема, захищених територій
              від вирубування лісів.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={two} alt="Description" className={s.rightImage} />
            <h3 className={s.name}>Рослина 2: Орхідейка</h3>
            <p>
              Орхідейка (Epipactis helleborine) — європейський вид орхідей, який
              зустрічається в лісах Вінниччини. Вона має дуже рідкісні квіти
              зеленуватого або жовтуватого кольору, що приховані в листі.
              Орхідейка є чутливою до змін навколишнього середовища і занесена
              до Червоної книги України через зменшення її чисельності через
              знищення природних місць існування.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={three} alt="Description" className={s.leftImage} />
            <h3 className={s.name}>Рослина 3: Водяний горіх</h3>
            <p>
              Водяний горіх (Trapa natans) — водна рослина, яка росте у озерах і
              ставках. Ця рослина з великими плаваючими листками і великими
              колючими плодами, що нагадують горіхи, є рідкісною на території
              Вінниччини. Водяний горіх занесений до Червоної книги України
              через руйнування природних водойм.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={four} alt="Description" className={s.rightImage} />
            <h3 className={s.name}>Рослина 4: Черевіця</h3>
            <p>
              Черевіця (Aconitum lycoctonum) — отруйна рослина, яка зростає на
              високогір'ях та в лісах Вінниччини. Вона має фіолетові квіти та
              великий вміст токсичних алкалоїдів, що робить її небезпечною для
              людини. Вона занесена до Червоної книги України через небезпеку
              зникнення через знищення природних місць існування.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={five} alt="Description" className={s.leftImage} />
            <h3 className={s.name}>Рослина 5: Латаття</h3>
            <p>
              Латаття (Nymphaea alba) — це водна рослина, що росте в тихих
              водах, зокрема на території Вінниччини. Вона має великі білі квіти
              та велике листя, що плаває на поверхні води. Латаття занесена до
              Червоної книги України через зменшення кількості природних водойм,
              де вона зростає.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={six} alt="Description" className={s.rightImage} />
            <h3 className={s.name}>Рослина 6: Гречка дика</h3>
            <p>
              Гречка дика (Fagopyrum esculentum) — багаторічна рослина, що росте
              в лісах та на лісових галявинах Вінниччини. Її насіння містить
              багато корисних речовин, але сама рослина є рідкісною і занесена
              до Червоної книги через втрату природних місць існування та
              зменшення чисельності.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={seven} alt="Description" className={s.leftImage} />
            <h3 className={s.name}>Рослина 7: Ластівник</h3>
            <p>
              Ластівник (Asplenium scolopendrium) — рідкісна папороть, що росте
              в лісах Вінниччини. Ця рослина має характерні довгі листки та
              здатна рости в умовах високої вологості. Вона занесена до Червоної
              книги через знищення місць її існування внаслідок вирубки лісів.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={eight} alt="Description" className={s.rightImage} />
            <h3 className={s.name}>Рослина 8: Боровик</h3>
            <p>
              Боровик (Boletus edulis) — гриб, що росте в лісах Вінниччини. Це
              один з найбільш смачних і корисних грибів, але, через зміну
              клімату та знищення лісів, чисельність боровиків значно
              зменшилась. Вони є рідкісними і потребують охорони.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={nine} alt="Description" className={s.leftImage} />
            <h3 className={s.name}>Рослина 9: Трава котячі лапки</h3>
            <p>
              Трава котячі лапки (Antennaria dioica) — рослина, що росте в сухих
              степах Вінниччини. Вона має особливі квіти, що нагадують лапки
              кота. Вона занесена до Червоної книги через її зменшення
              чисельності через антропогенний вплив та зміну клімату.
            </p>
          </div>
          <div className={s.textWithImage}>
            <img src={ten} alt="Description" className={s.rightImage} />
            <h3 className={s.name}>Рослина 10: Золотарник</h3>
            <p>
              Золотарник (Solidago virgaurea) — рідкісна рослина, що
              зустрічається в лісах та на лісових галявинах Вінниччини. Вона має
              жовті квіти та росте в умовах високої вологості. Золотарник
              занесений до Червоної книги України через зменшення кількості
              природних місць існування через антропогенний вплив.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plant;
