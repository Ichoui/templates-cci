import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import html2canvas from 'html2canvas';

export enum Template2Background {
  IMAGE_PURPLE = 'image-purple',
  IMAGE_YELLOW = 'image-yellow',
  BRUT_YELLOW = 'brut-yellow',
  BRUT_PURPLE = 'brut-purple',
  BRUT_WHITE = 'brut-white',
}

@Component({
  selector: 'cci-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss'],
})
export class Template2Component implements OnInit {
  title = this.route.snapshot.data['title'];
  sizeNumber = 100;
  sizeKeyword = 30;
  sizeText = 30;
  Template2Background = Template2Background;

  templateGroup = this.fb.group({
    image: [false],
    color: [Template2Background.BRUT_PURPLE],
    number: ['50%'],
    keyword: ['Mot Clé'],
    text: ['Votre texte ...'],
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.templateGroup.controls['image'].valueChanges.subscribe((e) => {
      if (this.templateGroup.value.image) {
        this.templateGroup.controls['color'].setValue(this.Template2Background.BRUT_PURPLE);
      } else {
        this.templateGroup.controls['color'].setValue(this.Template2Background.IMAGE_PURPLE);
      }
    });
  }

  materSliderInput(event: MatSliderChange, fromSlider: string) {
    fromSlider === 'text' ? (this.sizeText = event.value) : '';
    fromSlider === 'keyword' ? (this.sizeKeyword = event.value) : '';
    fromSlider === 'number' ? (this.sizeNumber = event.value) : '';
  }

  download() {
    html2canvas(document.querySelector('#generated-bloc')).then((canvas) => {
      let t = document.body.appendChild(canvas).setAttribute('id', 'canvas');
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
