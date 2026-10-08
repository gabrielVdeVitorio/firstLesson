
interface PropsUsuario
{
  nome: string,
  cargo?: string
}

export default function Usuario( { nome, cargo='Não informado' } : PropsUsuario )
{
  return (
    <div>
      <h2>{nome}</h2>
      <p>{cargo}</p>
    </div>
  );
}