import { Component, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit{

  kittens!: Kitten[]

  constructor(private kittenService: KittenService){}

  ngOnInit(): void {
    this.kittens = this.kittenService.getAllKitten()
  }

}
