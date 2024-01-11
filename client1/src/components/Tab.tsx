function Tab() {
  return (
    <div className="w-full h-10 flex justify-center items-center max-w-2xl mx-auto bg-slate-100 rounded">
      <button className="rounded h-1 w-40 flex justify-center items-center youtube transition-opacity duration-500 hover:bg-white p-4 m-4">
        YouTube
      </button>
      <button className="rounded h-1 w-40 flex justify-center items-center instagram transition-opacity duration-500 hover:bg-white p-4 m-4">
        Instagram
      </button>
      <button className="rounded h-1 w-40 flex justify-center items-center facebook transition-opacity duration-500 hover:bg-white p-4 m-4">
        Facebook
      </button>
    </div>
  );
}

export default Tab;
