import { Component } from '@angular/core';
import { skapi } from '../../main'; // Ensure this path is correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  welcomeMessage: string = '';

  constructor(private router: Router) {}

  alert(msg: string) {
    window.alert(msg);
  }

  ngOnInit(): void {
    this.getProfile();
  }

  private getProfile() {
    skapi.getProfile()
      .then(profile => {
        if (!profile) {
          this.router.navigate(['/login']);
        } else {
          this.welcomeMessage = `Welcome, ${profile.email}.`;
          console.log(profile);
        }
      })
      .catch(err => {
        this.alert(err.message);
      });
  }
}
