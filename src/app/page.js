export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', background: 'linear-gradient(to right, #00f2fe, #4facfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          1.6 Exercise Site
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
        
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <div style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#1f1f1f',
            border: '1px solid #333',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'all 0.2s ease-in-out',
            cursor: 'default'
          }}>
            Next.js Static Export
          </div>
          <div style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#1f1f1f',
            border: '1px solid #333',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'all 0.2s ease-in-out',
            cursor: 'default'
          }}>
            GitHub Pages
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <a href="/api-article" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#4facfe',
            color: '#121212',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'opacity 0.2s'
          }}>
            Read New Article: Building an API
          </a>
        </div>
      </main>
    </div>
  );
}
