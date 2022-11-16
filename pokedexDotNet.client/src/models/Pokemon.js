export class Pokemon {
  constructor(data) {
       this.id = data.url
         .replace("https://pokeapi.co/api/v2/pokemon/", "")
         .replace("/", "");
       this.name = data.name;
       this.url = data.url;
       this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }
}

