import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  user = new User(1, '', '', 0, 0);
  showMessage = false;
  message = '';

  constructor(
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    this.authenticationService.authenticateUser(this.user.username, this.user.password).subscribe(res => {
      if (res !== false) {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('user', res);
      } else {
        this.showMessage = true;
        this.message = 'Username or password invalid';
      }
    });
  }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

}
