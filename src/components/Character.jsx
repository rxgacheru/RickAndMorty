import { useLocation } from 'react-router-dom';
const Character = () => {
    const { state: character } = useLocation();
    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-2x1 font-bold mb-5 text-center '>Character Details</h1>
            {/* <div key={character.id}> */}
            <p className='text-gray-700'><strong>Name:</strong> {character.name}</p>
           <p className='text-gray-700'><strong>Status:</strong> {character.status}</p>
             <p className='text-gray-700'><strong>Species:</strong> {character.species}</p>
           <p className='text-gray-700'><strong>Gender:</strong> {character.gender}</p>
           {/*  <p className='text-gray-700'><strong>Origin:</strong> {character.origin}</p> */}
        </div>
        // </div>
    );
};
export default Character;