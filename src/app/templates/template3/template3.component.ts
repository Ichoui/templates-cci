import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cci-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component implements OnInit {

  title = this.route.snapshot.data['title']

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
