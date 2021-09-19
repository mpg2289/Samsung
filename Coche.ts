import { Ruedas } from "./Ruedas";
import { Extras } from "./extras";
import { Carroceria } from "./Carroceria";
export class Coche{
    private _marca: string;
    private _modelo: string;
    private _ancho: number;
    private _largo: number;
    private _peso: number;
    private _color: string;
    private _ruedas: Ruedas[];
    private _extras: Extras;
    private _carroceria: Carroceria;

    public constructor(
        marca: string, modelo: string, ancho: number, largo: number,
        peso: number, color: string, ruedas: Ruedas [], extras: Extras,
        carroceria: Carroceria){

        this._marca = marca;
        this._modelo = modelo;
        this._ancho = ancho;
        this._largo = largo;
        this._peso = peso;
        this._color = color;
        this._ruedas = ruedas;
        this._extras = extras;
        this._carroceria = carroceria;
        }
        public get marca(): string {
            return this._marca;
        }
        public set marca(value: string) {
            this._marca = value;
        }
        public get modelo(): string {
            return this._modelo;
        }
        public set modelo(value: string) {
            this._modelo = value;
        }
        public get ancho(): number {
            return this._ancho;
        }
        public set ancho(value: number) {
            this._ancho = value;
        }
        public get largo(): number {
            return this._largo;
        }
        public set largo(value: number) {
            this._largo = value;
        }
        public get peso(): number {
            return this._peso;
        }
        public set peso(value: number) {
            this._peso = value;
        }
        public get color(): string {
            return this._color;
        }
        public set color(value: string) {
            this._color = value;
        }
        public get ruedas(): Ruedas[] {
            return this._ruedas;
        }
        public set ruedas(value: Ruedas[]) {
            this._ruedas = value;
        }
        public get extras(): Extras {
            return this._extras;
        }
        public set extras(value: Extras) {
            this._extras = value;
        }
        public get carroceria(): Carroceria {
            return this._carroceria;
        }
        public set carroceria(value: Carroceria) {
            this._carroceria = value;
        }

        protected mostrarRuedas(){
            for (let ruedas of this.ruedas){
                ruedas.mostrar()
            }
        }
        
        protected mostrarExtras(){
            this.extras.mostrar()
            
        }
        protected mostrarCarroceria(){
            this.carroceria.mostrar()
        }
    

    public mostrar(){
        console.log("Marca y modelo: " + this.marca + " " + this.modelo);
        console.log("Dimensiones: " + this.ancho + " " + this.largo);
        console.log("Peso: " + this.peso);
        console.log("Color: " + this.color);
        this.mostrarRuedas();
        this.mostrarExtras();
        this.mostrarCarroceria();
    }
}
