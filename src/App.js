import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState({
    abilities:[]
  });
  // console.log(data);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      // .then((response) => console.log(response));
      .then((response) => setData(response.data));
      // console.log(response.data);
  }, []);

  return (
    <div>
      <h1>Get data from https://pokeapi.co/</h1>
      <p>Name: {data.name}</p>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Base Experience: {data.base_experience}</p>
      <div>
      {data.abilities.map((item, idx) => (
      <div key={idx}>
        <p>Abilities: {item.ability.name}</p>
        console.log(id);
        <p>Url: {item.ability.url}</p>
        <p>Slot: {item.slot}</p>
        {/* <p>Type: {item.type}</p> */}
      </div>
    ))}
      </div>
    </div>
  );

}

export default App;
