class Forca {
  constructor(palavra_alvoS){
    this.palavra_alvo = palavra_alvoS.split('')
    this.vidas=6
    this.letrasChutadas=[]
    this.palavra=[]
    var passo
    for (passo=0; passo<this.palavra_alvo.length;passo++){
      this.palavra.push('_')
    }
  }

  chutar(letra) {
    if (this.letrasChutadas.indexOf(letra)==-1){
    if (letra.length>1){
      console.log("entrada invalida")
      return
    } else if (this.vidas==0 ||this.palavra.indexOf('_')==-1 ){
      console.log("o jogo já acabou")
      return
    } else if (this.palavra_alvo.indexOf(letra)==-1){
      this.letrasChutadas.push(letra)
      this.vidas-=1
      console.log("letra não faz parte da palavra alvo")
      return 
    } else {
      console.log("letra correta")
      this.letrasChutadas.push(letra)
      while(this.palavra_alvo.indexOf(letra)!=-1){
        this.palavra.splice(this.palavra_alvo.indexOf(letra),1,letra)
        this.palavra_alvo.splice(this.palavra_alvo.indexOf(letra),1,'_')
      }
    }
    return
   }else{
    console.log("letra repetida")
    return
   }
  }

  buscarEstado() {
    
     if (this.vidas==0){
      return 'perdeu'
     } else if (this.palavra.indexOf('_')==-1){
      return 'ganhou'
     } else {
      return 'aguardando chute'
     } 
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    getLetrasChutadas() {
      return this.letrasChutadas
    }
  buscarDadosDoJogo() {
    var letrasChutadas = this.letrasChutadas
    var vidas = this.vidas
    var palavra = this.palavra
      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
