import { useSelector } from "react-redux";
import homepage_board from "../assets/images/homepage_board.png";
import search_icon from "../assets/icons/search_icon.svg";
import { StoreRootState } from "../redux/store";
import { Link } from "react-router-dom";

function Home() {
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  return (
    <main className="flex flex-col w-full h-full gap-16 items-center justify-center self-center">
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
      <div className="flex flex-col w-full items-center space-y-4 ">
        <div className="relative flex items-center w-[360px] md:[400px] justify-center">
          <input
            type="text"
            className={
              "border-[5px] w-full rounded-full p-2 pl-4  h-[60px] outline-none "
            }
            style={{ borderColor: theme }}
            placeholder="Enter pokemon name"
          />
          <Link
            to={"/pokemons"}
            className=" absolute top-1/2 shadow-md -translate-y-[50%] right-3 size-9 rounded-full flex items-center justify-center"
            style={{ background: theme }}
          >
            <img src={search_icon} alt="" />
          </Link>
        </div>
        <Link to={"/pokemons"} className="underline">
          View all
        </Link>
      </div>
    </main>
  );
}

export default Home;
