import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../services/kitten.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss']
})
export class KittenComponent {

  @Input() kitten!: Kitten;

  constructor(private kittenService: KittenService, private router: Router){}

  onClick(){
    let kitten = this.kitten
    kitten.isAdopted = true
    this.kittenService.adoptKitten(kitten)
  }

}
