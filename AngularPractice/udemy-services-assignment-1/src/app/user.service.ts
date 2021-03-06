import { EventEmitter, Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    userSetToActive = new EventEmitter<number>();
    userSetToInactive = new EventEmitter<number>();

    constructor(private countService : CountService) {}
  
    setToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      
      this.countService.doCount();
    }
  
    setToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);

      this.countService.doCount();
    }
    
}