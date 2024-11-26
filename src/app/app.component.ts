import { Component } from '@angular/core';
import { CepService } from './cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nome: string = '';
  email: string = '';
  cep: string = '';
  address: any;
  showAlert: boolean = false;

  constructor(private cepService: CepService) {}

  searchCep() {
    if (!this.cep) {
      this.showAlert = true;
      return;
    }
    this.showAlert = false;
    this.cepService.getCepData(this.cep).subscribe(
      (data: any) => {
        this.address = data;
      },
      (error) => {
        console.error('Erro ao buscar o CEP', error);
      }
    );
  }
}