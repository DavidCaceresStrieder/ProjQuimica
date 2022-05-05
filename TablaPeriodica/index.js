import tablaPeriodica from "./Elementos/Elementos";

const tabla =
{   
    getItemsBySerie: function (periodo) {
        return tablaPeriodica.filter(x => x.periodo == periodo);
    },
    oxidarElemento: function(elemento)
    {
        var item = tablaPeriodica.filter(x => x.simbolo == elemento)[0];
        if (item == null)
            return "No se encontró el elemento";
        if(item.estadoDeOxidacion.length == 0)
            return "El " + item.nombre + " no tiene estados de occidación";
        
        
    }

};

module.export = tabla;
