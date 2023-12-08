import Card, { CardProps } from "./Card";

interface ListProps {
  search?: string;
  region?: string;
}

interface Country {
  flags: { png: string };
  name: { common: string };
  capital: Array<string>;
  region: string;
  population: number;
  ccn3: string;
}

const List: React.FC<ListProps> = async ({ search, region }) => {
  const response = await fetch(
    region
      ? `https://restcountries.com/v3.1/region/${region}?fields=name,capital,region,population,flags,ccn3`
      : "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,ccn3",
    {
      next: { revalidate: 100 },
    }
  );
  let data: Array<Country> = await response.json();

  if (search) {
    data = data.filter((item) => item.name.common.includes(search));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-list-countries justify-center md:justify-between">
      {data.slice(0, 8).map((country) => {
        return (
          <Card
            key={country.name.common}
            capital={country.capital[0]}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            codigo={country.ccn3}
          />
        );
      })}
    </div>
  );
};

export default List;
