import { Dispatch, FC, SetStateAction, ChangeEvent } from 'react';
import { regionList } from 'data/region-list';
import { ReactComponent as SearchIcon } from 'assets/search-outline.svg';
import styles from 'components/FilterBar/FilterBar.module.scss';

interface FilterBarProps {
  setQuery: Dispatch<SetStateAction<string>>;
}

export const FilterBar: FC<FilterBarProps> = ({ setQuery }) => {
  const searchCountry = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const searchCountryByRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuery(e.target.value);
    e.target.value = 'default';
  };

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
