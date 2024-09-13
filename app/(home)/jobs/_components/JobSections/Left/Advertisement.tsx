import { Button } from "@nextui-org/react";
import React from "react";

const Advertisement = () => {
  return (
    <div className="w-[240px] h-[283px] rounded-[35px] bg-[#D9D9D9] shadow-medium relative">
      <Button className="w-[183px] h-[37px] absolute bottom-8 left-8 bg-sky-300 text-black">
        Learn More
      </Button>
    </div>
  );
};

export default Advertisement;
