import image from "../assets/insideGym.jfif";
import classes from "../styles/aboutUs.module.css";
import Video from "../components/Video";
import schoolEntrance from "../assets/gym1.jfif";
import schoolEntrance2 from "../assets/gym2.jfif";
import schoolEntrance3 from "../assets/gym3.jfif";
import conferenceRoom from "../assets/gym4.jfif";
import schoolVid from "../assets/vid.mp4";
import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.aboutUs}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> حول </h2>
          <p>
            نسعى دائما لاكتشاف المواهب وتنميتهامن أجل بناء جيل رياضي قادر على
            المنافسة في البطولات المحلية والعالمية
          </p>
        </div>
      </div>
      <div>
        نهدف إلى توفير كل الاحتياجات والمعدات اللازمة لبناء لاعبين قادرين على
        تحقيق الإنجازات في البطولات المحلية والعالمية من خلال مجموعة من المدربين
        العالميين الذين لديهم سجل حافل بالإنجازات
      </div>
      <div>
        <div>
          <Video video={schoolVid} width="100%" height="600px" />
          {/* <Slider/> */}
        </div>
        <div>
          <h2>لماذا نحن ؟</h2>
          <div>
            <p>
              نحن نعتبر من أفضل المدارس الرياضية في العالم بما لدينا من معدات
              وتجهيزات
            </p>
            <p>
              لدينا مجموعة من المدربين العالميين الذين لديهم سجل حافل بالإنجازات
            </p>
            <p>
              لدينا مجموعة من اللاعبين الموهوبين الذين لديهم القدرة على المنافسة
              في البطولات العالمية
            </p>
            <p>لاعبونا حققوا انجازات محلية وعالمية خلال السنوات الماضية</p>
            <p>
              نسعى دائما لمواكبة التطور العالمي من أجل توفير أفضل بيئة للاعبينا
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={schoolEntrance} />
        </div>
        <div>
          <img src={schoolEntrance2} />
        </div>
        <div>
          <img src={schoolEntrance3} />
        </div>
      </div>
      <div>
        <div>
          <h3>2000</h3>
          <p>لاعب ولاعبة</p>
        </div>
        <div>
          <h3>+35</h3>
          <p>مدربين أكثر من 35 عام من الكفاءة والمهنية </p>
        </div>
        <div>
          <h3>#10</h3>
          <p>أكثر من 10 فرع حول سوريا </p>
        </div>
      </div>
      <div>
        <div>
          <h3>رسالة النادي </h3>
          <p>
            {" "}
            نسعى دائما إلى نكون الداعمين الأول للاعبينا من خلال مرافقتهم في
            طريقهم نحو البطولات والانتصارات خطوة بخطوة فنجاحهم هو نجاحنا وفوزهم
            هو فوزنا
          </p>
        </div>
        <div>
          <img src={conferenceRoom} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
