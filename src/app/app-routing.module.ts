import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Template1Component } from './home/templates/template1/template1.component';
import { Template2Component } from './home/templates/template2/template2.component';
import { Template3Component } from './home/templates/template3/template3.component';
import { Template4Component } from './home/templates/template4/template4.component';
import { Template5Component } from './home/templates/template5/template5.component';
import { Template6Component } from './home/templates/template6/template6.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'photo',
    component: Template1Component,
    data: {
      title: 'Photos avec texte éditable'
    }
  },
  {
    path: 'chiffre-cle',
    component: Template2Component,
    data: {
      title: 'Chiffre clé',
      titleBis: 'Chiffre clé & photo'
    }
  },
  {
    path: 'agenda',
    component: Template3Component,
    data: {
      title: 'Agenda'
    }
  },
  {
    path: 'filieres',
    component: Template4Component,
    data: {
      title: 'Fillières'
    }
  },
  {
    path: 'evenement',
    component: Template5Component,
    data: {
      title: 'Affiche / Evènement'
    }
  },
  {
    path: 'actualite',
    component: Template6Component,
    data: {
      title: 'Actualité'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
