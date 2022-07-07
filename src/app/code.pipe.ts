import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    switch (value) {
      case 1||2||3:
        return "../../../assets/cloud-sun-solid.svg"
      case 80||81||82:
        return "../../../assets/cloud-showers-heavy-solid.svg"
      case 45||48:
        return "../../../assets/smog-solid.svg"
      default:0
      return "../../../assets/sun-solid.svg"
  
    }
  }

}
