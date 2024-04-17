const axios = require("axios");

async function obtenerPokemonPorId(pokemonId) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = response.data;

    console.log("id:", data.id);
    console.log("nombre:", data.name);
    console.log("tipo(s):", data.types.map(type => type.type.name).join(", "));
    console.log("altura:", data.height, "decímetros");
    console.log("peso:", data.weight, "hectogramos");
  } catch (error) {
    console.error("Se ha producido un error: ", error.message);
  }
}

// A continuación mostraré el pokemon id=1 como ejemplo:

obtenerPokemonPorId(650);
