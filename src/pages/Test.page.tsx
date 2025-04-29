import { Button } from "flowbite-react";
import { valueOfColor } from "../utils/color";

const Test = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-transparent">
        <Button onClick={() => valueOfColor("yellow-950")}>
          Validate Color
        </Button>
      </div>
    </>
  );
};

export default Test;
