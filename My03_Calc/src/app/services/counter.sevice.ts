import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: "root"}
)
export class CounterService {
    value = 0;

    inc(): number {
        this.value += 1;
        return this.value;
    }
}