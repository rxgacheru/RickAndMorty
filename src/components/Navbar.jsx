import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [character, setCharacter] = useState([]);
  const filteredCharacter = character.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <nav className='bg-gray-800 py-4'>
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/' className="text-gray-300">Home</Link>
      <ul className="flex justify-center space-x-4">
        <li>
        <Link to='/characters' className="text-gray-300">Characters</Link>
        </li>
      </ul>
  
      
      <input 
            type='search'
            placeholder='Search by name'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-fill px-2 py-4 border rounded-md border-blue-500'/>
        
      </div>{filteredCharacter.map(character =>(
        <div key={character.id} className='border p-4'>
          <Link to={`/character/${character.id}`}>
            <img src={character.image} className='w-full h-auto mb-2'/>
          </Link>
          
        </div>
       ))} 
       
    </nav>

  )
}

export default Navbar;

         