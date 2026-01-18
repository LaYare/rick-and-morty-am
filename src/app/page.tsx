import MainContainer from '@/components/layout/MainContainer';

export default function Home() {
  return (
    <MainContainer>
      {/* Elementos dummy para probar el Grid Areas */}
      <div style={{ gridArea: 'search', color: 'white', border: '1px solid blue' }}>SEARCH</div>
      <div style={{ gridArea: 'list', color: 'white', border: '1px solid green'}}>LISTA</div>
      <div style={{ gridArea: 'detail', color: 'white', border: '1px solid yellow' }}>DETALLE</div>
      
    </MainContainer>
  );
}