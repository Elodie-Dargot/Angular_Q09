import { Injectable } from '@angular/core'
import { Kitten } from '../models/kitten.model'

@Injectable({
    providedIn: 'root'
})

export class KittenService {
    kittens: Kitten[] = [
        {
            name: 'Cat one',
            breed: 'Persan',
            birthday: new Date(),
            picture: 'https://jardinage.lemonde.fr/images/dossiers/2017-04/chat-persan-113628.jpg'
        },
    ];

    getAllKitten(): Kitten[] {
        return this.kittens;
    }

    addKitten(formValue: {name: string, breed: string, birthday: Date, picture: string}){
        const kitten: Kitten = {
            ...formValue
        };
        this.kittens.push(kitten)
    }
}