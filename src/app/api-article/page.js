import Image from 'next/image';
import Link from 'next/link';

export default function ApiArticle() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
        <Link href="/" style={{ color: '#4facfe', textDecoration: 'none', fontSize: '1.2rem' }}>
          &larr; Back to Home
        </Link>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1.5rem', 
          background: 'linear-gradient(to right, #00f2fe, #4facfe)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent' 
        }}>
          Building a Scalable Node.js API
        </h1>

        <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
          <Image 
            src="/images/api_building_header.png" 
            alt="API Building Header" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>

        <article style={{ fontSize: '1.1rem', color: '#e0e0e0' }}>
          <p>
            Building a robust API is a critical skill for modern web development. Recently, I've been diving deep into constructing RESTful services using Node.js and Express. It's fascinating how a few lines of code can open up your application's data to the world (or securely to specific clients).
          </p>

          <h2 style={{ color: '#ffffff', marginTop: '2rem', marginBottom: '1rem' }}>Structuring the Project</h2>
          <p>
            One of the most important lessons learned is the value of a solid folder structure. Instead of dumping everything into a single <code>server.js</code> file, modularizing the code into routes, controllers, and models makes a massive difference in maintainability. This separation of concerns ensures that as the API grows, you don't end up with spaghetti code.
          </p>

          <h2 style={{ color: '#ffffff', marginTop: '2rem', marginBottom: '1rem' }}>Database Integration</h2>
          <p>
            Connecting to a database like MongoDB using Mongoose adds a powerful layer of data persistence. Defining clear schemas not only structures the data but also provides validation out of the box. Building out CRUD (Create, Read, Update, Delete) operations becomes a structured process rather than a chaotic mix of raw queries.
          </p>

          <h2 style={{ color: '#ffffff', marginTop: '2rem', marginBottom: '1rem' }}>Next Steps</h2>
          <p>
            Looking forward, I plan to integrate more advanced features such as JWT-based authentication, rate limiting, and comprehensive automated testing using Jest and Supertest to ensure the API's reliability under load.
          </p>
        </article>
      </main>
    </div>
  );
}
