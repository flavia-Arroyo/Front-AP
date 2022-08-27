export class Experiencia {
    id? :number;
    img:string;
    nombreE :string;
    descripcionE: string;
   
    constructor(nombreE:string , descripcionE:string, img :string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img= img;
        console.log(nombreE, descripcionE,img, this.id)


    }
    

}
