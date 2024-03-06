import charizard from "../assets/images/charizard.png";
import { useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";
import eye_icon from "../assets/icons/eye_icon.svg";

import { useState } from "react";
import { useGetPokemonDetailsQuery } from "../redux/pokemonApi";

type PokemonCardType = {
  name: string;
  url: string;
};

function PokemonCard({ name, url }: PokemonCardType) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  const { data: pokemonDetails } = useGetPokemonDetailsQuery(url);
  console.log(pokemonDetails);

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
          <img src={pokemonDetails?.sprites?.front_default} className="w-[120px]" alt="" />
        </div>
      </div>
      <p className="head font-semibold self-center text-[20px]">{name}</p>

      <button
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
    </div>
  );
}

export default PokemonCard;
