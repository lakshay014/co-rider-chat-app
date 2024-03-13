import { camera, clip, corner, doc, send, video } from "@/assets";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Input } from "./ui/input";

const Prompt = () => {
  return (
    <section className="py-2 px-4">
      <div className="flex h-[42px] w-full rounded-md bg-background px-3 gap-4 justify-center items-center shadow-sm shadow-muted">
        <Input
          className="px-0 border-none focus-visible:ring-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Reply to @Rohit Yadav"
        />
        <Popover>
          <PopoverTrigger>
            <img
              src={clip}
              className="w-6 h-6 cursor-pointer"
              alt="Attachment"
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col items-center">
              <div className="flex flex-row px-4 py-3 gap-4 bg-[#008000] rounded-full">
                <img
                  src={camera}
                  className="w-6 h-6 cursor-pointer"
                  alt="Camera"
                />
                <img
                  src={video}
                  className="w-6 h-6 cursor-pointer"
                  alt="Video"
                />
                <img
                  src={doc}
                  className="w-6 h-6 cursor-pointer"
                  alt="Document"
                />
              </div>
              <img src={corner} className="w-4 h-2" alt="Corner" />
            </div>
          </PopoverContent>
        </Popover>
        <img src={send} className="w-6 h-6 cursor-pointer" alt="Send" />
      </div>
    </section>
  );
};

export default Prompt;
