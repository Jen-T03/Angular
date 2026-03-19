import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],       // <-- necesario para usar [(ngModel)]
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Propiedades que se enlazan con el HTML (Two-way binding con ngModel)
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private authService: AuthService) {}

  login() {
    const user = this.authService.login(this.email, this.password);
    if (user) {
      this.mensaje = `¡Login exitoso! Bienvenido, ${user.nombre}.`;
    } else {
      this.mensaje = 'Email o contraseña incorrectos.';
    }
  }
  goToHome() {
    // Navega a /home usando el Router (programmatic navigation)
  }
}