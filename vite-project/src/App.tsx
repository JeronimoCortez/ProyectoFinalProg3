import { AppRouter } from "./routes/AppRouter";
import { CreateBranch } from "./Components/ui/CreateBranch/CreateBranch";

function App() {
  return (
    <>
      <CreateBranch onClose={() => {}} />
      <AppRouter />
    </>
  );
}

export default App;
