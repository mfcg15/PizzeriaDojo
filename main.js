var pizza = {
    tipoCorteza : "",
    tipoSalsa : "",
    quesos : "",
    salsas : ""
};

function pizzaOven (tipoCorteza,tipoSalsa,quesos,salsas)
{
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

function randomPizza (p1,p2,p3,p4)
{
    let listaPizzas = [p1,p2,p3,p4];
    let aleatorio = Math.floor((Math.random()*(3-0+1))+0)
    return listaPizzas[aleatorio]
}

var p1 = pizzaOven("estilo Chigado","tradicional","mozzarella",["pepperoni","salchicha"])
var p2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"] , ["champiñones", "aceitunas", "cebollas"])
var p3 = pizzaOven("lanzada a mano" , "tradicional","feta",["pepperoni","aceitunas"])
var p4 = pizzaOven("estilo Chigado","marinara" , "mozzarella" , ["salchicha","cebollas"])
var p5 = randomPizza(p1,p2,p3,p4);

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)