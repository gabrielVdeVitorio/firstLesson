
interface Caracteristicas
{
  titulo: string,
  autor: string,
  paginas: number
}

export default function Livro( {caracDoLivro} : {caracDoLivro : Caracteristicas} )
{
  return (
    <div>
      <h2>{caracDoLivro.titulo}</h2>
      <p>{caracDoLivro.autor}</p>
      <p>{caracDoLivro.paginas} páginas</p>
    </div>
  );
}