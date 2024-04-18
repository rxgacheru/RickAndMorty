import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const CharacterList = () => {
    const [character, setCharacter] = useState([]);
    const fetchCharacter = async () => {
        try {
            const response = await fetch(' https://rickandmortyapi.com/api/character');
            if (!response.ok) {
                throw new Error('Failed to fetch character');
            }
            const data = await response.json();
            setCharacter(data.results);
        } catch (error) {
            console.error('Error fetching character:', error);
            setCharacter([]);
        }
    };
    useEffect(() => {
        fetchCharacter();
    }, []);

    

    const deleteCharacter = id => {
        fetch(`https://rickandmortyapi.com/api/characters/${id}`,{
            method: 'DELETE'
        }).then(() =>{
            setCharacter(character.filter(character => character.id !== id))
        })
    };

 
    console.log(character); // Log the users state
    return (
        <div className='grid grid-cols-4 gap-4 bg-gray-700'>
            {
                
                character.map((character) => (
                    <div  className='border p-4 bg-white'>
                        {/* <h3 className='text-lg font-semibold'>{character.name}</h3> */}
                        <p>{character.id}</p>
                        <Link to={`/character/${character.id}`} state={character}>
                         <img src={character.image} alt={character.name}/>
                         </Link>
                         <h4>{character.name}</h4>
                         {/*   <p > {character.status}</p>
                        <p> {character.species}</p>
                        <p>{character.gender}</p>
                      <p> {character.origin}</p> */}
                        <Link to={`/character/${character.id}`} state={character}>
                            <button className='hover:text-black-500  border border-bold rounded-lg hover:bg-gray-700 hover:text-white mt-2'>View Character</button>
                        </Link>
                        <button onClick={() => deleteCharacter(character.id)} className='block w-full mt-2 bg-blue-300 hover'>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};
export default CharacterList;