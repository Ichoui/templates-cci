import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';
import html2canvas from 'html2canvas';
import { FormBuilder } from '@angular/forms';

export enum Template1Background {
  CENTER_WHITE = 'center-white',
  CENTER_YELLOW = 'center-yellow',
  SIDE_WHITE = 'side-white',
  SIDE_YELLOW = 'side-yellow',
}

@Component({
  selector: 'cci-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss'],
})
export class Template1Component implements OnInit {
  Template1Background = Template1Background;
  title = this.route.snapshot.data['title'];

  sizeName = 50;
  sizeKeyword = 30;
  sizeText = 30;

  templateGroup = this.fb.group({
    modele: [false],
    variante: [Template1Background.CENTER_WHITE],
    name: ['NOM'],
    keyword: ['Mot Clé'],
    text: ['Votre texte ...'],
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.templateGroup.controls['modele'].valueChanges.subscribe((e) => {
      if (this.templateGroup.value.modele) {
        this.templateGroup.controls['variante'].setValue(this.Template1Background.CENTER_WHITE);
      } else {
        this.templateGroup.controls['variante'].setValue(this.Template1Background.SIDE_WHITE);
      }
    });
  }

  materSliderInput(event: MatSliderChange, fromSlider: string) {
    fromSlider === 'text' ? (this.sizeText = event.value) : '';
    fromSlider === 'keyword' ? (this.sizeKeyword = event.value) : '';
    fromSlider === 'number' ? (this.sizeName = event.value) : '';
  }

  download() {
    html2canvas(document.querySelector('#generated-bloc')).then((canvas) => {
      canvas.toBlob(function (blob) {
        let url = URL.createObjectURL(blob);
        downloadLink.setAttribute('href', url);
        downloadLink.click();
      });
      let downloadLink = document.createElement('a');
      downloadLink.setAttribute('download', 'template-chiffre-cle.png');
      downloadLink.click();
    });
  }
}
