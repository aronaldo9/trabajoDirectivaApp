import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre = '';
  apellido = '';

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = `${this.nombre} ${this.apellido} registrado con éxito`;
  }
}
