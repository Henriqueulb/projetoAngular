import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SomaComponent } from './pages/soma';
import { SubtracaoComponent } from './pages/subtracao';
import { MultiplicacaoComponent } from './pages/multiplicacao';
import { DivisaoComponent } from './pages/divisao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SomaComponent, SubtracaoComponent, MultiplicacaoComponent, DivisaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'soma';
}
