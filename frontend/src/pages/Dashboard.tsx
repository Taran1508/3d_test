import { TableUI } from "@/ui/tableUi";
import { CircleUserRound } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl ml-10 mt-6 float-left font-bold text-center text-black-800">
        Elipse
      </h1>

      <div className=" w-full max-w-full bg-white flex flex-row justify-center p-4">
        <div className="w-full max-w-6xl space-y-4">
          <hr className="text-black mt-10" />
          <div className="w-full max-w-6xl justify-between flex flex-row items-end">
            <h1 className="text-3xl mt-18 font-bold  text-black-800">
              Manager Dashboard
            </h1>
            <div>
              <CircleUserRound size={48} />
            </div>
          </div>
          {/* Table starts from here */}
          <div className="w-full mt-8 border-black border-2">
            <TableUI />
          </div>
        </div>
      </div>
    </>
  );
}
