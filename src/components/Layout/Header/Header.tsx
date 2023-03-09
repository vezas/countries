import { FC, useContext } from 'react';
import { ThemeContext } from 'store/theme-context';
import { ReactComponent as SunIcon } from 'assets/sunny-outline.svg';
import { ReactComponent as MoonIcon } from 'assets/moon-outline.svg';
import styles from 'components/Layout/Header/Header.module.scss';

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Where in the world?</h1>
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