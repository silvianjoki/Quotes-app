export class Quotes {
    showInfo:boolean;
    
    constructor(public name:string, public title:string, public quote:string, public author:string, public datePosted:Date, public likes:number, public dislikes:number ) {
        this.showInfo=false;
        this.datePosted=new Date ();
        this.likes = 0;
        this.dislikes= 0;
        
    }
}
