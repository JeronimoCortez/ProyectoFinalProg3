import { CardBranch } from "./Components/ui/CardBranch/CardBranch";
import { EditButton } from "./Components/ui/EditButton/EditButton";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <EditButton typeEdit="Empresas" />
      <CardBranch />
    </>
  );
}

export default App;
