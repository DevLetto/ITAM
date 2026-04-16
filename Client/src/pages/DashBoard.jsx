import { useNavigate } from "react-router-dom";
import { use, useCallback, useEffect, useState } from "react";
import List from "./List";

function DashBoard() {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [list, setList] = useState([]);

  const [filtersOn, setFiltersOn] = useState({
    type: "",
    status: "",
  });

  const searchHystory = useCallback(
    async (filterOverride = {}) => {
      const currentFilters = { ...filtersOn, ...filterOverride };
      try {
        const queryParams = new URLSearchParams();
        if (currentFilters.type) {
          queryParams.append("type", currentFilters.type);
        }
        if (currentFilters.status) {
          queryParams.append("status", currentFilters.status);
        }

        const url = `http://localhost:8080/assets?${queryParams.toString()}`;

        const response = await fetch(url);

        if (!response.ok) {
          console.error("Failed to fetch assets: ", response.statusText);
          setList([]);
          return;
        }

        const data = await response.json();
        setList(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching assets: ", error);
        setList([]);
      }
    },

    [filtersOn],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden"; //Disable page scroll

    return () => {
      document.body.style.overflow = "auto"; // Re-enable when leaves the page
    };
  }, []);

  useEffect(() => {
    console.log("A lista mudou para:", list);
  }, [list]);

  useEffect(() => {
    searchHystory();
  }, [filtersOn]);
  return (
    <div className=" w-screen h-screen bg-back flex flex-col items-center  ">
      <header className="w-full md:w-193 xl:w-300 2xl:w-400 h-15 border-b text-center pt-4 bg-header">
        <h1 className="text-xl text-black font-[Arial]">DashBoard</h1>
      </header>

      <div className="border w-full md:w-193 xl:w-300 2xl:w-400 h-28 flex items-center gap-5 flex-col md:flex-row p-3 bg-container">
        <button
          onClick={(e) => navigate("/register")}
          className="w-[95%] md:w-[60%] h-[60%] bg-btnBack hover:bg-btnHover active:bg-btnHover border border-black rounded-lg text-white font-[Arial]"
        >
          Cadastrar
        </button>

        <form
          action=""
          className=" w-full flex flex-row gap-10 justify-between px-2"
        >
          {/* //Type filter */}
          <fieldset className="flex flex-row gap-2 w-1/2">
            <label className="font-[Arial] text-black">Tipo:</label>
            <select
              value={filtersOn.type}
              onChange={(e) =>
                setFiltersOn({ ...filtersOn, type: e.target.value })
              }
              className="border w-full bg-white rounded-lg"
            >
              <option value="" >Sem filtro</option>
              <option value="Monitor">Monitor</option>
              <option value="CPU">CPU</option>
              <option value="Teclado">Teclado</option>
            </select>
          </fieldset>
          {/* //Status filter */}
          <fieldset className="flex flex-row gap-2 w-1/2">
            <label className="font-[Arial] text-black">Status:</label>
            <select
              value={filtersOn.status}
              onChange={(e) =>
                setFiltersOn({ ...filtersOn, status: e.target.value })
              }
              className="border w-full bg-white rounded-lg"
            >
              <option value="" >Sem filtro</option>
              <option value="Ativo">Ativo</option>
              <option value="Manutencao">Manutenção</option>
            </select>
          </fieldset>
        </form>
      </div>

      <main className=" h-[82%] w-full md:w-193 xl:w-300 2xl:w-400 flex flex-col items-center ">
        <div className="h-15 w-full  bg-other pl-2 flex items-center">
          <h1 className="font-[Arial] text-black">Lista de Ativos</h1>
        </div>
        <div className="h-[92%] w-full  flex items-center justify-center">
          <List list={list} />
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
