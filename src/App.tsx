import { NavLink, Routes, Route, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import GradioEmbed from './components/GradioEmbed'
import gemeniDoc from './content/google-gemeni-gems.md?raw'
import terminalDoc from './content/terminal-and-command-line.md?raw'
import ragDoc from './content/retrieval-augmented-generation-rag.md?raw'

function Home() {
  return (
    <section className="container">
      <h1>Hi! I'm Carolyn Aquino 👋🏽 </h1>
      <p>
        Software Engineer • AWS Solutions Architect • Java • Python • AI • Figma 
      </p>
      <p>
        Get to know me, chat with Pancito, my AI agent, and let's connect!
      </p>
    </section>
  )
}

function About() {
  return (
    <section className="container">
      <h2>About</h2>
      <p>
        I have been in the software engineering space for the last 9 years and love to code! I am looking to build web and mobile apps that help people connect in positive ways and feel good about themselves.
        I believe in the power of technology and using it to make this world a better place to live in.
        I am a big fan of Figma and love to design user-friendly interfaces.
        I also love to cook and eat good food. If you have any recommendations, anywhere, let me knowww!
        I was born and raised in New York City and absolutely love living in a place where differences are appreciated and celebrated.
      </p>
      <ul>
        <li><a href="https://www.linkedin.com/in/carolyn-aquino" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="./public/CarolynAquinoResume2025.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a></li>
        <li><a href="mailto:caquino1223@gmail.com">Email</a></li>
      </ul>
    </section>
  )
}

function Chat() {
  return (
    <section className="container">
      <h2>Chat with my AI Agent</h2>
      <p>Go ahead and chat with my AI agent to get to know me better!</p>
      <GradioEmbed />
    </section>
  )
}

function Learning() {
  const learningDocs = [
    {
      title: 'Google Gemeni Gems',
      description: 'Building your own assistants in 5 mins',
      path: '/learning/google-gemeni-gems'
    },
    {
      title: 'Terminal and Command Line',
      description: 'Navigate your system like a true engineer',
      path: '/learning/terminal-and-command-line'
    },
    {
      title: 'Retrieval Augmented Generation (RAG)',
      description: 'Increase llm response accuracy with a vetted knowledge base!',
      path: '/learning/retrieval-augmented-generation-rag'
    }
  ]

  return (
    <section className="container">
      <h2>Learning</h2>
      <p>Click on one of the one pagers below to get started on your learning journey!</p>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          marginTop: '1rem'
        }}
      >
        {learningDocs.map((doc) => (
          <Link
            key={doc.title}
            to={doc.path}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              gap: '0.5rem'
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                background: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                fontWeight: 600
              }}
            >
              📄
            </div>
            <strong>{doc.title}</strong>
            <p style={{ margin: 0 }}>{doc.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function GemeniGemsPage() {
  return (
    <article className="container">
      <p><Link to="/learning">← Back to Learning</Link></p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {gemeniDoc}
      </ReactMarkdown>
    </article>
  )
}

function TerminalCommandLinePage() {
  return (
    <article className="container">
      <p><Link to="/learning">← Back to Learning</Link></p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {terminalDoc}
      </ReactMarkdown>
    </article>
  )
}

function RagPage() {
  return (
    <article className="container">
      <p><Link to="/learning">← Back to Learning</Link></p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {ragDoc}
      </ReactMarkdown>
    </article>
  )
}

export default function App() {
  return (
    <div>
      <header>
        <nav className="container">
          <ul>
            <li><strong>Carolyn Aquino</strong></li>
          </ul>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/chat">Chat</NavLink></li>
            <li><NavLink to="/learning">Learning</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/google-gemeni-gems" element={<GemeniGemsPage />} />
          <Route path="/learning/terminal-and-command-line" element={<TerminalCommandLinePage />} />
          <Route path="/learning/retrieval-augmented-generation-rag" element={<RagPage />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} Carolyn Aquino — Built with React + Vite. PWA enabled.
        </div>
      </footer>
    </div>
  )
}
