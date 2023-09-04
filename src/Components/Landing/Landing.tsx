import React, {useEffect} from 'react';
import styles from './Landing.module.css'
import { Button } from "antd";
import {db, getCities} from "../../firebaseConfig";

  export const Landing = () => {
    console.log('Landing')
   useEffect(()=> {
     getCities(db)
       .then((res)=>{
         console.log(res)
       })

   },[])

  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <div className={styles.title}>
          <div>Косметологический кабинет </div>
          <div>Анны Никитчик.</div>
          <div>"С любовью к вашей коже"</div>
          <Button size={"large"} type="text" className={styles.button}>Заказать консультацию</Button>
        </div>
      </div>

    </div>
  );
};


