import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core'
import { Gift } from './gift.model'

@Component({
    selector: 'item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent implements OnInit{
    @Output() submit = new EventEmitter<Gift>();
    @Output() close = new EventEmitter<void>();
    @Output() editItemModelChange = new EventEmitter<Gift>();
    @Input() editItemModel: Gift = null;


    public name: string = '';
    public quantity: number = 1;
    public url: string = '';
    public price: number = 0;
    public imageUrl: string = '';

    constructor(){
        this.loadImage = this.loadImage.bind(this);
    }

    public ngOnInit() {
        if (this.editItemModel){
            this.name = this.editItemModel.name;
            this.quantity = this.editItemModel.quantity;
            this.url = this.editItemModel.url;
            this.price = this.editItemModel.price;
            this.imageUrl = this.editItemModel.imageUrl;
        }
    }

    public submitData(): void {
        if (this.editItemModel === null){
            this.submit.emit({
                "name": this.name,
                "quantity": this.quantity,
                "url": this.url,
                "price": this.price,
                "imageUrl": this.imageUrl,
                "id": this.generateId()
            });
        }else {
            this.editItemModel.name = this.name;
            this.editItemModel.quantity = this.quantity;
            this.editItemModel.url = this.url;
            this.editItemModel.price = this.price;
            this.editItemModel.imageUrl = this.imageUrl;

            this.editItemModelChange.emit(this.editItemModel);
            this.close.emit();
        }
    }

    public closeForm(): void {
        this.close.emit();
    }

    public removeImage(): void {
        this.imageUrl = '';
    }

    public errorHandler(event) {
        this.imageUrl = "https://cdn.browshot.com/static/images/not-found.png";
     }

    private loadImage(image: any): void {
        this.imageUrl = image.target.result;
    }

    private generateId(): any {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
}