import { useState } from 'react';
import PerfilSemProps from './PerfilSemProps.tsx';
import CardSemProps from './CardSemProps.tsx';
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
    <main id='container'>
      <div className='div--sections'>
        <Pessoa nome='Gabriel' idade={21}/>
        <Curso nome='Desenvolvimento de sistemas com C#.NET' duracao='440 horas'/>
        <Filme titulo='Harry Potter e a Pedra Filosofal' ano={2002} genero='Fantasia'/>
        <Botao texto='Click me' tamanho='Grande'/>
        <Produto nome='Notebook' preco={3500} estoque={10}/>
        <Usuario nome='Gabriel'/>
        <Livro caracDoLivro = {{titulo: 'Harry Potter', autor: 'J. K. Rowling', paginas: 250}}/>
        <Funcionario nome='Gabriel' cargo='Dev Backend C#' departamento='Financeiro' salario={3000}/>
        <Endereco nome='Gabriel' endereco={{cidade: 'Vargem Grande Paulista', estado: 'SP'}}/>
      </div>
      <div className='div--sections'>
        <CardSemProps/>
        <PerfilSemProps/>
      </div>
    </main>
  );
}

export default App
