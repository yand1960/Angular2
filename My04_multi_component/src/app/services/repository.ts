export class Person {
    id: number;
    firstName: string;
    lastName: string;
    salary: Number;
    photo: string;
    constructor(id: number,
        firstName: string,
        lastName: string,
        salary: Number,
        photo: string){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.salary = salary
            this.photo = photo;
        }
}

export class Repository{
    public getAll() {
        return [
        new Person(1,"Anna","Anina",77777,"april-meyer.jpg"),
        new Person(2,"Boris","Borisov",300000,"david-alexander.jpg"),
        new Person(3,"Mark","Markin",120000,"mark-hanson.jpg")
        ];
    }
    //constructor Repository(){
        
    //}
}