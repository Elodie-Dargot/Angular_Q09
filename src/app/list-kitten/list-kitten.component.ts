import { Component, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit{

  isHover: boolean = false
  kittens!: Kitten[]
  adoptedKittens!: Kitten[]

  constructor(private kittenService: KittenService){}

  ngOnInit(): void {
    this.kittens = this.kittenService.getKittens()
    this.adoptedKittens = this.kittenService.getAdoptedKitten()
  }

  adoptKitten(kitten: Kitten) {
    this.kittenService.adoptKitten(kitten);
    this.kittenService.getAdoptedKitten().push(kitten);
    const index = this.kittens.indexOf(kitten);
    if (index > -1){
      this.kittens.splice(index, 1);
    }
  }

}
