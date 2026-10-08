
interface PropsProduto
{
  nome: string,
  preco: number,
  estoque: number
}

export default function Produto( { nome, preco, estoque } : PropsProduto )
{
  return (
    <div>
      <h2>{nome}</h2>
      <p>R${preco}</p>
      <p>{estoque}</p>
    </div>
  );
}