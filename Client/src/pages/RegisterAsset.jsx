import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RegisterAsset() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [acquisitionDate, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [registerDone, setRegisterDone] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const registerDate = {
      name,
      type,
      acquisitionDate,
      status,
    };

    try {
      const response = await fetch("http://localhost:8080/assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerDate),
      });

      if (response.ok) {
        setRegisterDone(true);
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      console.error("Error on registering assets: ", error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; 

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <main className="w-screen h-screen bg-back flex flex-col items-center gap-20 border ">
      <header className="w-full p-2 flex items-start">
        <button onClick={() => navigate("/")}>
          <span className="text-xl text-red-600 font-[Arial]">Voltar</span>
        </button>

      </header>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-200 flex flex-col items-center justify-center"
      >
        {registerDone && (
          <p className="text-green-500 text-xl mb-4 text-center font-[Arial]">
            Ativo cadastrado com sucesso! Redirecionando...
          </p>
        )}
        <section className="w-[95%] h-150  border rounded-lg flex flex-col items-center p-2 justify-evenly">
          <fieldset className="flex flex-col  w-full">
            <label className="text-xl font-[Arial]">Nome</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg h-15 text-xl p-2 font-[Arial]"
            />
          </fieldset>
          <fieldset className="flex flex-col  w-full">
            <label className="text-xl font-[Arial]">Tipo</label>
            <select
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded-lg h-15 text-xl p-2 font-[Arial]"
            >
              <option value="" disabled></option>
              <option value="Monitor">Monitor</option>
              <option value="CPU">CPU</option>
              <option value="Teclado">Teclado</option>
            </select>
          </fieldset>
          <fieldset className="flex flex-col  w-full">
            <label className="text-xl font-[Arial]">Status</label>
            <select
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg h-15 text-xl p2 font-[Arial]"
            >
              <option value="" disabled></option>
              <option value="Ativo">Ativo</option>
              <option value="Manutencao">Manutenção</option>
            </select>
          </fieldset>
          <fieldset className="flex flex-col  w-full">
            <label className="text-xl font-[Arial]">Data de Aquisição</label>
            <input
              type="date"
              value={acquisitionDate}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg h-15 text-xl p-2 font-[Arial]"
            />
          </fieldset>
        </section>

        <button
          type="submit"
          className="border  border-black rounded-lg h-15 w-[95%] mt-3 text-xl bg-btnBack text-white font-[Arial]"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default RegisterAsset;
