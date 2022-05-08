
var oxidador
{
    const valencias = 
    [
        ["-ico"],
        ["-oso", "-ico"],
        ["hipo-oso","-oso","-ico"],
        ["hipo-oso","-oso","-ico","per-ico"],
        ["hipo-oso","-oso","-ico","per-ico","hiper-ico"]
    ]
    
    oxidar = function(elemento)
    {
        var rv = [];
        var valen = valencias[elemento.estadosDeOxidacion.length];
        for(var i = 0;i <= valen.length; i++)
        {
            rv.push(valen[i].replace("-",elemento.nombre));
        }
        return rv;
    } 

}

module.export = oxidador;

