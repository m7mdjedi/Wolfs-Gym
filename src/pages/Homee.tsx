import React, { useEffect, useState } from "react";
import buildingImg from "../assets/insideGym.jfif";
import logoImg from "../assets/gymLogo.png";
import student1 from "../assets/player1.png";
import student2 from "../assets/player5.png";
import student3 from "../assets/player2.png";

import classes from "../styles/home.module.css";
import { useObserver } from "../hooks/useObserver";

import boxingImg from "../assets/boxing.png";
import Slider from "../components/Slider";
import TopBottomModal from "../components/TopBottomModal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visible, setVisible] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const ref1 = React.useRef<HTMLInputElement>(null);
  const ref2 = React.useRef<HTMLInputElement>(null);
  const ref3 = React.useRef<HTMLInputElement>(null);
  const isVisible3 = useObserver(ref3);
  const isVisible2 = useObserver(ref2);
  const isVisible1 = useObserver(ref1);
  const isVisible = useObserver(ref) || visible;
  if (isVisible && !visible) {
    setVisible(true);
  }
  if (isVisible3 && !visible3) {
    setVisible3(true);
  }
  return (
    <div className={classes.home}>
      <div>
        <div className={classes.typewriter}>
          <h1> معا نحو تحقيق الأحلام.</h1>
      
        </div>
      </div>
     <TopBottomModal link="register/login" text="ابدأ الآن"/>
      {/* <Video video={shcoolVid} width="100%" height="100%" />  */}
      <Slider />

      <div className={classes.homeAboutUs}>
        <div ref={ref} dir="rtl" className={classes.homeAboutUsTextDiv}>
          <h1 className={`${isVisible ? classes.show : ""}`}>
            نبذة عن نادي الذئاب الرياضي{" "}
          </h1>
          <p>
            نادي الذئاب الرياضي هو أول نادي متخصص في تدريب الملاكمة الكلاسيكية
            في الجمهورية العربية السورية . يقدم النادي برامج تدريبية لجميع
            الأعمار تحت إشراف نخبة من المدربين الدوليين
          </p>
        </div>
        <div className={classes.homeAboutUsImgDiv}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={logoImg} />
        </div>
      </div>
      <div className={classes.homeLocation}>
        <div ref={ref1} dir="rtl" className={classes.homeLocationTextDiv}>
          <h1 className={`${isVisible1 ? classes.show : ""}`}>
            أكثر من 1000 متدرب من جميع أنحاء سوريا{" "}
          </h1>
        </div>
        <div className={classes.homeLocationImgDev}>
          <img src={boxingImg} />
        </div>
      </div>
      <div className={classes.home_about_school}>
        <div ref={ref2} dir="rtl" className={classes.home_about_school_text}>
          <h1 className={`${isVisible2 ? classes.show : ""}`}>عن النادي</h1>
          <p>
            نفخر بكوننا أول نادي متحصص للملاكمة وبناء الأجسام في سوريا والذي
            يؤهل سنويا مئات اللاعبين ليمثلوا سوريا في البطولات الإقليمية
            والدولية
          </p>
          <p>
            نوفر برامج تدريبية لجميع الفئات السنية كما يوجد برامج تدريبية مخصصة
            للنساء
          </p>
          <p>
            نوفر جميع الأدوات والتقنيات اللازمة لصناعة لاعبين قادرين على
            المنافسة في جميع البطولات العالمية
          </p>
        </div>
        <div className={classes.home_about_school_img}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={buildingImg} />
        </div>
      </div>
      <div ref={ref3} className={classes.home_about_registeration}>
        <div
          className={`${classes.home_about_registeration_section} ${
            isVisible3 ? classes.move_left : ""
          }`}
        >
          <div>
            {" "}
            <p>نبذة عنا </p>
          </div>
          <div>
            {" "}
            <p> المدربين </p>
          </div>
          <div>
            {" "}
            <p>التسجيل</p>
          </div>
        </div>
        <div
          className={`${classes.home_about_registeration_section} ${
            isVisible3 ? classes.move_right : ""
          }`}
        >
          <div>
            {" "}
            <p> رسالة النادي</p>
          </div>
          <div>
            {" "}
            <p> البرامج التدريبيّة</p>
          </div>
        </div>
      </div>
      <div className={classes.home_gallery}>
        <div>
          <p>
            <span>14</span>
            <span> أعضاؤنا من 14 محافظة </span>
          </p>
          <img src={student1} alt="picture of our students" />
        </div>

        <div>
          <p>
            <span>2000</span>
            <span>عدد الأعضاء حول سوريا </span>
          </p>
          <img src={student2} alt="picture of our students" />
        </div>

        <div>
          <p>
            <span>#1</span>
            <span>أول نادي للملاكمة في سوريا </span>
          </p>
          <img src={student3} alt="picture of our students" />
        </div>
      </div>
    </div>
  );
};

export default Home;
