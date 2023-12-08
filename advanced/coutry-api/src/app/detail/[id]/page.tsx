import BackButton from "@/components/BackButton";
import Image from "next/image";

interface DetailProps {
  id: string;
}

interface CountryProps {
  name: { common: string; nativeName: { [key: string]: { official: string } } };
  population: number;
  region: string;
  capital: Array<string>;
  flags: { png: string; alt: string };

  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: { name: string };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
}

const Detail = async ({ params }: { params: DetailProps }) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.id}`
  );

  const data: Array<CountryProps> = await response.json();
  const pais = data[0];
  const language = Object.keys(pais.name.nativeName)[0];
  const currencies = Object.keys(pais.currencies)[0];
  return (
    <main className="flex  flex-col max-w-[1440px] mx-auto mt-4">
      <div>
        <BackButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex justify-center md:justify-start mr-10 min-h-[400px]">
          <Image
            src={pais.flags.png}
            alt={pais.flags.alt}
            fill
            sizes="80%"
          ></Image>
        </div>
        <div className="p-10">
          <h2 className="text-3xl font-bold">{pais.name.common}</h2>
          <div className="flex md:flex-row flex-col pt-4 md:justify-between">
            <div>
              <div>
                <span className="font-bold">Native Name: </span>
                {pais.name.nativeName[language].official}
              </div>
              <div>
                <span className="font-bold">Population: </span>
                {Intl.NumberFormat().format(pais.population)}
              </div>
              <div>
                <span className="font-bold">Region: </span>
                {pais.region}
              </div>
              <div>
                <span className="font-bold">Sub Region: </span>
                {pais.subregion}
              </div>
              <div>
                <span className="font-bold">Capital: </span>
                {pais.capital[0]}
              </div>
            </div>
            <div>
              <div>
                <span className="font-bold">Top Level Domain: </span>
                {pais.tld[0]}
              </div>
              <div>
                <span className="font-bold">Currencies: </span>
                {pais.currencies[currencies].name}
              </div>
              <div>
                <span className="font-bold">Languages: </span>
                {pais.languages[language]}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span className="font-bold">Border Countries: </span>
            {pais.borders &&
              pais.borders.map((border) => (
                <span
                  key={border}
                  className="bg-white dark:bg-dark-blue shadow-md rounded-md px-4 py-2 mr-2"
                >
                  {border}
                </span>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
