type letrasNumero = string | number;
type leandro = boolean | string;
var arregloCamisas = [];
class Camisas{
    //propiedades
    public marca:string;
    public color:string;
    public talla:string;
    public precio:number;
    public casa:leandro;
    
   
    // public cualquiera:any;
    // public lenguaje : Array<string>;
    // public years :number[];
    // public numeroString: string | number;
   
    //metodo constructor
    // constructor(marca, color , talla , precio){
    //     this.marca = marca;
    //     this.color = color ;
    //     this.talla = talla;
    //     this.precio= precio;
    // }
//metodos set y get
public setMarca(marca){
    this.marca = marca;
    }
    public setCasa(casa){
        this.casa = casa;
        }
    public setColor(color){
        this.color = color;
        }   
        public settalla(talla){
            this.talla = talla;
            }
            public setPrecio(precio){
                this.precio = precio;
                }

   public getMarca(){
        return this.marca;
        }
        public getCasa(){
            return this.casa;
            }
        public getColor(){
            return this.color;
            }
            public getTalla(){
                 return this.talla;
                }
                public getPrecio(){
                    return this.precio;
                     }
}
function guardar(){
    let marca:string = (<HTMLInputElement>document.getElementById("marca")).value.toString(); 
    let color:string = (<HTMLInputElement>document.getElementById("color")).value.toString(); 
    let talla:string = (<HTMLInputElement>document.getElementById("talla")).value.toString(); 
    let precio:string = (<HTMLInputElement>document.getElementById("precio")).value.toString(); 
    let casa:leandro = (<HTMLInputElement>document.getElementById("casa")).value.toString();
    var camisa = new Camisas();
     camisa.setMarca(marca);
     camisa.setColor(color);
     camisa.settalla(talla);
     camisa.setPrecio(precio);
     camisa.setCasa(casa);

    this.arregloCamisas.push(camisa);
    var list="";
    for(var i = 0; i< this.arregloCamisas.length;i++){
        list = list+"<li>"+"<b>MARCA: </b>"+this.arregloCamisas[i].getMarca()+" <b>COLOR: </b>"+this.arregloCamisas[i].getColor()+" <b>TALLA: </b>"+this.arregloCamisas[i].getTalla()+" <b>PRECIO:</b> "+this.arregloCamisas[i].getPrecio()+"<b>CASA: </b>"+this.arregloCamisas[i].getCasa()+"</li>";
    }
    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;
    (<HTMLInputElement>document.getElementById("marca")).value = "";
     (<HTMLInputElement>document.getElementById("color")).value = "";
     (<HTMLInputElement>document.getElementById("talla")).value = ""; 
    (<HTMLInputElement>document.getElementById("precio")).value = "";
    (<HTMLInputElement>document.getElementById("casa")).value = "";
 };

// var alfanum:letrasNumero = 34;



// console.log(camisa);