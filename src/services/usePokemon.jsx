import { useEffect, useState } from "react";

function usePokemon() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [data, setData] = useState(null);
  const [filtered, setFiltered] = useState([]);

  const getData = async (url, setDatos) => {
    const res = await fetch(url);
    const datos = await res.json();
    console.log(data)
    setDatos(datos);
  };



  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, setData);
  }, [pokemon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokName = e.target[0].value;
    setPokemon(pokName);
  };

  const handleClick = (e) => {
    const pokeName = e.target.value;
    setPokemon(pokeName);
    setFiltered([])
  };

 

  return { data, filtered, handleSubmit, handleClick };
}

export default usePokemon;
