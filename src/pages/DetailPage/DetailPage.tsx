import { FC } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { countriesApi } from 'lib/services/api.service';
import { ButtonLink } from 'lib/components/ui/ButtonLink';
import { DetailTextGroup } from 'lib/components/Typography';
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
          {officialName && <DetailTextGroup title='Native Name' detailData={officialName} />}
          <DetailTextGroup title='Population' detailData={population.toLocaleString('en-US')} />
          <DetailTextGroup title='Region' detailData={region} />
          {subregion && <DetailTextGroup title='Sub Region' detailData={subregion} />}
          {capital && <DetailTextGroup title='Capital' detailData={capital} />}
        </div>

        <div className={styles.secondaryDetails}>
          <DetailTextGroup title='Top Level Domain' detailData={tld} />
          {currencyName && <DetailTextGroup title='Currencies' detailData={currencyName} />}
          {languages && (
            <DetailTextGroup title='Languages' detailData={Object.values(languages).join(', ')} />
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
