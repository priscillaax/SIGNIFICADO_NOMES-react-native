import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nome: '', significado: '', imagem: 'data:image/png;base64,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'}
  }

  onChangeDo(nome) {
    let s = this.state
    s.nome = nome
    if (nome === 'Priscilla' || nome === 'Priscila') {
      s.significado = '\tSignifica "que pertence a Prisco" ou "da natureza de Prisco", "familiar de alguém venerável".' +
                        '\n\n\tO nome Priscila se originou a partir do nome masculino Priscilo, diminutivo de Prisco.' +
                        '\n\n\tSignifica “que pertence a Prisco" ou “da natureza de Prisco".' +
                        'Prisco, por sua vez, do latim Priscus tem o sentido de “o antigo", "o velho" ou "o venerável", de modo que Priscila significa “familiar de alguém venerável".'
      s.imagem = 'https://i.ytimg.com/vi/OxgKvRvNd5o/maxresdefault.jpg'
    } else if (nome === 'Jhoseph' || nome === 'Joseph') {
      s.significado = '\tSignifica “aquele que acrescenta”, “acréscimo do Senhor” ou “Deus multiplica”.' + 
                        '\n\n\tJoseph é a variante inglesa, francesa e alemã de José, que deriva a partir do grego Ioseph, do hebraico Yosef, que quer dizer “Ele acrescentará”, referindo-se a Deus.'
      s.imagem = 'https://aviaorevue.com/wp-content/uploads/e195e2_embraer_azul.jpg'
    } else if (nome === 'Aline') {
      s.significado = '\tSignifica "protetora nobre"; “pequena nobre”, “a reluzente, a resplandecente”.' +
                        '\n\n\tO nome surgiu a partir do latim Alina, Alyna, variantes de Adelina, um nome com duas possibilidades de origem.' +
                        '\n\n\tAdelina pode ter vindo do germânico Ethelyna. Esse é formado pela união dos termos athal, que significa “nobre”, e linda, que quer dizer “serpente”, do qual resulta o significado “serpente nobre, serpente da nobreza”.' +
                        '\n\n\tAline reflete a simbologia da serpente - força, energia, proteção. Por extensão, o nome tem o sentido de "protetora nobre".'
      s.imagem = 'http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=5'
    } else if(nome === 'Joan') {
      s.significado = '\tSignifica “Deus é cheio de graça”, “agraciado por Deus” ou “misericórdia de Deus”.' +
                        '\n\n\tJoan é uma variação da versão inglesa medieval de Johanne, nome que é derivado do hebraico Yehokhanan, Iohanan, compostos pela união dos elementos Yah, que significa “Javé” ou “Deus”, e Hannah, que quer dizer “graça” ou “agraciado”.' +
                        '\n\n\tAssim, o significado completo de Joan seria equivalente a “Deus é gracioso” ou “agraciado por Javé (Deus)”.'
      s.imagem = 'https://i.pinimg.com/originals/cf/fc/b7/cffcb7c113e9bac963c74dfc72020fe3.jpg'
    } else if (nome === '') {
      s.significado = 'Sem nome, sem significado! ò.ó'
      s.imagem = 'https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg?fit=800%2C600&ssl=1'
    } else {
      s.significado = 'Nome não encontrado.. Sorry! :('
      s.imagem = 'https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg?fit=800%2C600&ssl=1'
    }
    this.setState(s)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, backgroundColor: '#b2b2ff', color: '#fff', textAlign: 'center', fontFamily: 'sans-serif-thin', borderRadius:10}}>
          Significado dos Nomes
        </Text>

        <TextInput placeholder="Digite um Nome"
            style={styles.inputText}
            onChangeText={ (nome) => this.onChangeDo(nome) } />

        {/* <ImageBackground source={{uri: this.state.imagem}} style={{width: 400, height: 400, opacity: 0.1}}> */}
          <Text style={[styles.nome]}>{this.state.significado}</Text>
        {/* </ImageBackground> */}
        
        <Image
          source={{
            uri: this.state.imagem,
            cache: 'only-if-cached',
          }}
          style={{width: 400, height: 400, opacity: 0.2}}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  inputText: {
    height:60,
    backgroundColor: '#ededed'
  },
  nome: {
    fontSize: 16,
    color:'navy',
    fontFamily: 'sans-serif-thin',
    fontStyle: 'italic',
  }
});
