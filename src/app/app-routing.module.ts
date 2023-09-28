import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';

const routes: Routes = [
  {path: "", component: ListKittenComponent},
  {path: "kittenCollection", component: ListKittenComponent},
  {path: "myKittenCollection", component: UserKittenComponent},
  //{path: "createKitten", component: CreateKittenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
