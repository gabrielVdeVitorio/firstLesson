
interface PropsAluno
{
  nome: string,
  curso: string,
  semestre: string
}

export default function Aluno( { nome, curso, semestre } : PropsAluno )
{
  return (
    <>
      <h2>{nome}</h2>
      <p>{curso}</p>
      <p>{semestre}</p>
    </>
  );
}