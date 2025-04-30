import { useState } from 'react';
import { Card } from './Card';
import { useCharacters } from './hooks/useApi';




export const Container = () => {
    const [page, setPage] = useState(1);
    
    const [characters, loading] = useCharacters(page);
    const [counter, setCounter] = useState(0);
    // const episodes = useEpisodes(page);

    return (
        <>
        <button onClick={() => setCounter(counter - 1)}>Prev</button>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Next</button>
        <br></br>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        {page}
        <button onClick={() => setPage(page + 1)}>Next</button>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {episodes.map((episode) => <Card 
                name={episode.name}
                paragraph500={episode.url}
                paragraph900={episode.air_date}
                id={String(episode.id)} />)}
            </div> */}
            {loading && <p>Sto caricando</p>}
            {!loading && <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {characters.map((character) => <Card 
                image={character.image} 
                name={character.name}
                paragraph500={character.origin.name}
                paragraph900={character.status}
                id={String(character.id)} />)}
            </div>}
          </div>
        </div>
        </>
      )
}