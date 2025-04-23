// src/pages/Home.jsx
function Home() {
    return (
      <div style={{ 
        display: 'flex', 
        height: '100vh', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column' 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Seu Nome</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>Seu Cargo</p>
      </div>
    );
  }
  
  export default Home;