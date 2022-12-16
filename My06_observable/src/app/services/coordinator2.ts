import {Subject} from 'rxjs';

export class Coordinator2 {
   
    static idChanged = new Subject<number>();
    
    static setCurrentPersonId(id: number) {
        // При вызове метода next проиcходит pushing 
        // измененений всем подписчикам на Subject 
        // (в данном случае, Subject - idChanged)
        this.idChanged.next(id);
    }
}