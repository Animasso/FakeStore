import "./App.css";
import { AllRoutes } from "./routes/allRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
