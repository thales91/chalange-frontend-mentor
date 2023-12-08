import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  codigo: string;
}
const Card: React.FC<CardProps> = ({
  name,
  population,
  region,
  capital,
  flag,
  codigo,
}) => {
  return (
    <Link href={`/detail/${codigo}`}>
      <div className="rounded-lg shadow-md mb-10 max-w-[300px] m-auto shadow-dark-gray dark:shadow-dark-blue bg-white dark:bg-dark-blue">
        <div className=" relative w-[300px] h-[200px]">
          <Image
            src={flag}
            fill
            sizes="100"
            alt="flag"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <div className="text-lg font-bold">{name}</div>
          <div className="py-2 text-xs">
            <div>
              <span className="font-bold">Population:</span> {population}
            </div>
            <div>
              <span className="font-bold">Region:</span> {region}
            </div>
            <div>
              <span className="font-bold">Capital:</span> {capital}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
