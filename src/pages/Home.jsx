const teamMembers = [
  { id: 1, name: "Integrante 1", role: "Frontend Developer" },
  { id: 2, name: "Integrante 2", role: "Backend Developer" },
  { id: 3, name: "Integrante 3", role: "Full Stack Developer" },
  { id: 4, name: "Integrante 4", role: "UI/UX Designer" },
  { id: 5, name: "Integrante 5", role: "DevOps Engineer" },
  { id: 6, name: "Integrante 6", role: "Project Manager" },
];

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
              <a
                href={`#integrante-${member.id}`}
                className="landing__member-link"
              >
                <span className="landing__member-name">{member.name}</span>
                <span className="landing__member-role">{member.role}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
