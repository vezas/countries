import { FC } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { countriesApi } from 'services/api.service';
import { ButtonLink } from 'components/ui/ButtonLink';
import styles from 'pages/DetailPage/DetailPage.module.scss';

interface IData {
  name: { common: string; nativeName?: { [key: string]: { official: string } } };
  flags: { svg: string; alt?: string };
  population: number;
  region: string;
  subregion?: string;
  capital?: string;
  tld: string;
  currencies: { [key: string]: { name: string } } | null;
  languages?: string[];
  borders: string[];
}

export const DetailPage: FC = () => {
  const data = useLoaderData() as IData[];

  const {
    name: { common: name, nativeName },
    flags: { svg, alt },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders
  } = data[0];

  const officialName = nativeName && nativeName[Object.keys(nativeName)[0]].official;
  const currencyName = currencies && currencies[Object.keys(currencies)[0]].name;

  return (
    <>
      <main className={styles.detailPage}>
        <ButtonLink className={styles.backBtn} to='/'>
          &larr; Back
        </ButtonLink>
        <img className={styles.flag} src={svg} alt={alt || name + 'flag'} />
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.primaryDetails}>
          {officialName && (
            <p className={styles.detailGroup}>
              <span className={styles.detailHeader}>Native Name: </span>
              <span className={styles.detailInfo}>{officialName}</span>
            </p>
          )}
          <p className={styles.detailGroup}>
            <span className={styles.detailHeader}>Population: </span>
            <span className={styles.detailInfo}>{population.toLocaleString('en-US')}</span>
          </p>
          <p className={styles.detailGroup}>
            <span className={styles.detailHeader}>Region: </span>
            <span className={styles.detailInfo}>{region}</span>
          </p>
          {subregion && (
            <p className={styles.detailGroup}>
              <span className={styles.detailHeader}>Sub Region: </span>
              <span className={styles.detailInfo}>{subregion}</span>
            </p>
          )}
          {capital && (
            <p className={styles.detailGroup}>
              <span className={styles.detailHeader}>Capital: </span>
              <span className={styles.detailInfo}>{capital}</span>
            </p>
          )}
        </div>
        <div className={styles.secondaryDetails}>
          <p className={styles.detailGroup}>
            <span className={styles.detailHeader}>Top Level Domain: </span>
            <span className={styles.detailInfo}>{tld}</span>
          </p>
          {currencyName && (
            <p className={styles.detailGroup}>
              <span className={styles.detailHeader}>Currencies: </span>
              <span className={styles.detailInfo}>{currencyName}</span>
            </p>
          )}
          {languages && (
            <p className={styles.detailGroup}>
              <span className={styles.detailHeader}>Languages: </span>
              <span className={styles.detailInfo}>{Object.values(languages).join(', ')}</span>
            </p>
          )}
        </div>

        {borders && (
          <div className={styles.bordersGroup}>
            <h3 className={styles.bordersHeader}>Border Countries: </h3>
            <div className={styles.bordersContainer}>
              {borders.map((border) => (
                <ButtonLink key={border} to={`/country/${border}`}>
                  {border}
                </ButtonLink>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return countriesApi.get(`/alpha/${params.name}`);
};
