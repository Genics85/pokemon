import { useSelector } from "react-redux";
import homepage_board from "../assets/images/homepage_board.png";
import search_icon from "../assets/icons/search_icon.svg";
import { StoreRootState } from "../redux/store";

function Home() {
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  return (
    <main className="flex flex-col h-full gap-16 items-center justify-center ">
      <div className="flex flex-col items-center">
        <div className=" w-[300px]">
          <img src={homepage_board} alt="" />
        </div>
        <h1 className="font-semibold text-[48px] head ">
          Poké <span style={{ color: theme }}>book</span>
        </h1>
        <p className="text-center">
          Largest Pokémon index with information <br /> about every Pokemon you
          can think of.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <input
            type="text"
            className={
              "border-[5px] rounded-full p-2 pl-4 w-[415px] h-[60px] outline-none "
            }
            style={{ borderColor: theme }}
            placeholder="Enter pokemon name"
          />
          <button
            className=" absolute top-1/2 shadow-md -translate-y-[50%] right-3 size-9 rounded-full flex items-center justify-center"
            style={{ background: theme }}
          >
            <img src={search_icon} alt="" />
          </button>
        </div>
        <p className="underline">View all</p>
      </div>
    </main>
  );
}

export default Home;
