import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
  ) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('matheus.silva@gmail.com', [Validators.required]),
    password: new FormControl('123456', Validators.required)
  })

  public login(): void {
    if(this.form.valid) {
      this.apiService.post<User>('sessions', this.form.value)
      .then(data => {this.authService.login(data)})
      .catch(response => alert(`Atenção', ${response.error.error}`))
    } else {
      alert('Atenção, Preencha o formulário antes de continuar')
    }
  }

}
