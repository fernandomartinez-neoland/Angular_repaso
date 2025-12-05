import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConectService } from '../conect.service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {

  constructor(private conectService: ConectService) {

  }
  email = signal('');
  password = signal('');

  emailChange($event: any) {
    this.email.set($event);
  }

  passwordChange($event: any) {
    this.password.set($event);
  }

  onSubmit() {
    this.conectService.getPostDirect(this.email(), this.password()).then((res) => {
      console.log(res);
    })
  }
}
