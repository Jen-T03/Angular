import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- necesario para usar [(ngModel)]
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
// Propiedades enlazadas con el HTML mediante Two-way Binding [(ngModel)]
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  mensaje: string = '';
  exito: boolean = false; // controla el color del mensaje y si mostrar el botón de login

  // Inyección de dependencias: Router para navegar, AuthService para registrar usuarios
  constructor(private router: Router, private authService: AuthService) {}

  register() {
    // Validación: las contraseñas deben coincidir antes de intentar registrar
    if (this.password !== this.confirmPassword) {
      this.mensaje = 'Las contraseñas no coinciden.';
      this.exito = false;
      return;
    }

    // Se delega el registro al AuthService - retorna true si se registró, false si el email ya existe
    const ok = this.authService.register(this.nombre, this.email, this.password);
    if (ok) {
      this.mensaje = `¡Registro exitoso! Bienvenido, ${this.nombre}.`;
      this.exito = true;
    } else {
      this.mensaje = 'Ese email ya está registrado.';
      this.exito = false;
    }
  }

  // Navega a /login usando el Router (programmatic navigation)
  goToLogin() {
    this.router.navigate(['/login']);
  }
}