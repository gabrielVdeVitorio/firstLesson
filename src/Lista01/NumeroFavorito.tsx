/*
13) Mostrar número favorito
Crie:
numeroFavorito
Mostre:
Meu número favorito é 7
*/

export default function NumeroFavorito({numeroFavorito} : {numeroFavorito: number})
{
  return (
    <p>Meu número favorito é {numeroFavorito}</p>
  );
}