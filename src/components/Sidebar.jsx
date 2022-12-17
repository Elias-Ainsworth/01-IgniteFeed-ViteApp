import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="http://pm1.narvii.com/7319/63b3c73f7c7a29ce24f9d85d32fae2af3bf1b8bbr1-268-264v2_00.jpg" 
      />
      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://github.com/Elias-Ainsworth.png" 
        />

        <strong>Lucario Thailor</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Edit your profile
        </a>
      </footer>
    </aside>
  );
}