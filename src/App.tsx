import MostrandoBoolean from './Lista01/MostrandoBoolean.tsx';
import CidadePais from './Lista01/CidadePais.tsx';
import Soma from './Lista01/Soma.tsx';
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
import Multiplicacao from './Lista01/Multiplicacao.tsx';
import AnoAtual from './Lista01/AnoAtual.tsx';
import EstudaOnde from './Lista01/EstudaOnde.tsx';
import AnosDeIdade from './Lista01/AnosDeIdade.tsx';
import NumeroFavorito from './Lista01/NumeroFavorito.tsx';
import PrimeiroClique from './eventos/exercicio01.tsx';
import Buttons from './eventos/exercicio02.tsx';

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
        <CardSemProps/>
        <PerfilSemProps/>
      </div>
      <div className='div--sections'>
        <Soma var01 = {4} var02 = {8}/>
        <CidadePais estado='São Paulo' pais='Brasil'/>
        <MostrandoBoolean bool={true}/>
        <Multiplicacao fator01 = {5} fator02 = {8}/>
        <AnoAtual/>
        <EstudaOnde nome='Lucas' curso='React' escola='Faculdade Flamingo'/>
        <AnosDeIdade anoNascimento={2000} anoAtual={2026}/>
        <NumeroFavorito numeroFavorito={7}/>
        <PrimeiroClique/>
        <Buttons id='container'/>
      </div>
    </main>
  );
}

export default App
