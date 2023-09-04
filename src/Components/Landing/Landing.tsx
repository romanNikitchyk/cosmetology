import React from 'react';
import styles from './Landing.module.css'
import { Button } from "antd";

export const Landing = () => {
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


