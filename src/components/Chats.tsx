import { Separator } from "./ui/separator";
import Card from "./Card";
import { chat, updateChats } from "@/store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RotateCw } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Chats = () => {
  const { chats: chatList } = useSelector((state: RootState) => state.api);
  const dispatch = useDispatch<AppDispatch>();
  const { ref, inView } = useInView();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();

  const fetchChats = async ({ pageParam }: { pageParam: number }) => {
    const res = await axios.get(
      `https://qa.corider.in/assignment/chat?page=${pageParam}`
    );
    return res.data.chats;
  };

  const { data, fetchNextPage, isFetching, isFetched } = useInfiniteQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
    initialPageParam: 0,
    getNextPageParam: (_, pages) => pages.length,
  });

  useEffect(() => {
    if (isFetched) {
      dispatch(updateChats(data?.pages[data.pageParams.length - 1]));
    }
  }, [data, dispatch, isFetched]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  });

  return (
    <section className="flex flex-1 flex-col-reverse py-2 px-4 overflow-y-scroll overflow-x-hidden">
      {chatList.map((chat: chat) => (
        <Card chat={chat} key={chat.id} />
      ))}
      <div className="flex flex-row gap-2 justify-between items-center py-[22px]">
        <Separator className="w-2/5" />
        <p className="text-[#B7B7B7] shrink-0 text-[14px]">
          {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
        </p>
        <Separator className="w-2/5" />
      </div>
      <div className="flex justify-center">
        <RotateCw ref={ref} className={`${isFetching && "animate-spin"}`} />
      </div>
    </section>
  );
};

export default Chats;
