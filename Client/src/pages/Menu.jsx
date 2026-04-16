import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div className=" w-screen h-screen bg-back flex items-center justify-center ">
      <main className="border rounded-lg h-80 w-90 flex flex-col items-center  justify-between pt-2 pb-2">
        <button
          onClick={(e) => navigate("/register")}
          className="w-[95%] h-[40%] bg-white hover:bg-btnHover active:bg-btnHover border rounded-xl"
        >
          Cadastrar
        </button>
        <button 
        onClick={(e) => navigate("/view")}
        className="w-[95%] h-[40%] bg-white hover:bg-btnHover active:bg-btnHover border rounded-xl">
          Lista
        </button>
      </main>
    </div>
  );
}

export default Menu;
