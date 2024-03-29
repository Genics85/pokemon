import TopBar from "../components/TopBar";
import PokemonCard from "../components/PokemonCard";
import { useGetPokemonsQuery } from "../redux/pokemonApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";
import left_arrow from "../assets/icons/left_arrow.svg";
import right_arrow from "../assets/icons/right_arrow.svg";

function Items() {
  const { data: pokemons, isLoading, error } = useGetPokemonsQuery();

  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  const totalPages = Math.ceil(pokemons.results.length / itemsPerPage);

  const data = pokemons.results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="h-full w-full ">
      <TopBar />
      <main
        className={`px-4 md:px-20 pt-16 pb-10 grid grid-cols-2 ${
          itemsPerPage <= 12 ? "md:grid-cols-4" : "md:grid-cols-6"
        }  gap-x-4 gap-y-16  `}
      >
        {data.map((item: any, i: number) => {
          return <PokemonCard url={item?.url} name={item?.name} key={i} />;
        })}
      </main>
      <div className=" sticky bottom-1 flex justify-between items-center px-4 md:px-20">
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
              return;
            }}
            className={`size-6 px-4 flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1]`}
          >
            <div className=" shrink-0">
              <img src={left_arrow} alt="" />
            </div>
          </button>
          {[currentPage, currentPage + 1, currentPage + 2, currentPage + 3].map(
            (item, i) => {
              return (
                <button
                  onClick={() => setCurrentPage(item)}
                  key={i}
                  style={{
                    backgroundColor: currentPage == item ? theme : "#e1e1e1",
                  }}
                  className={`size-6 px-4 flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1]`}
                >
                  {item}
                </button>
              );
            }
          )}
          <p>...</p>
          <button
            onClick={() => setCurrentPage(totalPages)}
            style={{
              backgroundColor: currentPage == totalPages ? theme : "#e1e1e1",
            }}
            className={`size-6 px-4 hidden md:flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1]`}
          >
            {totalPages}
          </button>
          <button
            onClick={() => {
              if (currentPage < totalPages - 3) {
                setCurrentPage(currentPage + 1);
              }
              return;
            }}
            className={` size-6 px-4 flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1] `}
          >
            <div className=" shrink-0">
              <img src={right_arrow} alt="" />
            </div>
          </button>
        </div>
        <select
          onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          className="rounded-md p-1 bg-white border-[2px]"
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
        </select>
      </div>
    </div>
  );
}

export default Items;
