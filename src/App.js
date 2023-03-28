import Home from "./components/Home/Home";
import TablePage from "./components/Table/TablePage";
import DetailsContextProvider from "./Context/DetailsContext";

function App() {
  return (
    <>
      <DetailsContextProvider>
        <Home table={<TablePage/>}/>
      </DetailsContextProvider>
    </>
  );
}

export default App;
