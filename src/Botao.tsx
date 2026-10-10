

interface PropsBotao
{
  texto: string,
  tamanho: string
}

export default function Botao( { texto, tamanho } : PropsBotao )
{
  return (
    <button>{texto} - {tamanho}</button>
  );
}