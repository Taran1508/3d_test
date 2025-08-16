import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex mt-40 justify-center items-center">
        <div className="flex flex-col ">
          <h1 className="text-7xl font-bold">Elipse</h1>
          <Button
            variant="destructive"
            className="mt-10"
            onClick={() => {
              navigate("/login");
            }}
          >
            Admin Login
          </Button>
        </div>
      </div>
    </>
  );
}
