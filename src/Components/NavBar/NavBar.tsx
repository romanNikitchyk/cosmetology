import React from 'react';
import styles from './NavBar.module.css'
import logo from '../../images/logo.svg'
import { DownOutlined } from '@ant-design/icons';
import type {MenuProps} from 'antd';
import { Dropdown, Space } from 'antd';

export const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => alert('hi')}>
            <Space className={styles.navButtons}>
              Услуги
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Space className={styles.navButtons}>
          Обо мне
        </Space>
        <Space className={styles.navButtons}>
          Контакты
        </Space>
      </div>
    </header>
  );
};


const items: MenuProps['items'] = [

  {
    key: '1',
    label: 'Инъекционная косметология',
    children: [
      {
        key: '1-1',
        label: 'Консультация',
      },
      {
        key: '1-2',
        label: 'Биоревитализация и мезотерапия',
      },
      {
        key: '1-3',
        label: 'Коллагенотерапия',
      },
      {
        key: '1-4',
        label: 'Увеличение губ',
      },
      {
        key: '1-5',
        label: 'Растворение старого филлера',
      },
      {
        key: '1-6',
        label: 'Ферментотерапия и липолитики',
      },
    ],
  },
  {
    key: '2',
    label: 'Безинъекционная косметология',
    children: [
      {
        key: '2-1',
        label: 'Консультация',
      },
      {
        key: '2-2',
        label: 'Разбор/подбор домашнего ухода',
      },
      {
        key: '2-3',
        label: 'Уход для кожы с акне',
      },
      {
        key: '2-4',
        label: 'Антивозрастной уход',
      },
      {
        key: '2-5',
        label: 'Уход за кожей с пигментацией',
      },
      {
        key: '2-6',
        label: 'Уход для чувствительной кожей',
      },
      {
        key: '2-7',
        label: 'Экспресс лифтинг',
      },
      {
        key: '2-8',
        label: 'увлажнение и антиоксидантный уход',
      },
    ],
  },
  {
    key: '3',
    label: 'Профессиональная косметика',

  },

];


