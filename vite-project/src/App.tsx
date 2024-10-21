import { Home } from "./Components/screens/Home/Home";
import { CardInfoModel } from "./Components/ui/CardInfoModel/CardInfoModel";

function App() {
  return (
    <>
      <Home />
      <CardInfoModel
        type={{
          id: "12",
          name: "Nombre empresa",
          companyName: "Razón Social de la Empresa", // Asegúrate de proporcionar un valor
          cuit: 2222222,
          img: "url_de_la_imagen.jpg", // Asegúrate de usar una URL válida
        }}
      />
    </>
  );
}

export default App;
