import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'transformId'
})
export class TransformIdPipe implements PipeTransform {

  constructor(public userService: UserService) {}

  transform(value: any, args?: any): any {
    let username = '';
    this.userService.getAllUsers().subscribe(res => {
      res.forEach((user) => {
        console.log(user);
        if (user.user_id === value) {
          username = user.user_name;
        }
      });
    });
    return username;
  }
}
