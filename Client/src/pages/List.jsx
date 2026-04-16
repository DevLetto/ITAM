function List({ list }) {
  const formatedData = (data) => {
    return data.replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$3/$2/$1");
  };
  return (
    <section className="w-full h-full ">
      <header className=" bg-other border-b border-t border-black w-full h-16 grid grid-cols-[60px_7fr_3fr_2fr] items-center p-5 text-textBack " >
        <p className="font-[Arial]">Id</p>
        <p className="font-[Arial]">Nome</p>
        <p className="font-[Arial]">Status</p>
        <p className="font-[Arial]">Data</p>
      </header>
      <div className="w-full h-[90%] overflow-auto">
        {list.map((item) => (
          <div
            key={item.id}
            className="border-b w-full h-16 grid grid-cols-[60px_7fr_3fr_2fr] items-center text-black px-5 bg-container"
          >
            <p className="font-[Arial]">{item.id}</p>
            <div className=" flex flex-col min-w-0 ">
              <p className="font-[Arial] truncate hover:">{item.nome}</p>
              <p className="font-[Arial]">{item.tipo}</p>
            </div>
            <p className="font-[Arial]">{item.status}</p>
            <p className="font-[Arial]">
              {formatedData(item.data_de_aquisicao)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List;
