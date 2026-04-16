import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  return (
    <main className="w-screen h-screen bg-back flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <section className="w-100 h-150  border rounded-lg flex flex-col items-center p-2 justify-evenly">
          <fieldset className="flex flex-col  w-full">
            <label className="text-xl font-[Arial]">Nome</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg h-15 text-xl p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col  w-full">
            <label className="text-xl font-[Arial]">Tipo</label>
            <select
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border rounded-lg h-15 text-xl p-2"
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
              className="border rounded-lg h-15 text-xl p2"
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
              className="border rounded-lg h-15 text-xl p-2"
            />
          </fieldset>
        </section>

        <button type="submit" className="border rounded-lg h-15 w-full mt-3 text-xl hover:bg-gray-400 active:bg-gray-400">
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default RegisterAsset;
