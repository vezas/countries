import { FC } from 'react';
import { regionList } from 'data/region-list';
import { ReactComponent as SearchIcon } from 'assets/search-outline.svg';
import styles from 'components/Layout/FilterBar/FilterBar.module.scss';

export const FilterBar: FC = () => {
  return (
    <>
      <div className={styles.filterBar}>
        <form className={styles.searchForm}>
          <button type='submit' className={styles.searchBtn}>
            <SearchIcon className={styles.searchIcon} />
          </button>
          <input className={styles.searchInput} type='text' placeholder='Search for a country...' />
        </form>
        <form className={styles.selectForm}>
          <select className={styles.select}>
            <option>Filter by Region</option>
            {regionList.map(({ name, value }) => (
              <option value={value} key={name}>
                {name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
};
