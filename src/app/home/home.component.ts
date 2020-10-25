import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface TemplateModel {
  class: string;
  router: string;
  title: string;
}

@Component({
  selector: 'cci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  template: TemplateModel[] = [
    { class: 'photo', router: 'photo', title: 'Template Photo' },
    { class: 'chiffre-cle', router: 'chiffre-cle', title: 'Chiffre-Clé' },
    { class: 'agenda', router: 'agenda', title: 'Template Agenda' },
    { class: 'filieres', router: 'filieres', title: 'Template Filières' },
    { class: 'event', router: 'evenement', title: 'Template Evènement' },
    { class: 'actu', router: 'actualite', title: 'Template Actualités' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routage(value) {
    this.router.navigate([value]);
  }
}
