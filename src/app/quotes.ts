export class Quotes {
    showInfo:boolean;
    public datePosted:Date; public likes:number; public dislikes:number;
    constructor(public name:string, public title:string, public quote:string, public author:string,) {
        this.showInfo=false;
        this.datePosted=new Date ();
        this.likes = 0;
        this.dislikes= 0;
    }
}
