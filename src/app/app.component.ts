import { Component, ViewChild, ElementRef } from '@angular/core';
import { Gift } from './gift.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild ('cardImage')
  cardImage: ElementRef<any>

  public enterData = false;
  public gifts: Gift[] = [];
  public editItemModel = null;

  constructor(){}

  public addItem(): void {
    this.enterData = true;
  }

  public dataSubmit(data: Gift): void {
    this.enterData = false;
    this.gifts.push(data);

    //api request to create item
  }

  public closeForm(): void {
    this.enterData = false;

    if (this.editItemModel){
      this.editItemModel = null;
    }
  }

  public editItem(item: Gift): void {
    this.editItemModel = item;
    this.enterData = true;

    //api request to update by id
  }

  public deleteItem(item: Gift): void {
    let id = item.id;
    this.gifts = this.gifts.filter((gift) => {
      return gift.id != id;
    });

    //api request to delete by id
  }
}
