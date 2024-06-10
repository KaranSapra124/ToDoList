export const DisplayToDO = ({ data }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4 h-64 overflow-y-scroll p-4 bg-white rounded shadow-md">
      {data.length !== 0 ? (
        data.map((elem, index) => (
          <div key={index} className="border-b border-gray-200 py-2">
            <h1 className="text-lg font-semibold text-gray-800">{elem}</h1>
          </div>
        ))
      ) : (
        <h1 className="text-center text-gray-500">No ToDo's Present</h1>
      )}
    </div>
  );
};
