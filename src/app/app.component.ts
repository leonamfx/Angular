import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExercicioAngular'
  nomes: string [] = ['joão', 'maria', 'josé','pedro','felipe','carlos'];
  
  buscar(valor: string){
    alert(valor)
  }

}
