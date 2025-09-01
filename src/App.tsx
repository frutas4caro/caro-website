import { NavLink, Routes, Route } from 'react-router-dom'
import GradioEmbed from './components/GradioEmbed'

function Home() {
  return (
    <section className="container">
      <h1>Hi! I'm Carolyn Aquino 👋🏽 </h1>
      <p>
        Software Engineer • Backend • Java • AWS Solutions Architect • Python • AI • Figma • Frontend 
      </p>
      <p>
        Get to know me, chat with my AI agent, and let's connect!
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
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
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
