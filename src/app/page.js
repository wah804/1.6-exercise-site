import Link from 'next/link';

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
          Memory Lane Exercises
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
          Welcome to my static website showcasing assignments for 1.6 and 2.6.
        </p>
        
        <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 1.5rem 0', color: '#ffffff' }}>1.6 Exercise Content</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <div style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#252525',
              border: '1px solid #444',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'all 0.2s ease-in-out',
              cursor: 'default'
            }}>
              Next.js Static Export
            </div>
            <div style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#252525',
              border: '1px solid #444',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'all 0.2s ease-in-out',
              cursor: 'default'
            }}>
              GitHub Pages
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 1.5rem 0', color: '#ffffff' }}>2.6 Exercise Update</h2>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/api-article" style={{
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
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
