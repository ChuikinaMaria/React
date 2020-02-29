import React, {useEffect, useState} from "react";

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    // This use effect might be confusing
    // But is is an example of another type of hook
    // For now it is unimportant to know how it works exactly
    // Just know that it executes the function once on first render
    useEffect(async () => {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };
        let fetchedPokemons = await fetchPokemons();
        setPokemons(fetchedPokemons);

        /* Use the result of the fetchPokemons function */
        /* set the result using setPokemons, be sure to support the render below */
    }, []);

    return (
    <div className={'pokedex'}>
            <h2>Pokedex</h2>
            <table>
            <thead>
                <th>Pokemon's ID</th>
                <th>Pokemon's name</th>
            </thead>
            <tbody>
            {
                pokemons.map(pokemon => <Pokemon key={pokemon.entry_number} {...pokemon} />)
            }
            </tbody>
            </table>
        </div>
    )
};

const Pokemon = (props) => {
   let name = props.pokemon_species.name
    return (
        
                <tr>
                    <td>{props.entry_number}</td>
                    <td>{name}</td>
                </tr>
                        
                        )
};

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const InteractivePokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(false);

    // This use effect might be confusing
    // But is is an example of another type of hook
    // For now it is unimportant to know how it works exactly
    // Just know that it executes the function once on first render
    useEffect(async () => {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };
        let fetchedPokemons = await fetchPokemons();
        setPokemons(fetchedPokemons);

        /* Use the result of the fetchPokemons function */
        /* set the result using setPokemons, be sure to support the render below */
    }, []);

    const onSelectHandler = async (pokemon) => {
        const fetchPokemon = () => {
            return fetch(pokemon.url)
                .then(response => response.json());
        };
        let fetchedPokemon = await fetchPokemon();
        setSelectedPokemon(fetchedPokemon);

        /* Use the result of the fetchPokemon function */
        /* set the result using selectedPokemon, be sure to support the render below */
    };

    return (
        <div className={'pokedex'}>
            <h2>Interactive Pokedex</h2>
            {
                selectedPokemon === false
                ? (
                    pokemons.map(pokemon => <InterActivePokemon key={pokemon.entry_number} {...pokemon} onSelectHandler = {onSelectHandler} /* pass the onSelectHandler here a property */ />)
                )
                : (
                    <DetailedPokemon {...selectedPokemon} />
                )
            }
        </div>
    )

};

const DetailedPokemon = ({ flavor_text_entries }) => {
    return (
        <article>
            {flavor_text_entries.map((entry, index) => <p key={index}>{entry.flavor_text}</p>)}
        </article>
    );
};

const InterActivePokemon = ({ pokemon_species, onSelectHandler }) => {
    const onClick = () => {
        onSelectHandler(pokemon_species)
        /* trigger the onSelectedHandler function with the pokemon_species */
    };

    return (
        <article>
            <tr>
                <td>{pokemon_species.name}</td>
                <td><button onClick={onClick}>Learn more</button></td>
            </tr>        
            
        </article>
    )
};


export { Pokedex, InteractivePokedex };