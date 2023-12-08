"use client";

import useFilter from "@/hook/filter";
import Filter from "./Filter";
import List from "./country/List";

interface CountryProps {
  children: React.ReactNode;
}

const Countries = () => {
  const { region, search } = useFilter();
  return (
    <>
      <Filter />
      <section>
        <ServerCountries>
          <List search={search} region={region} />
        </ServerCountries>
      </section>
    </>
  );
};

export default Countries;

const ServerCountries: React.FC<CountryProps> = ({ children }) => {
  return <div>{children}</div>;
};
