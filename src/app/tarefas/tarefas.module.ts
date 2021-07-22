import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService,
         TarefaConcluidaDirective
       } from './shared';

import { ListarTarefaComponent } from './listar';
import { EditarTarefaComponent } from './editar';
import { CadastrarTarefaComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
