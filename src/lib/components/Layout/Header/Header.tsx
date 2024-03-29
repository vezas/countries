import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SunIcon } from 'assets/sunny-outline.svg';
import { ReactComponent as MoonIcon } from 'assets/moon-outline.svg';
import { ThemeContext } from 'lib/stores';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <h1 className={styles.heading}>Where in the world?</h1>
      </Link>
      <button className={styles.toggleThemeBtn} onClick={toggleTheme}>
        {theme === 'dark' ? (
          <SunIcon className={styles.toggleIcon} />
        ) : (
          <MoonIcon className={styles.toggleIcon} />
        )}
        {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
};
