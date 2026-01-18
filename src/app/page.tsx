import MainContainer from '@/components/layout/MainContainer';
import { Search } from '@/components/ui/Search';
import { getCharacters } from '@/lib/api';
import { HomeProps } from '@/types';

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const name = typeof params.name === 'string' ? params.name : undefined;

  const data = await getCharacters(page, { name });

  return (
    <MainContainer>
      <div style={{ gridArea: 'search' }}>
         <Search />
      </div>
      
      <div style={{ gridArea: 'list', border: '1px solid green', color: 'white', overflow: 'auto' }}>
        <h3>Resultados: {data.info.count}</h3>
      </div>
      
      <div style={{ gridArea: 'detail', border: '1px solid yellow', color: 'white' }}>
        DETALLE DEL PERSONAJE
      </div>
      
    </MainContainer>
  );
}