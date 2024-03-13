import { call, members, report, threeDots } from "@/assets";
import { Avatar } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

const TitleBar = () => {
  return (
    <>
      <section className="flex flex-row justify-between items-center py-2 px-4 gap-4">
        <Avatar className="w-12 h-12">
          <div className="flex flex-col justify-center items-center w-12 h-12">
            <div className="flex flex-row">
              <img className="w-6 h-6" src="/profile1.png" alt="Trip Profile" />
              <img className="w-6 h-6" src="/profile2.png" alt="Trip Profile" />
            </div>
            <div className="flex flex-row">
              <img className="w-6 h-6" src="/profile3.png" alt="Trip Profile" />
              <img className="w-6 h-6" src="/profile4.png" alt="Trip Profile" />
            </div>
          </div>
        </Avatar>
        <div className=" text-[18px] w-full">
          <p className="text-[#606060]">
            From <span className="font-bold">IGI Airport, T3</span>
          </p>
          <p className="text-[#606060]">
            To <span className="font-bold">Sector 28</span>
          </p>
        </div>
        <Popover>
          <PopoverTrigger>
            <img
              src={threeDots}
              className="w-5 h-5 mx-4 cursor-pointer"
              alt="Three Dots"
            />
          </PopoverTrigger>
          <PopoverContent className="mx-4 my-1 p-0 w-fit">
            <div className="flex flex-col">
              <div className="flex flex-row px-3 py-[14px] gap-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100">
                <img src={members} className="w-5 h-5" alt="Members" />
                <p className="text-[14px]">Members</p>
              </div>
              <Separator className="w-full" />
              <div className="flex flex-row px-3 py-[14px] gap-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100">
                <img src={call} className="w-5 h-5" alt="Call" />
                <p className="text-[14px]">Share Number</p>
              </div>
              <Separator />
              <div className="flex flex-row px-3 py-[14px] gap-3 cursor-pointer hover:bg-gray-100 active:bg-gray-100">
                <img src={report} className="w-5 h-5" alt="Report" />
                <p className="text-[14px]">Report</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </section>
      <Separator color="#E5E5E0" />
    </>
  );
};

export default TitleBar;
