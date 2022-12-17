import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://64.media.tumblr.com/d6e125b5699109b8f614644011283b08/tumblr_inline_p2szrimhJf1rfreo7_1280.jpg" 
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/Elias-Ainsworth.png" />

        <strong>Elias Ainsworth</strong>
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