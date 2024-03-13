import { edit, leftArrow } from "@/assets";
const Header = () => {
  return (
    <section className="flex flex-row justify-between items-center py-2 px-4 gap-4">
      <img src={leftArrow} className="w-5 h-5 cursor-pointer" alt="Back" />
      <p className="w-full text-2xl font-bold">Trip 1</p>
      <img src={edit} className="w-6 h-6 cursor-pointer" alt="Edit" />
    </section>
  );
};

export default Header;
