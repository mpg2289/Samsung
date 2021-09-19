import { Coche } from "./coche";
import { Ruedas } from "./Ruedas";
import { Extras } from "./extras";
import { Carroceria } from "./Carroceria";

/*Ruedas*/
let r1:Ruedas = new Ruedas("Michelin", "lluvia");
let r2:Ruedas = new Ruedas("GoodYear", "seco");
let r3:Ruedas = new Ruedas("Continental", "lluvia");

/*Extras*/
let e1:Extras = new Extras(true, false, "12 pulgadas");
let e2: Extras = new Extras(false, true, "14 pulgadas");
let e3: Extras = new Extras(false, false, "13 pulgadas");

/*Carrocerias*/
let c1: Carroceria = new Carroceria(true, true, true);
let c2: Carroceria = new Carroceria(false, true, false);
let c3: Carroceria = new Carroceria(false, true, true)

/*Lista Coches*/
let ch1: Coche = new Coche("Skoda", "Octavia", 2.3, 4.5, 750, "Blanco", [ r1 ], e2, c3);
let ch2: Coche = new Coche("Hyundai", "i30", 2.0, 3.4, 547, "Azul", [ r2 ], e1, c2);
let ch3: Coche = new Coche("Seat", "Leon", 2.45, 4, 520, "Negro", [ r3 ], e3, c1);

/*Arranca el programa de consola */
console.log("### Iniciando programa ###");
console.log("");

/*coches creados*/
console.log("[Coche 1]\n");
ch1.mostrar();
console.log("");

console.log("[Coche 2]\n");
ch2.mostrar();
console.log("");

console.log("[Coche 3]\n");
ch3.mostrar();
console.log("");

console.log("### Finalizando programa ###");