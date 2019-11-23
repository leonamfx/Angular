import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExercicioAngular'
  nomes: string [] = ['joão', 'maria', 'josé','pedro','felipe','carlos'];
  nomesFiltro: string[];

  buscar(valor: string){
    this.nomesFiltro = [];

    //método 1
    for (var i = 0; i < this.nomes.length; i++) {
      if(this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
        this.nomesFiltro.push(this.nomes[i]);
      }
    }
    
  }

}
