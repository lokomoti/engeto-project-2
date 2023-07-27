const pokemonOptions = [
  "digglet",
  "furfrou",
  "seadra",
  "skiploom",
  "vaporeon",
  "wailord",
];

const pokemonDropdown = document.querySelector(".pokemon-dropdown");
const pokemonImage = document.getElementById("pokemon-img");

const createOptions = () => {
  pokemonOptions.forEach((pokemon) => {
    const option = document.createElement("option");
    option.value = pokemon;
    option.textContent = pokemon;

    pokemonDropdown.appendChild(option);
  });
};

const handleChange = () => {
  //   pokemonDropdown.value
  pokemonImage.src = `images/${pokemonDropdown.value}.png`;
  pokemonImage.style.display = "inline";
};

const initPokemon = () => {
  pokemonDropdown.value = null;
  pokemonDropdown.addEventListener("change", handleChange);
  pokemonImage.style.display = "none";
};

createOptions();
initPokemon();
