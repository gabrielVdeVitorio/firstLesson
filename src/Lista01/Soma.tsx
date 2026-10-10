
interface PropsSoma
{
  var01: number,
  var02: number
}

export default function Soma({var01, var02} : PropsSoma)
{
  return (
    <p>{var01 + var02}</p>
  );
}