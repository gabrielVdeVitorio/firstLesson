

interface PropsFilme
{
  titulo: string,
  ano: number,
  genero: string
}

export default function Filme( { titulo, ano, genero } : PropsFilme )
{
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{ano}</p>
      <p>{genero}</p>
    </div>
  );
}