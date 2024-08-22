import classes from "../styles/trainingProgram.module.css";
import { useParams } from "react-router";
import image1 from "../assets/gym26.jfif";
import image2 from "../assets/gym27.jfif";
import image3 from "../assets/gym28.jfif";
import { useEffect } from "react";
const trainingPrograms = [
  {
    id: 1,
    name: " برنامج كمال الأجسام للرجال صباحا",
    description: " برنامج مخصص للرجال من الأعمار فوق 18",
    image: image1,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 2,
    name: " برنامج كمال الأجسام للرجال مساء",
    description: " برنامج مخصص للرجال من الأعمار فوق 18",
    image: image1,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 3,
    name: " برنامج كمال الأجسام للأطفال صباحا",
    description: " برنامج مخصص للأطفال من الأعمار دون 18",
    image: image1,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 4,
    name: " برنامج كمال الأجسام للأطفال مساء",
    description: " برنامج مخصص للأطفال من الأعمار دون 18",
    image: image1,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 5,
    name: " برنامج كمال الأجسام للنساء صباحا",
    description: " برنامج مخصص للنساء من الأعمار فوق 18",
    image: image1,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 6,
    name: " برنامج كمال الأجسام للنساء مساء",
    description: " برنامج مخصص للنساء من الأعمار فوق 18",
    image: image1,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 7,
    name: " برنامج الملاكمة للرجال صباحا",
    description: " برنامج مخصص للرجال من الأعمار فوق 18",
    image: image2,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 8,
    name: " برنامج الملاكمة للرجال مساء",
    description: " برنامج مخصص للرجال من الأعمار فوق 18",
    image: image2,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 9,
    name: " برنامج الملاكمة للأطفال صباحا",
    description: " برنامج مخصص للأطفال من الأعمار دون 18",
    image: image2,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 10,
    name: " برنامج الملاكمة للأطفال مساء",
    description: " برنامج مخصص للأطفال من الأعمار دون 18",
    image: image2,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 11,
    name: " برنامج الملاكمة للنساء صباحا",
    description: " برنامج مخصص للنساء من الأعمار فوق 18",
    image: image2,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 12,
    name: " برنامج الملاكمة للنساء مساء",
    description: " برنامج مخصص للنساء من الأعمار فوق 18",
    image: image2,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 13,
    name: " برنامج الكاراتيه للرجال صباحا",
    description: " برنامج مخصص للرجال من الأعمار فوق 18",
    image: image3,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 14,
    name: " برنامج الكاراتيه للرجال مساء",
    description: " برنامج مخصص للرجال من الأعمار فوق 18",
    image: image3,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 15,
    name: " برنامج الكاراتيه للأطفال صباحا",
    description: " برنامج مخصص للأطفال من الأعمار دون 18",
    image: image3,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 16,
    name: " برنامج الكاراتيه للأطفال مساء",
    description: " برنامج مخصص للأطفال من الأعمار دون 18",
    image: image3,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 17,
    name: " برنامج الكاراتيه للنساء صباحا",
    description: " برنامج مخصص للنساء من الأعمار فوق 18",
    image: image3,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
  {
    id: 18,
    name: " برنامج الكاراتيه للنساء مساء",
    description: " برنامج مخصص للنساء من الأعمار فوق 18",
    image: image3,
    price: "15$",
    duration: "90 يوم",
 coach:"سالم الأحمد" 
 },
];
const TrainingProgram = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const { i } = useParams();
  let id = 0;
  if (i) id = parseInt(i);
  return (
    <div className={classes.trainingProgram}>
      <div>
        <img src={trainingPrograms[id - 1].image} />
        <div></div>
        <div>
          <h2> {trainingPrograms[id - 1].name} </h2>
          <p>{trainingPrograms[id - 1].description}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={trainingPrograms[id - 1].image} />
        </div>
        <div>
          <h3>{trainingPrograms[id - 1].name} </h3>
          <ul>
            <li> {trainingPrograms[id - 1].price} سعر الاشتراك . </li>
            <li>{trainingPrograms[id - 1].duration} فترة التدريب.</li>
            <li>حسم 20% للأقارب.</li>
            <li>المدرب :  {trainingPrograms[id-1].coach}. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgram;
