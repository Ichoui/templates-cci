import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cci-template5',
  templateUrl: './template5.component.html',
  styleUrls: ['./template5.component.scss']
})
export class Template5Component implements OnInit {

  title = this.route.snapshot.data['title']

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
