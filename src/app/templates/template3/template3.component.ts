import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import html2canvas from 'html2canvas';

export enum Template3Background {
  IMAGE_PURPLE = 'image-purple',
  IMAGE_YELLOW = 'image-yellow',
}

@Component({
  selector: 'cci-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss'],
})
export class Template3Component implements OnInit {
  title = this.route.snapshot.data['title'];
  sizeDays = 100;
  sizeMonth = 100;
  sizeYear = 100;
  sizeEvent = 100;
  sizePlace = 100;

  sizeKeyword = 30;
  sizeText = 30;
  Template3Background = Template3Background;

  templateGroup = this.fb.group({
    modele: [false],
    variante: [Template3Background.IMAGE_PURPLE],
    startDay: ['05'],
    endDay: ['10'],
    month: ['Décembre'],
    year: ['2020'],
    event: ['Evènement'],
    place: ['Toulouse'],
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {}

  materSliderInput(event: MatSliderChange, fromSlider: string) {
    fromSlider === 'text' ? (this.sizeText = event.value) : '';
    fromSlider === 'keyword' ? (this.sizeKeyword = event.value) : '';
    fromSlider === 'month' ? (this.sizeMonth = event.value) : '';
    fromSlider === 'year' ? (this.sizeYear = event.value) : '';
    fromSlider === 'days' ? (this.sizeDays = event.value) : '';
    fromSlider === 'event' ? (this.sizeEvent = event.value) : '';
    fromSlider === 'place' ? (this.sizePlace = event.value) : '';
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
