import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(tab: string, role:string): any {
    if(tab=='OpSum' || tab == 'predctions'){
      if(role == 'Admin' || role == 'VP of Operations' || role == 'TV User')
      return true;
    }else if(tab == 'Insights' || tab == 'serDash'){
      if(role == 'Admin' || role == 'Service Technician' || role == 'TV User')
      return true;
    } else if(tab == 'opcSim' && role == 'Admin' || role == 'TV User'){
      return true;
    }
    
  }
}
