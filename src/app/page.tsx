import MainContainer from '@/components/layout/MainContainer';
import { Search } from '@/components/ui/Search';
import { getCharacters } from '@/lib/api';
import { HomeProps } from '@/types';
import { CharacterList } from '@/components/ui/CharacterList';
import { CharacterDetail } from '@/components/ui/CharacterDetail';

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const name = typeof params.name === 'string' ? params.name : undefined;
  const selectedId = Number(params.characterId);

  const data = await getCharacters(page, { name });

  const selectedCharacter = selectedId 
    ? data.results.find((c) => c.id === selectedId) 
    : data.results[0];
    
  const activeChar = selectedCharacter || data.results[0];

  return (
    <MainContainer>
      <div style={{ gridArea: 'search', backgroundColor: '#1C1C1C' }}>
         <Search />
      </div>
      
      <div style={{ gridArea: 'list', color: 'white', overflow: 'auto' }}>
        <CharacterList characters={data.results} />
      </div>
      
      <div style={{ gridArea: 'detail', color: 'white' }}>
       {activeChar && (
           <CharacterDetail character={activeChar} />
        )}
      </div>
      
    </MainContainer>
  );
}