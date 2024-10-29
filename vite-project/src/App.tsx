import { Home } from "./Components/screens/Home/Home";
import { CreateBranch } from "./Components/ui/CreateBranch/CreateBranch";

function App() {
  return (
    <>
      <Home companies={[]} />
      <CreateBranch onClose={() => {}} />
    </>
  );
}

export default App;
