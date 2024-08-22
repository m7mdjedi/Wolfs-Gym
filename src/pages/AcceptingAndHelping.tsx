import image from "../assets/gym23.jfif";
import classes from "../styles/acceptingAndHelping.module.css";
import schoolEntrance from "../assets/gym25.jfif";
import conferenceRoom from "../assets/gym24.jfif";
import { useEffect } from "react";

const AcceptingAndHelping = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.acceptingAndHelping}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2>القبول والمساعدة </h2>
          <p>يسعدنا اختيارك لنا لتكمل معنا رحلتك نحو البطولات </p>
        </div>
      </div>
      <div>
        <p>
          شكرا لك لاختيارك لنا ولثقتك بنا فاختيارك لنا يزيدنا عزيمة وإصرار على المضي قدما نحو المزيد من التميز والعمل 
        </p>
        <p>
       اختيارك لنا هو اختيار للبيئة المثالية التي تصنع الانجازات وتحقق الأحلام
        </p>
        <p>
         اختيارك لنا هو اختيار للشركاء الذين سيرافقونك خطوة بخطوة نحو البطولات والألقاب
        </p>
      </div>
      <div>
        <div>
          <h2> حقائق </h2>
          <img src={conferenceRoom} />
        </div>
        <div>
          <div>
            <h3>3000</h3>
            <p>لاعب و لاعبة  </p>
          </div>
          <div>
            <h3>100+</h3>
            <p>أكثر من مئة مدرب ومدربة</p>
          </div>
          <div>
            <h3>#10</h3>
            <p>أكثر من 10 فروع في جميع أنحاء سوريا  </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={schoolEntrance} />
        </div>
        <div>
          <h3>ندعوكم للتسجيل في العام الجديد 2023 -2024  </h3>
          <ul>
            <li>
              أعزائنا في كل مكان حول العالم نعلمكم وبكل حماس بأننا سنبدأ برامجنا التدريبية الجديدة
               قريبا واليوم وإمكانكم حجز مقعد لتكونوا أول المستفيدين من
              ميزاتنا ولفترة محدودة{" "}
            </li>
            <li>
            اهتمام بالجانب البدني والنفسي والصحي للمتدربين من قبل مدربين عالميين مختصين
            </li>
            <li>  المشاركة في المسابقات الوطنية والعالمية </li>
            <li>اختيار فترة التدريب صباحا او مساء</li>
            <li>حسم خاص للأخوة </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcceptingAndHelping;
