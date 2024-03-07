import { useRef, useState } from "react";
import { useClickOutsideToClose } from "../hooks/useClickOutsideToClose";
import back_arrow from "../assets/icons/back_arrow.svg";
import { useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";

type SideDrawerType = {
  close: () => void;
  state: boolean;
  pokemonDetails: any;
};

type DetailsPanel = "Stats" | "Similar" | "About";

const base_stat = [
  "HP",
  "Attack",
  "Defense",
  "Special Attack",
  "Special Defense",
  "Speed",
];

function SideDrawer({ state, close, pokemonDetails }: SideDrawerType) {
  const refObj = useRef<HTMLDivElement>(null);
  useClickOutsideToClose(refObj, close);

  const [details, setDetails] = useState<DetailsPanel>("About");
  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  return (
    <div
      className={`${
        state ? "" : "hidden"
      } fixed flex justify-end  top-0 right-0 z-40 h-screen w-screen bg-black backdrop-blur-[2px] bg-opacity-40  `}
    >
      <div
        ref={refObj}
        className=" flex relative flex-col p-2 items-center gap-4 overflow-y-auto bg-white w-full md:w-1/3 h-full "
      >
        <div className="rounded-md relative bg-blue-300 h-[260px] w-full p-2">
          <button
            onClick={close}
            className="rounded-md bg-white size-10 flex items-center justify-center"
          >
            <img src={back_arrow} alt="" />
          </button>
          <img
            src={pokemonDetails?.sprites?.front_default}
            className="absolute"
            alt=""
          />
        </div>
        <p className="head font-semibold text-[40px]">{pokemonDetails?.name}</p>
        <div className="py-3 bg-[#f1f1f1] flex flex-col items-center justify-center w-full">
          <div className="bg-white w-full flex items-center justify-center">
            <p className="head text-[20px] font-bold">{details}</p>
          </div>
          <div
            className={` ${
              details == "About" ? "flex" : "hidden"
            }  flex-col py-3 `}
          >
            <div className="flex gap-5 p-2 border-b-[2px]">
              <p>Height</p>
              <p className="head  font-semibold">{pokemonDetails?.height}m</p>
            </div>
            <div className="flex gap-5 p-2 border-b-[2px]">
              <p>Weight</p>
              <p className="head  font-semibold">{pokemonDetails?.weight}Kg</p>
            </div>
            <div className="flex gap-5 p-2">
              <p>Abilities</p>
              <ul className="flex flex-col list-disc">
                {pokemonDetails?.abilities.map((ability: any, i: number) => {
                  return (
                    <li key={i} className="head font-semibold">
                      {ability.ability.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={` ${
              details == "Stats" ? "flex" : "hidden"
            }  flex-col py-3 w-full `}
          >
            <div className="flex flex-col  w-full">
              {pokemonDetails.stats.map((stat: any, i: number) => {
                let base_percentage = stat.base_stat * 0.4;
                let base_stat_per = base_percentage + "%";
                return (
                  <div
                    key={i}
                    className="flex items-center justify-center w-full"
                  >
                    <div className="w-1/2 flex pr-3 justify-end">
                      <p>{base_stat[i]}</p>
                    </div>
                    <div className="flex gap-4 w-1/2 pl-3 items-center">
                      <div className="h-[5px] bg-gray-300 w-[100px]">
                        <div
                          style={{
                            backgroundColor: theme,
                            width: base_stat_per,
                          }}
                          className={`  h-full `}
                        ></div>
                      </div>
                      <p className="head text-[13px]  font-semibold">
                        {stat.base_stat}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={` ${
              details == "Similar" ? "flex" : "hidden"
            }  flex-col py-3 `}
          >
            <div className="flex gap-5 p-2 border-b-[2px]">
              <p>Height</p>
              <p className="head text-[18px] font-semibold">
                {pokemonDetails?.height}m
              </p>
            </div>
            <div className="flex gap-5 p-2 border-b-[2px]">
              <p>Weight</p>
              <p className="head text-[18px] font-semibold">13.0Kg</p>
            </div>
            <div className="flex gap-5 p-2">
              <p>Abilities</p>
              <p className="head text-[18px] font-semibold">1.0m</p>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex items-end">
          <div className="flex justify-between gap-3 p-2 font-semibold rounded-full shadow-inner bg-[#f1f1f1] ">
            <button
              onClick={() => setDetails("About")}
              className={`rounded-full ${
                details == "About" ? "bg-white" : ""
              } flex w-[100px] items-center justify-center py-2 px-3`}
            >
              <p>About</p>
            </button>
            <button
              onClick={() => setDetails("Stats")}
              className={`rounded-full ${
                details == "Stats" ? "bg-white" : ""
              } flex w-[100px] items-center justify-center py-2 px-3`}
            >
              <p>Stats</p>
            </button>
            <button
              onClick={() => setDetails("Similar")}
              className={`rounded-full ${
                details == "Similar" ? "bg-white" : ""
              }  flex w-[100px] items-center justify-center py-2 px-3`}
            >
              <p>Similar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideDrawer;
