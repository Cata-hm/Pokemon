import { Home, Detail, Form, Landing } from "./views";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/" component={Landing} />

      <Route exact path="/pokemons/:id" component={Detail} />

      <Route exact path="/createpokemon" component={Form} />

      <Route exact path="/pokemons" component={Home} />

      {/* <Route path="/pokemons" render={() => <Home />} /> */}
    </div>
  );
}

export default App;
