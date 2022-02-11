import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

//   transform(value:any): any {
//     let today:Date = new Date();
//     let dateDifference = today.getTime() - value.getTime();
//     dateDifference /= 1000;
//     dateDifference /= (3600);
//     dateDifference /=24;

//     return Math.ceil(dateDifference)-1;
//   }
// }

  transform(value: any): number {
    let today:Date = new Date (); 
    let todayWIthNoTime:any = new Date (today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWIthNoTime)
    const secondsInDay = 86400; 
    
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >=1 && value >todayWIthNoTime){
      return dateCounter;
    }else{
        return 0;
      } 
    }
  }
