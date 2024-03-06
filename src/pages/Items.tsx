import TopBar from "../components/TopBar";
import PokemonCard from "../components/PokemonCard";
import SideDrawer from "../components/SideDrawer";
import {
  useGetPokemonsQuery,
} from "../redux/pokemonApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StoreRootState } from "../redux/store";
import ThemeModal from "../components/ThemeModal";

function Items() {
  const { data: pokemons, isLoading, error } = useGetPokemonsQuery();

  const { value: theme } = useSelector((state: StoreRootState) => state.theme);

  const [currentPage, setCurrentPage] = useState<number>(2);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  const totalPages = Math.ceil(pokemons.results.length / itemsPerPage);

  const data = pokemons.results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(pokemons);

  return (
    <div className="h-full ">
      <TopBar />
      <main
        className={` px-20 py-16 grid ${
          itemsPerPage <= 12 ? "grid-cols-" + itemsPerPage / 2 : "grid-cols-6"
        }  gap-x-4 gap-y-16`}
      >
        {data.map((item: any, i: number) => {
          return <PokemonCard url={item?.url} name={item?.name} key={i} />;
        })}
      </main>
      <div className="flex justify-between mt-5 px-20">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`size-6 px-4 flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1]`}
          >
            {"<"}
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
            className={`size-6 px-4 flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1]`}
          >
            {totalPages}
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className={` size-6 px-4 flex font-semibold items-center justify-center rounded-md bg-[#e1e1e1] `}
          >
            {">"}
          </button>
        </div>
        <select
          onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          className="rounded-md p-1 "
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
        </select>
      </div>
      <SideDrawer />
      <ThemeModal/>
    </div>
  );
}

export default Items;
