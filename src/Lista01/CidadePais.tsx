/*
4
Mostrar cidade e país
Crie duas variáveis:
cidade
pais
Mostre:
Eu moro em São Paulo - Brasil
*/

interface PropsCidadePais
{
  estado: string,
  pais: string
}

export default function CidadePais({estado, pais} : PropsCidadePais)
{
  return (
    <p>Eu moro em {estado} - {pais}</p>
  );
}