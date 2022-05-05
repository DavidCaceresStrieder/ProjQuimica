
class TipoElemento 
{
    constructor(ID,esMetalico,Tipo)
    {
        this.id = ID;
        this.Tipo = Tipo;
        this.esMetalico = esMetalico;
    }
}

const TipoElementos = 
[
    new TipoElemento(1,"Alcalino",true),
    new TipoElemento(2,"Terreos",true),
    new TipoElemento(3,"Metales de Transicion",true),
    new TipoElemento(4,"Metales Pobres",true),
    new TipoElemento(5,"Semi-Metales / Metaloides", false),
    new TipoElemento(6,"Halógenos",false),
    new TipoElemento(7,"Gases Nobles",false),
    new TipoElemento(8,"Lantánidos",true),
    new TipoElemento(9,"Actínidos",true),
    new TipoElemento(10,"NN",null)
]

module.export =  ListaElementos;