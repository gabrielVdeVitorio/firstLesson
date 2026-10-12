/*
10) Mostrar ano atual
Crie uma variável:
ano = 2026
Mostre:
Estamos no ano de 2026
*/

export default function AnoAtual()
{
  return (
    <p>{new Date().getFullYear()}</p>
  );
}