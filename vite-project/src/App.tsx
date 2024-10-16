import { EditButton } from "./Components/buttons/EditButton/EditButton";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <EditButton typeEdit="Empresas" />
    </>
  );
}

export default App;
