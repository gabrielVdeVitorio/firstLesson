import { useState } from 'react';
import Endereco from './Endereco.tsx';
import Funcionario from './Funcionario.tsx';
import Livro from './Livro.tsx';
import Usuario from './Usuario.tsx';
import Produto from './Produto.tsx';
import Botao from './Botao.tsx';
import Filme from './Filme.tsx';
import Curso from './Curso.tsx'
import Pessoa from './Pessoa.tsx';
import './App.css';

function App() {

  return (
    <>
      <Pessoa nome='Gabriel' idade={21}/>
      <Curso nome='Desenvolvimento de sistemas com C#.NET' duracao='440 horas'/>
      <Filme titulo='Harry Potter e a Pedra Filosofal' ano={2002} genero='Fantasia'/>
      <Botao texto='Click me' tipo='button'/>
      <Produto nome='Notebook' preco={3500} estoque={10}/>
      <Usuario nome='Gabriel'/>
      <Livro caracDoLivro = {{titulo: 'Harry Potter', autor: 'J. K. Rowling', paginas: 250}}/>
      <Funcionario nome='Gabriel' cargo='Dev Backend C#' departamento='Financeiro' salario={3000}/>
      <Endereco nome='Gabriel' endereco={{cidade: 'Vargem Grande Paulista', estado: 'A'}}/>
    </>
  );
}

export default App
