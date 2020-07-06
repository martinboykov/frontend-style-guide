import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrismService } from 'src/app/core/prism.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit, AfterViewInit {
  constructor(private prismService: PrismService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {}
}
