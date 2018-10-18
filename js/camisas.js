var arregloCamisas = [];
var Camisas = /** @class */ (function () {
    function Camisas() {
    }
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
    Camisas.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camisas.prototype.setCasa = function (casa) {
        this.casa = casa;
    };
    Camisas.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisas.prototype.settalla = function (talla) {
        this.talla = talla;
    };
    Camisas.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camisas.prototype.getMarca = function () {
        return this.marca;
    };
    Camisas.prototype.getCasa = function () {
        return this.casa;
    };
    Camisas.prototype.getColor = function () {
        return this.color;
    };
    Camisas.prototype.getTalla = function () {
        return this.talla;
    };
    Camisas.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camisas;
}());
function guardar() {
    var marca = document.getElementById("marca").value.toString();
    var color = document.getElementById("color").value.toString();
    var talla = document.getElementById("talla").value.toString();
    var precio = document.getElementById("precio").value.toString();
    var casa = document.getElementById("casa").value.toString();
    var camisa = new Camisas();
    camisa.setMarca(marca);
    camisa.setColor(color);
    camisa.settalla(talla);
    camisa.setPrecio(precio);
    camisa.setCasa(casa);
    this.arregloCamisas.push(camisa);
    var list = "";
    for (var i = 0; i < this.arregloCamisas.length; i++) {
        list = list + "<li>" + "<b>MARCA: </b>" + this.arregloCamisas[i].getMarca() + " <b>COLOR: </b>" + this.arregloCamisas[i].getColor() + " <b>TALLA: </b>" + this.arregloCamisas[i].getTalla() + " <b>PRECIO:</b> " + this.arregloCamisas[i].getPrecio() + "<b>CASA: </b>" + this.arregloCamisas[i].getCasa() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("marca").value = "";
    document.getElementById("color").value = "";
    document.getElementById("talla").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("casa").value = "";
}
;
// var alfanum:letrasNumero = 34;
// console.log(camisa);
