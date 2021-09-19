type Tipo = "lluvia" | "seco"

export class Ruedas {
    private _fabricante: string;
    private _tipo: Tipo;
    
    public constructor(
        fabricante: string, tipo: Tipo){

        this._fabricante = fabricante;
        this._tipo = tipo;
        }

        public get fabricante(): string {
            return this._fabricante;
        }
        public set fabricante(value: string) {
            this._fabricante = value;
        }

        public get tipo(): Tipo {
            return this._tipo;
        }
        public set tipo(value: Tipo) {
            this._tipo = value;
        }
    public mostrar(){
        console.log("Marca: " + this.fabricante + "Tipo" + this.tipo);
    }
    
}