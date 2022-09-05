export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo:String;
    localidad:String;
    sobremi :String;
    banner:String;


    constructor(nombre: String,apellido:String, img:String, titulo:String, localidad:String, sobremi:String,banner:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo= titulo;
        this.localidad = localidad;
        this.sobremi = sobremi;
        this.banner=banner;
    }
}