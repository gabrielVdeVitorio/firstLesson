import { z } from 'zod';

const SchemaEndereco = z.object(
{
  cidade: z.string(),
  estado: z.string().length(2, 'Você deve escrever a sigla do estado com 2 dígitos')
});

type InterfaceEndereco = z.infer<typeof SchemaEndereco>;

interface InterfaceObjPessoa
{
  nome: string,
  endereco: InterfaceEndereco
}

export default function Endereco({ nome, endereco } : InterfaceObjPessoa)
{
  SchemaEndereco.parse(endereco);
  return (
    <>
      <h2>{nome}</h2>
      <p>{endereco.cidade} - {endereco.estado}</p>
    </>
  );
}