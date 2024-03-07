import { useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";
import eye_icon from "../assets/icons/eye_icon.svg";

import { useState } from "react";
import { useGetPokemonDetailsQuery } from "../redux/pokemonApi";
import SideDrawer from "./SideDrawer";

type PokemonCardType = {
  name: string;
  url: string;
};

function PokemonCard({ name, url }: PokemonCardType) {
  const [sideDrawer, setSideDrawer] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  const closeSideDrawer = () => {
    setSideDrawer(false);
  };

  const {
    data: pokemonDetails,
    isLoading,
    error,
  } = useGetPokemonDetailsQuery(url);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        isHovered ? "rounded-b-none" : ""
      } bg-white rounded-[20px] p-2 max-h-[255px] h-fit flex flex-col gap-2 relative`}
    >
      <div className={` rounded-[15px] relative h-[115px] bg-[#f1f1f1]`}>
        <div className="absolute  bottom-2 w-full flex justify-center">
          <img
            src={pokemonDetails?.sprites?.other?.dream_world.front_default}
            className="h-[150px]"
            alt=""
          />
        </div>
      </div>
      <p className="head font-semibold self-center text-[20px]">{name}</p>

      <button
        onClick={() => setSideDrawer(true)}
        className={`${
          isHovered ? "flex " : "hidden"
        } z-10 p-2 text-white w-full absolute top-[100%] rounded-b-[14px] bg-white left-0`}
      >
        <div
          style={{ backgroundColor: theme }}
          className=" flex items-center p-2 justify-between rounded-[14px] w-full"
        >
          <p>View Pokemon</p>
          <img src={eye_icon} alt="" />
        </div>
      </button>
      <SideDrawer
        pokemonDetails={pokemonDetails}
        state={sideDrawer}
        close={closeSideDrawer}
      />
    </div>
  );
}

export default PokemonCard;
