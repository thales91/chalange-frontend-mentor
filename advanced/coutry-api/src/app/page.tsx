import Filter from "@/components/Filter";
import List from "@/components/country/List";

interface HomeProps {
  searchParams: {
    search: string;
    region: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="flex flex-col max-w-[1440px] mx-auto mt-4">
      <Filter />
      <section>
        <List region={searchParams.region} search={searchParams.search} />
      </section>
    </main>
  );
}
