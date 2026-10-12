/*
11) Mostrar frase com 3 variáveis
Crie:
nome
curso
escola
Mostre:
Lucas estuda React na Faculdade Flamingo.
*/

export default function EstudaOnde({nome, curso, escola} : {nome: string; curso: string, escola: string})
{
  return (
    <p>{nome} estuda {curso} na {escola}</p>
  );
}