import styles from './Header.module.css'

import ignitelogo from '../assets/IgniteLogo.svg';

export function Header(){
  return (
    <header className={styles.Header}>
      <img src={ignitelogo
      } alt="logo"/>


    </header>
  )
}