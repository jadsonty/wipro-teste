import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-teste';

  headers = ["ID", "Idade", "Nome", "Posicao", "Clube"];

  rows = [
    {
      "ID" : "1",
      "Idade" : "18",
      "Nome" : "Jorge",
      "Posicao" : "Atacante",
      "Clube" : "Barcelona"
     },
     {
      "ID" : "2",
      "Idade" : "23",
      "Nome" : "Roberto",
      "Posicao" : "Atacante",
      "Clube" : "Real Madrid"
     },
     {
      "ID" : "3",
      "Idade" : "32",
      "Nome" : "Junior",
      "Posicao" : "Atacante",
      "Clube" : "Valencia"
     },
     {
      "ID" : "4",
      "Idade" : "27",
      "Nome" : "Rodriguinho",
      "Posicao" : "Atacante",
      "Clube" : "Athletic Bilbao"
     },
     {
      "ID" : "5",
      "Idade" : "32",
      "Nome" : "Jair",
      "Posicao" : "Atacante",
      "Clube" : "Real Sociedad"
     }
]
}
