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

  // console.log(data.abilities);
  // console.log(data.moves);
//   data.game_indices.forEach((obj, i) => {
//  console.log("game_index", obj.game_index);
// //  console.log("msgBody", obj.msgBody);
// });


  return (
    <div>
      <h1>Get data from https://pokeapi.co/</h1>
      <p>Name: {data.name}</p>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Base Experience: {data.base_experience}</p>
      <div>
      {data.abilities.map((item, id) => (
      <div key={id}>
        <p>Abilities: {item.ability.name}</p>
        <p>Url: {item.ability.url}</p>
        <p>Slot: {item.slot}</p>
        {/* <p>Type: {item.type}</p> */}
      </div>
    ))}
      </div>
    </div>
  );
  // {data.moves.map((item, id) => (
  //     <div key={id}>
  //       <p>Slot: {item.slot}</p>
  //       {/* <p>Type: {item.type}</p> */}
  //     </div>
  //   ))}
}

export default App;
