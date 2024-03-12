import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import FormInputSearch from "./FormInputSearch";

interface ContentProps {
  onSidebarHide: () => void;
  children: React.ReactNode;
}

export default function Content({ onSidebarHide, children }: ContentProps) {
  const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  return (
    <div className="w-full">
      <div className="flex w-full gap-10">
        <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
          .
        </div>
        <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
          <div className="w-full sm:flex p-2 mb-5 items-end pt-10">
            <div className="sm:flex-grow flex items-center justify-between">
              <div>
                <div className="flex items-center w-full gap-4">
                  <div className="ml-2">{getCurrentDate()}</div>
                  <div>
                    <FormInputSearch />
                  </div>
                </div>
              </div>
              <HiOutlineBars3BottomRight
                className="block sm:hidden text-3xl"
                onClick={onSidebarHide}
              />
            </div>
          </div>
          <div className="content-main ">{children}</div>
        </div>
      </div>
    </div>
  );
}
