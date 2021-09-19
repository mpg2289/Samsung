export class Carroceria {
    private _faldon_deportivo: boolean;
    private _espejos_abatibles: boolean;
    private _techo_solar: boolean;
    

    public constructor(
        faldon_deportivo: boolean, espejos_abatibles: boolean,
        techo_solar: boolean){
            this._faldon_deportivo = faldon_deportivo;
            this._espejos_abatibles = espejos_abatibles;
            this._techo_solar = techo_solar;
        }

        public get faldon_deportivo(): boolean {
            return this._faldon_deportivo;
        }
        public set faldon_deportivo(value: boolean) {
            this._faldon_deportivo = value;
        }
        public get espejos_abatibles(): boolean {
            return this._espejos_abatibles;
        }
        public set espejos_abatibles(value: boolean) {
            this._espejos_abatibles = value;
        }
        public get techo_solar(): boolean {
            return this._techo_solar;
        }
        public set techo_solar(value: boolean) {
            this._techo_solar = value;
        }

        public mostrar(){
            console.log("Faldon deportivo" + this.faldon_deportivo + "Espejos abatibles " + this.espejos_abatibles + "Techo solar" +  this.techo_solar);
        }
}