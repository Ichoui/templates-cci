import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cci-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

  title = this.route.snapshot.data['title']

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
