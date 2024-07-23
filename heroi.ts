class Heroi{
     public nome: string 
    forca: number 
    nivel: number
     constructor (nome: string, forca: number){
      this.nome = nome
      this.forca = forca
      this.nivel = 1
     }
        
    olharDestemido(){
        console.log("olhar destemido!!!")
    }
}

 let heroi1 = new Heroi("jorge", 6000)
    console.log(heroi1)
    heroi1.olharDestemido()

 let heroi2 = new Heroi("jude",7000)
    console.log(heroi2)