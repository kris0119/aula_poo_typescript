class Monstro{
   nome:string 
    forca:number 
    nivel: number 
    poder: number 
    constructor(nome:string, forca:number, nivel:number, poder:number){
     this.nome = nome
     this.forca = forca
     this.nivel = 1
     this.poder = poder
    }
    olharquedaArrepio(){
    console.log("olharquedaArrepio!!!")
    }

    }

    let monstro1= new Monstro("dimitri" , 8000,9,20000000)
    console.log(monstro1)
    monstro1.olharquedaArrepio()
    


    let monstro2 = new Monstro("lex", 9000,8,1000000)
    console.log(monstro2)
    monstro2.olharquedaArrepio()
