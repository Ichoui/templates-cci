import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cci-template6',
  templateUrl: './template6.component.html',
  styleUrls: ['./template6.component.scss'],
})
export class Template6Component implements OnInit {
  title = this.route.snapshot.data['title'];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
}
