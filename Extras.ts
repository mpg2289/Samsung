type Pantalla = "12 pulgadas" | "13 pulgadas" | "14 pulgadas"


export class Extras {
    private _asiento_cuero: boolean;
    private _asistente_aparcamiento: boolean;
    private _pantalla: Pantalla;
    

    public constructor(
        asiento_cuero: boolean,
        asistente_aparcamiento: boolean, pantalla: Pantalla){
            this._asiento_cuero = asiento_cuero;
            this._asistente_aparcamiento = asistente_aparcamiento;
            this._pantalla = pantalla;
        }
        public get asiento_cuero(): boolean {
            return this._asiento_cuero;
        }
        public set asiento_cuero(value: boolean) {
            this._asiento_cuero = value;
        } 
        public get asistente_aparcamiento(): boolean {
            return this._asistente_aparcamiento;
        }
        public set asistente_aparcamiento(value: boolean) {
            this._asistente_aparcamiento = value;
        } 
        public get pantalla(): Pantalla {
            return this._pantalla;
        }
        public set pantalla(value: Pantalla) {
            this._pantalla = value;
        }

        public mostrar(){
            console.log("Asistente Aparcamiento " + this.asistente_aparcamiento + "Asiento Cuero " + this.asiento_cuero, "Pantalla " + this.pantalla);
        }
}