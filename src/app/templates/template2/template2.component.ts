import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cci-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {
  title = this.route.snapshot.data['title']

  templateGroup = this.fb.group({
    image: [false],
    number: ['50%'],
    keyword: ['Mot Clé'],
    text: ['Votre texte ...']
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
