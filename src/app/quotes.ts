export class Quotes {
    showInfo:boolean;
    constructor(public name:string, public quote:string, public author:string, public datePosted:Date, public likes:number, public dislikes:number) {
        this.showInfo=false
    }
}
