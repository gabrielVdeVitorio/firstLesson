

interface PropsBotao
{
  texto: string,
  tipo: 'submit' | 'button' | 'reset'
}

export default function Botao( { texto, tipo } : PropsBotao )
{
  return (
    <button type={tipo}>{texto}</button>
  );
}