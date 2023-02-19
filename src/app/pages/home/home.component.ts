import { Component } from '@angular/core';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  flexDirectionColumn:boolean = false

  constructor(private breakpointService: BreakpointObserver){

  }
  closeConversor() {
    // this.breakpointService.observe(Breakpoints.Small).subscribe((result)=> {

    //   this.flexDirection = ''
    //   if(result.matches){
    //     this.flexDirection = 'column'
    //   }
    // })

    this.breakpointService.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((result)=> {

      // this.flexDirectionColumn = false;
      if(result.breakpoints[Breakpoints.Small]){
        this.flexDirectionColumn = true;
      }

      if(result.breakpoints[Breakpoints.XSmall]){
        this.flexDirectionColumn = true;
      }
    })
  }
}
