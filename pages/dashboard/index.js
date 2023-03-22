import Link from "next/link";

export default function Dashboard() {
  return (
    <section>
      <div className="lg:container px-4 lg:px-0 mx-auto lg:py-20 py-16 items-center text-center">
        <h1 className="text-2xl text-center font-bold mb-5">Dashboard</h1>
        <Link href={'/'} className="bg-blue-100 py-2 px-4 hover:bg-red-200">Go to Home</Link>
      </div>
    </section>
  );
}
