/*
9
) Mostrar resultado de multiplicação
Crie:
numero1 = 5
numero2 = 8
Mostre:
Multiplicação: 40
*/

export default function Multiplicacao( {fator01, fator02} : { fator01: number; fator02: number } )
{
  return (
    <p>Multiplicação: {fator01 * fator02}</p>
  );
}