import { Link } from "react-router-dom";
import { teamMembers } from "@src/data/teamMembers.js";

export const Home = () => {
  return (
    <main className="landing">
      <header className="landing__header">
        <h1 className="landing__title">DevHause</h1>
        <br></br>
        <p className="landing__subtitle">Equipo de desarrollo</p>
      </header>

      <section className="landing__team" aria-label="Integrantes del equipo">
        <h2 className="landing__team-title">Nuestro equipo</h2>
        <ul className="landing__members">
          {teamMembers.map((member) => (
            <li key={member.id} className="landing__member">
              <Link
                to={`/integrante/${member.id}`}
                className="landing__member-link"
              >
                <span className="landing__member-name">{member.name}</span>
                <span className="landing__member-role">{member.role}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
