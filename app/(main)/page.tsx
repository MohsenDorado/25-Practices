import allProjects from "@/data/AllProjects";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <main>
      <nav className="min-h-[100px] bg-red-800">

      </nav>

      <div className="bg-black min-h-[500px]">
        Hi
      </div>
    <div className="flex flex-col justify-center items-center bg-slate-400 ">
      <div className="flex flex-col gap-y-5">
        {allProjects.length > 0
          ? allProjects.map((pro) => (
              <Link
                key={pro.id}
                href={`/${pro.name}`}
                className="bg-white rounded-2xl p-3 flex justify-start items-center"
              >
                {pro.name}
                <HiArrowNarrowRight className="mr-4" />
              </Link>
            ))
          : "No data"}
      </div>
    </div>
    </main>

  );
}
