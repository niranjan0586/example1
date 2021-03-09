import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class Features implements OnInit {

  @Input() features:any = []

  ngOnInit(){}
}
