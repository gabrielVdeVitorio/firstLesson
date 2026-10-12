/*
12) Calcular idade aproximada
Crie:
anoNascimento = 2000
anoAtual = 2026
Mostre:
Idade aproximada: 26 anos
*/

export default function AnosDeIdade( {anoNascimento, anoAtual} : {anoNascimento: number; anoAtual: number} )
{
  return (
    <p>Idade aproximada: {anoAtual - anoNascimento} anos</p>
  );
}