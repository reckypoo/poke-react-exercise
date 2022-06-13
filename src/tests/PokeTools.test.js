import {getPokemon, getRandomPokemon} from '../providers/poke-tools/pokeTools'

test("Get all pokémon", () => {
    const allPokemon = getPokemon(null)
    expect(allPokemon.length).toStrictEqual(721);
});

test("Get Mew from pokédex", () => {
    const mew = getPokemon(151)
    expect(mew[0].name).toStrictEqual('Mew')
});

test("Get Invalid pokémon from pokédex", () => {
    const invalid = getPokemon(999999)
    expect(invalid).toStrictEqual([])
});

test("Get a random pokémon", () => {
    const pokemon = getRandomPokemon()
    expect(typeof pokemon).toBe('object')
    expect(pokemon.length).toStrictEqual(1)
    expect(typeof pokemon[0].name).toBe("string")
});

test("Get 10 a random pokémon allowing for duplicates", () => {
    const pokemon = getRandomPokemon(10, true)
    expect(typeof pokemon).toBe('object')
    expect(pokemon.length).toStrictEqual(10, true)
    expect(typeof pokemon[0].name).toBe("string")
});

test("Get 100 random pokémon and ensure no duplicates", () => {
    const pokemon = getRandomPokemon(50)
    expect(typeof pokemon).toBe('object')
    expect(pokemon.length).toStrictEqual(50)
    expect(typeof pokemon[0].name).toBe("string")
    let seen = new Set();
    var hasDuplicates = pokemon.some(function(currentObject) {
        return seen.size === seen.add(currentObject.name).size;
    });
    expect(hasDuplicates).toStrictEqual(false)
});

test("Assure that only 100 Pokemon objects are returned with getRandomPokemon even when count parameter is set to 150", () => {
    //EXERCISE: Make this test an effective test based on the description above
    const pokemon = getRandomPokemon(150);
    expect(pokemon.length).toStrictEqual(100);
});

//EXERCISE: Write a test below that loads a bulbasaur, pikachu and abra all using seperate getPokemon() calls. You may need to reference /src/providers/poke-tools/pokeTools/pokedex.json for id numbers
test("getPokemon always returns requested pokemon", () => {
    const pokemon_one = getPokemon(1)[0];
    const pokemon_two = getPokemon(25)[0];
    const pokemon_three = getPokemon(63)[0];
    expect(pokemon_one.name).toBe('Bulbasaur');
    expect(pokemon_two.name).toBe('Pikachu');
    expect(pokemon_three.name).toBe('Abra');

})