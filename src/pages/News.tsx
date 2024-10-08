import classes from "../styles/news.module.css";
import NewsCard from "../components/NewsCard";
import image1 from '../assets/gym19.jfif'
import image2 from '../assets/gym20.jfif'
import image3 from '../assets/gym21.jfif'
import image4 from '../assets/gym18.jfif'
import image5 from '../assets/gym1.jfif'
import image6 from '../assets/gym15.jfif'
import { useEffect } from "react";
const news_ar = [
  {
    id: 1,
    image:image1,
    title: "المسابقة الوطنية للكارتيه",
    summary:"أحرز لاعبنا سامي الأحمد المركز الأول في المسابقة الوطنية للكاراتيه للأطفال",
    text: "  أحرز لاعبنا سامي الأحمد المركز الأول في المسابقة الوطنية للكارتيه للأطفال وذلك بعدما تغلب في النهائي على اللاعب ملهم بركات على حلبة الباسل بالمدينة الرياضية بدمشق",
  },
  {
    id: 2,
    image: image2,
    title: "المسابقة الوطنية للكارتيه",
    summary: "أحرز اللاعب سامر الخالد المركز الأول في المسابقة الوطنية للكارتيه ",
    text:"أحرز اللاعب سامر الخالد المركز الأول في المسابقة الوطنية للكارتيه وذلك ضمن منافسات الوزن الخفيف ليكون ممثل سوريا في المنافسة العالمية القادمة ",
  },
  {
    id: 3,
    image: image3,
    title: "المسابقة الوطنية للبوكسنج",
    summary:"أحرز لاعبنا سعد الأحمد المركز الأول في المسابقة الوطنية للبوكسنج للأطفال",
    text: "  أحرز لاعبتنا سعاد الأحمد المركز الأول في المسابقة الوطنية للبوكسنج للأطفال وذلك بعدما تغلب في النهائي على اللاعب سهام بركات على حلبة الباسل بالمدينة الرياضية بدمشق",
  },
  {
    id: 4,
    image: image4,
    title: "افتتاح دورة كاراتيه جديدة للأطفال",
    summary: "سيتم افتتاح دورة كاراتيه جديدة للأطفال في بداية الشهر المقبل وذلك تحت إشراف المدرب سامر الخالد",
    text: " سيتم افتتاح دورة كاراتيه جديدة للأطفال في بداية الشهر المقبل وذلك تحت إشراف المدرب سامر الخالد صاحب الإنجازات الكبيرة وسيتم اختيار أفضل المتدربين للمشاركة في المسابقة الوطنية",
  },
  {
    id: 5,
    image: image5,
    title: "افتتاح دورة بوكسنج جديدة للرجال",
    summary: "سيتم افتتاح دورة بوكسنج جديدة للأطفال في بداية الشهر المقبل وذلك تحت إشراف المدرب رامي الأحمد",
    text: " سيتم افتتاح دورة بوكسنج جديدة للأطفال في بداية الشهر المقبل وذلك تحت إشراف المدرب رامي الأحمد صاحب الإنجازات الكبيرة وسيتم اختيار أفضل المتدربين للمشاركة في المسابقة الوطنية",
  },
  {
    id: 6,
    image: image6,
    title: "افتتاح دورة بوكسنج جديدة للنساء",
    summary: "سيتم افتتاح دورة بوكسنج جديدة للأطفال في بداية الشهر المقبل وذلك تحت إشراف المدربة سارة السالم",
    text: " سيتم افتتاح دورة بوكسنج جديدة للأطفال في بداية الشهر المقبل وذلك تحت إشراف المدرب سارة السالم صاحب الإنجازات الكبيرة وسيتم اختيار أفضل المتدربين للمشاركة في المسابقة الوطنية",
  },
];  
const News = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.news_container}>
      <h2>أخبارنا </h2>
      <div>
        {news_ar.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id}
            image={news.image}
            title={news.title}
            summary={news.summary}
            text={news.text}
          ></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;
