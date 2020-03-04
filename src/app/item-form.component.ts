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
        var d = performance.now()//performance stamp
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}