export const DisplayToDO = ({ data }) => {
    console.log("DATA")
  return (
    <>
      {data.length !== 0 ? data.map((elem) => {
        return (
          <>
            <h1>{elem}</h1>
          </>
        );
        
      }):<h1>No ToDo's Present</h1>}
    </>
  );
};
