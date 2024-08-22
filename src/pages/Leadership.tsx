import image from "../assets/gym7.jfif";
import classes from "../styles/leadership.module.css";

import bosPic from "../assets/gym17.jfif";
import men1 from "../assets/gym8.jfif";
import men2 from '../assets/gym9.jfif'
import men3 from '../assets/gym10.jfif'
import men4 from '../assets/gym11.jfif'
import men5 from '../assets/gym12.jfif'
import men6 from '../assets/gym13.jfif'
import women1 from '../assets/gym14.jfif'
import women2 from '../assets/gym15.jfif'

import women3 from "../assets/gym16.jfif";
import { useEffect } from "react";

const leadershipAr = [
  {
    id: 1,
    name: "محمد السيد",
    position: "   قسم التوجيه في المدرسة السورية الافتراضية",
    image: men3,
  },
  {
    id: 2,
    name: "عمر السيد",
    position: "مدرب كمال أجسام للأطفال",
    image: men1,
  },
  {
    id: 3,
    name: "سها الأحمد",
    position: "مدربة كمال أجسام للنساء",
    image: women1,
  },
  {
    id: 4,
    name: "لما الابراهيم ",
    position: "مدربة كمال أجسام للنساء",
    image: women2,
  },
  {
    id: 5,
    name: "سامي الأحمد",
    position: "مدرب كمال أجسام للرجال",
    image: men2,
  },
  {
    id: 6,
    name: "وئام كامل ",
    position: "مدرب بوكسنج للأطفال",
    image: men4,
  },
  {
    id: 7,
    name: "رشا الأحمد",
    position: "مدربة بوكسنج للنساء",
    image: women3,
  },
  {
    id: 8,
    name: "منير السالم",
    position: "مدرب بوكسنج للرجال",
    image: men5,
  },
  {
    id: 9,
    name: "وائل الطيب",
    position: "مدرب كارتيه للرجال",
    image: men6,
  },
];

const Leadership = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.leadership}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> فريقنا </h2>
          <p>
         مجموعة من المدربين العالميين الحاصليين على بطولات محلية وعالمية
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={bosPic} />
        </div>
        <div>
          <h3>محمد خالد</h3>
          <p>مدير المدرسة السورية الافتراضية</p>
        </div>
      </div>

      <div>
        {leadershipAr.map((ele) => (
          <div>
            <div>
              <img src={ele.image} />
            </div>
            <div>
              <h3>{ele.name}</h3>
              <p>{ele.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
