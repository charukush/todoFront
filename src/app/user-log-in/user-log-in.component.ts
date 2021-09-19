import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss']
})
export class UserLogInComponent implements OnInit {
  userId = new FormControl('');

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async userCheck(){
    console.log(`userId from form=${this.userId.value}`)
    const user = await this.service.getUser(this.userId.value);
    if (user['resp']['Item']) {
      this.router.navigate(['/myAccount', {userId: this.userId.value}]);
    } else {
      console.log(`User ${this.userId.value} does not exist`);
    }
    
  }


}
