import { verified } from "@/assets";
import { Avatar } from "./ui/avatar";
import { chat } from "@/store/apiSlice";

const Card = ({ chat }: { chat: chat }) => {
  return (
    <section className="flex flex-row gap-2 my-4">
      {!chat.sender.self && (
        <div className="relative flex w-fit h-fit">
          <Avatar className="w-6 h-6">
            <img
              className="w-6 h-6"
              src={chat.sender.image}
              alt="Trip Profile"
            />
          </Avatar>
          <img
            src={verified}
            className="w-2 h-2 absolute bottom-0 end-0"
            alt="Verified"
          />
        </div>
      )}
      <div
        className={`p-2 w-5/6 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] text-[14px] ${
          chat.sender.self
            ? "ms-auto bg-[#1C63D5] text-white rounded-br-none"
            : "me-auto bg-white text-[#606060] rounded-tl-none "
        }`}
      >
        {chat.message}
      </div>
    </section>
  );
};

export default Card;
