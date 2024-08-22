import { useEffect } from "react";
import image from "../assets/gym27.jfif";
import classes from "../styles/secondGrade.module.css";
import { Link } from "react-router-dom";

const SecondGrade = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.secondGrade}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2>  الملاكمة </h2>
          <p>
            نمضي معا نحو بناء جسم رياضي قادر على المنافسة في البطولات الوطنية والعالمية
          </p>
        </div>
      </div>
      <div>
         
          تعتبر رياضة الملاكمة من أكثر أنواع الرياضة انتشارا في العالم وخصوصا في الفترة الأخيرة ، لذلك نحرص في نادي الذئاب على الاهتمام في هذه الرياضة على وجيه الخصوص وتوفير كل المعدات والأجهزة المتطورة للوصول إلى أفضل النتائج وكما نعمل على توفير برامج تدريبية مدروسة بعناية لجميع الأجسام والفئات العمرية 
      </div>
      <div> 
            <h3> البرامج التدريبية  </h3>
            <ul> 
               <Link to="/trainingProgram/7"><li> برنامج الرجال الصباحي</li></Link> 
               <Link to="/trainingProgram/8"><li> برنامج الرجال المسائي</li></Link>
               <Link to="/trainingProgram/9"><li>برنامج الأطفال الصباحي </li></Link>
               <Link to="/trainingProgram/10"><li> برنامج الأطفال المسائي</li></Link>
               <Link to="/trainingProgram/11"><li> برنامج النساء الصباحي</li></Link> 
               <Link to="/trainingProgram/12" >  برنامج النساء المسائي</Link>

            </ul>
      </div>
    </div>
  );
};

export default SecondGrade;
