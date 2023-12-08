"use client";
import { useCallback } from "react";
import useFilter from "@/hook/filter";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import queryString from "query-string";

const Filter = () => {
  const router = useRouter();
  const params = useSearchParams();

  const searchParamsFiler = useCallback(
    (search: string) => {
      let currentQuery = {};
      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        search,
      };
      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );
      router.push(url);
    },
    [params, router]
  );

  const searchParams = useCallback(
    (region: string) => {
      let currentQuery = {};
      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,

        region,
      };
      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );
      router.push(url);
    },
    [params, router]
  );

  return (
    <div className="flex flex-col gap-5 md:flex-row md:justify-between my-10">
      <div
        className="flex items-center bg-white 
          dark:bg-dark-blue 
          text-dark-blue-text 
          dark:text-white
           rounded-md px-4 shadow-md dark:shadow-dark-blue"
      >
        <FiSearch
          className="text-dark-blue-text dark:text-white  px-2"
          size={35}
        />
        <input
          type="search"
          name="country"
          id=""
          placeholder="Search for a country..."
          className="
          outline-none
          bg-transparent 
          py-4 
          px-2"
          onChange={(event: any) => searchParamsFiler(event.target?.value)}
        />
      </div>
      <div>
        <select
          name="region"
          id="region"
          className="flex items-center bg-white 
          dark:bg-dark-blue 
          text-dark-blue-text 
          dark:text-white
          outline-none
           rounded-md shadow-md dark:shadow-dark-blue
           py-4 
          px-2"
          onChange={(event: any) => {
            searchParams(event.target?.value);
          }}
        >
          <option value="">Selecione</option>
          <option className="py-4" value="Africa">
            Africa
          </option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>{" "}
    </div>
  );
};

export default Filter;
