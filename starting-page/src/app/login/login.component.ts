import { Component } from '@angular/core';
import { skapi } from '../../main';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  alert(msg: string) {
    window.alert(msg);
  }

  onSubmit(event: Event) {
    skapi.login(event as SubmitEvent).then(()=> window.location.href = '/welcome').catch(err => this.alert(err.message));
  }
}
