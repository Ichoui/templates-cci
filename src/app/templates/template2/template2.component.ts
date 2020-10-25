import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cci-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {
  title = this.route.snapshot.data['title']

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
