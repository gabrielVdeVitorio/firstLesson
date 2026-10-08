
interface PropsFuncionario
{
  nome: string,
  cargo: string,
  salario: number,
  departamento: string
}

export default function Funcionario( { nome, cargo, salario, departamento } : PropsFuncionario )
{
  return (
    <>
      <h2>{nome}</h2>
      <p>Cargo: {cargo}</p>
      <p>R${salario.toFixed(2)}</p>
      <p>departamento: {departamento}</p>
    </>
  );
}