import { Home } from "./Components/screens/Home/Home";
import { CardInfoModel } from "./Components/ui/CardInfoModel/CardInfoModel";

function App() {
  return (
    <>
      <Home />
      <CardInfoModel
        type={{
          id: 12,
          nombre: "Nombre empresa",
          razonSocial: "Razón Social de la Empresa", // Asegúrate de proporcionar un valor
          cuit: 2222222,
          logo: "url_de_la_imagen.jpg",
          pais: { nombre: "Argentina", id: 12 },
          sucursales: [],
        }}
      />
    </>
  );
}

export default App;
