export class PokemonDetail {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.img = data.sprites.other["official-artwork"].front_default;
    this.abilities = data.abilities;
    this.forms = data.forms;
    this.species = data.species;
    this.types = data.types;
    this.stats = data.stats
  }
}
