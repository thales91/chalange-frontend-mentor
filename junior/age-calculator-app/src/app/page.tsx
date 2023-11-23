import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-off-white p-24">
      <div className="bg-white rounded-lg rounded-br-[150px] p-12 min-w-[800px]">
        <Calculator />
      </div>
    </main>
  );
}
