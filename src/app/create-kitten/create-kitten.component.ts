import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { KittenService } from '../services/kitten.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  kittenForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
              private kittenService: KittenService){}

  ngOnInit(): void {
      this.kittenForm = this.formBuilder.group({
        name: [null, [Validators.required]],
        breed: [null, [Validators.required]],
        birthday: [null, [Validators.required]],
        picture: [null]
      })
    }


  onSubmit(){
    this.kittenService.addKitten(this.kittenForm.value)
    console.log(this.kittenForm.value)
  }
}
