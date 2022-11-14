import React, { Component } from "react";
import './estilo.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
    'A sorte no jogo só depende da competência do próprio jogador.',
    'Sorte no jogo, azar no amor!',
    'Talvez o amor seja como a sorte: temos de arriscar para o ter.',
    'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
    'Nós não precisamos ter sorte no amor. Precisamos é ter um amor recíproco.',
    'Se errar é azar, se acertar é sorte, se amar é destino, você é vítima da vida e ainda não fez nada.',
    'Minha sorte é ter o teu abraço como recompensa para toda espera.',
    'Pra quem tem fé, não existe sorte.',
    'A maior sorte que eu tive na vida foi te conhecer, e minha maior felicidade é ter você comigo.',
    'Julgo poder ser verdadeiro o fato de a sorte ser árbitro de metade das nossas ações, mas que, mesmo assim, ela permite-nos governar a outra metade ou parte dela.',
    'Custa menos ao nosso amor-próprio caluniar a sorte do que acusar a nossa má conduta.',
    'Quanto mais eu treino, mais sorte eu tenho.',
    'Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.',
    'Imagine uma nova história para sua vida e acredite nela.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Não espere por uma crise para descobrir o que é importante em sua vida.',
    'Pessimismo leva à fraqueza, otimismo ao poder.',
    'O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo.',
    'Evite desencorajar-se: mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si.'    
  ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' +  this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <h1 className="titulo">Biscoitinho da Sorte!</h1>
        <img src={require('./assets/biscoito.png')} className='img'/>
        <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn} className='btn'>{this.props.nome}</button>
      </div>
    )
  }
}
export default App;