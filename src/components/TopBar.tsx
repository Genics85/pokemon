import { useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";
import logo_img from "../assets/images/homepage_board.png";
import search_icon from "../assets/icons/search_icon_items.svg";

function TopBar() {
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);
  return (
    <div className="h-[60px] flex justify-between items-center py-1 px-8 bg-white">
      <div className="relative pl-[105px]">
        <div className="w-[100px] absolute left-0 -top-1/2">
          <img className="" src={logo_img} alt="" />
        </div>
        <p className="text-[20px] font-semibold head">
          Poke<span style={{ color: theme }}>book</span>
        </p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter pokemon name"
          className="shadow-md rounded-full border-[1px] border-gray-200 outline-none pl-9 h-[40px] w-[330px]"
        />
        <div className="absolute top-1/2 -translate-y-[50%] left-3">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div
        style={{ backgroundColor: theme }}
        className="size-7 rounded-full ring-offset-2  ring-[2px] ring-gray-500"
      ></div>
    </div>
  );
}

export default TopBar;
