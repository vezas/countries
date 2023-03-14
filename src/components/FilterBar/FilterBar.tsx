import { FC, useContext } from 'react';
import { DataContext } from 'store/data-context';
import { regionList } from 'data/region-list';
import { ReactComponent as SearchIcon } from 'assets/search-outline.svg';
import styles from 'components/FilterBar/FilterBar.module.scss';

export const FilterBar: FC = () => {
  const { searchCountry, searchCountryByRegion } = useContext(DataContext);

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
          <select className={styles.select} onChange={searchCountryByRegion}>
            <option value='default'>Filter by Region</option>
            <option value=''>All</option>
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
