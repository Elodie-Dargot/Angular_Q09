import { Component, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {
  adoptedKittens!: Kitten[]

  constructor(private kittenService: KittenService){}

  ngOnInit(): void {
    this.adoptedKittens = this.kittenService.getAdoptedKitten()
  }
}
