/*
8️
) Criar variável de saudação
Crie:
saudacao = "Bom dia"
nome = "Carlos"
Mostre:
Bom dia, Carlos!
*/

interface PropsSaudacao
{
  nome: string
}

export default function Saudacao( {nome} : PropsSaudacao )
{
  return (
    <p>Bom dia, {nome}</p>
  );
}