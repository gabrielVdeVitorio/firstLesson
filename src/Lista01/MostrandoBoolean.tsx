/*
5️
) Criar uma variável booleana
Crie uma variável:
estudandoReact = true
Mostre na tela:
Estou estudando React: true
*/

interface PropsMostrandoBoolean
{
  bool: boolean
}

export default function MostrandoBoolean({bool} : PropsMostrandoBoolean)
{
  const boolString = bool ? 'True' : 'False';
  return (
    <p>Estou estudando React : {boolString}</p>
  );
}