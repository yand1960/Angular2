import { Injectable } from "@angular/core";

export class Person {
    id: number;
    firstName: string;
    lastName: string;
    photo: string;

    constructor (id: number, firstName: string, lastName: string, photo: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
    }
}

export class Repository {

    getAll() {
        let people: Array<Person> = [];
        people.push(new Person(1,"Yuri", "Andrienko", "yuri.jpg"));
        people.push(new Person(2,"Vasya", "Pupkin", "vasya.jpg"));
        people.push(new Person(3,"Masha", "Mashkina", "masha.jpg"));
        return people;
    }

}