import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p>Welcome to your modern activity tracking frontend.</p>
      <Link to="/about" className="btn btn-primary">
        Learn more
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h1>About OctoFit</h1>
      <p>Track workouts, teams, and leaderboards with a modern React + Vite app.</p>
      <Link to="/" className="btn btn-secondary">
        Back home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
