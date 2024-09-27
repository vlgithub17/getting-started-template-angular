import { Component } from '@angular/core';
import { skapi } from '../../main';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {

  alert(msg: string) {
    window.alert(msg);
  }

  onSubmit(event: Event) {
    skapi.signup(event as SubmitEvent).then(()=> window.location.href = '/login').catch(err => this.alert(err.message));
  }
}
