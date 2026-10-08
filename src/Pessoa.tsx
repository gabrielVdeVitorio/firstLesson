
interface PropsPessoa
{
  nome: string,
  idade: number
}

export default function Pessoa({nome, idade}: PropsPessoa)
{
  return (
    <div id={nome.replace(/\s/g, "")}>
      <h2>{nome}</h2>
      <p>{idade} anos</p>
    </div>
  );
}