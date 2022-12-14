import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class CalcService {

    private log(x: number,y: number, operation: CalcOperation ) {
        // To be implemented
        console.log(`Logging ${x}, ${y}, ${operation}`);
    }

    plus(x: number, y: number): number {
        let result = x + y;
        this.log(x,y,CalcOperation.plus);
        return result;
    }

    minus(x: number, y: number): number {
        let result = x - y;
        this.log(x,y,CalcOperation.minus);
        return result;
    }

}

export enum CalcOperation {
    none = 1,
    plus,
    minus
}