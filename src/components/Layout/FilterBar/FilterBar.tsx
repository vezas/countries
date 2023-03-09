import { FC, useContext } from 'react';
import { DataContext } from 'store/data-context';
import { regionList } from 'data/region-list';
import { ReactComponent as SearchIcon } from 'assets/search-outline.svg';
import styles from 'components/Layout/FilterBar/FilterBar.module.scss';

export const FilterBar: FC = () => {
  const { searchCountry } = useContext(DataContext);

  return (
    <>
      <div className={styles.filterBar}>
        <div className={styles.searchForm}>
          <button type='button' className={styles.searchBtn}>
            <SearchIcon className={styles.searchIcon} />
          </button>
          <input
            type='search'
            onChange={searchCountry}
            className={styles.searchInput}
            placeholder='Search for a country...'
          />
        </div>
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
