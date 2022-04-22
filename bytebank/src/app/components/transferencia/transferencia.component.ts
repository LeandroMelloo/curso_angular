import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  conta: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitado nova transferência');

    if (this.valorValido()) {
      const valorEmitir: Transferencia = {
        valor: this.valor,
        conta: this.conta,
      };

      this.service.adicionar(valorEmitir).subscribe(
        (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (error) => console.error(error)
      );
    }
  }

  private valorValido() {
    const valido = this.valor > 0;

    if (!valido) {
      const erroEmitir = 'Informe um valor válido';
      this.valoresComErro.emit(erroEmitir);
    }
    return valido;
  }

  limparCampos() {
    this.valor = 0;
    this.conta = 0;
  }
}
