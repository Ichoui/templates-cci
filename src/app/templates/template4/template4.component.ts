import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cci-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.scss']
})
export class Template4Component implements OnInit {

  title = this.route.snapshot.data['title']

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
