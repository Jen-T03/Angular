import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // 👈 FALTABA ESTO
  mensaje: string = '';

  constructor(private router: Router) {}

  register() {
    // Validación campos vacíos
    if (!this.nombre || !this.email || !this.password || !this.confirmPassword) {
      this.mensaje = 'Por favor completa todos los campos.';
      return;
    }

    // 👇 VALIDACIÓN CLAVE
    if (this.password !== this.confirmPassword) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    const usuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.mensaje = 'Registro exitoso';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}