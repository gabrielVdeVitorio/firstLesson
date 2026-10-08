
interface PropsCurso
{
  nome: string,
  duracao: string
}

export default function Curso({nome, duracao} : PropsCurso)
{
  return (
    <div>
      <h2>{nome}</h2>
      <p>{duracao}</p>
    </div>
  );
}