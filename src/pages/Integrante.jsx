import { useParams, Link } from "react-router-dom";
import { teamMembers } from "@src/data/teamMembers.js";

export const Integrante = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <main className="landing">
        <h1 className="landing__title">Integrante no encontrado</h1>
        <Link to="/" className="landing__back">
          ← Volver al equipo
        </Link>
      </main>
    );
  }

  return (
    <main className="landing">
      <Link to="/" className="landing__back">
        ← Volver
      </Link>
      {/* Personalizá tu diseño acá */}

      <h1 className="landing__title">{member.name}</h1>
      <p className="landing__subtitle">{member.role}</p>
    </main>
  );
};
