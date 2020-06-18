import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    tuple: [string, number, boolean];
    unusable: void;
    notDefined: undefined;
    nullable: null;

    // Methods
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.address = {
            street: '50 Main st.',
            city: 'Boston',
            state: 'MA'
        };

        this.hasKids = true;
        this.numberArray = [1, 2, 3];
        this.stringArray = ['hello', 'world'];
        this.mixedArray = [true, 123, 'hello'];
        this.tuple = ['apple', 1, true];
        this.unusable = undefined; // Just can assign undefined
        this.notDefined = undefined;
        this.nullable = null;

        console.log(this.addNumbers(2, 3));
    }

    showAge() {
        return this.age;
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
}
