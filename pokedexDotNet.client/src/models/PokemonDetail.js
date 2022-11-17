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
    for (const type of this.types) {
      if (type.type.name == 'grass') {
        type.color = 'bg-success'
      }
      if (type.type.name == 'water') {
        type.color = 'bg-primary'
      }
      if (type.type.name == 'lightning') {
        type.color = 'bg-warning'
      }
      if (type.type.name == 'fire') {
        type.color = 'bg-danger'
      }
      // if (type.type.name == 'grass') {
      //   type.color = 'bg-success'
      // }

    }
    this.stats = data.stats
    // this.abilityImg = 
    this.evolutions=data.evolutions
    this.sprites=data.sprites
  }
}
