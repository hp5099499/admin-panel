import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Chart, { registerables } from 'chart.js/auto'; // Import from 'chart.js/auto' for Chart.js v3
import { CommonservicesService } from '../../services/commonservices.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  data:any;
  dataamount:any[]=[];
  datayear:any[]=[];
  datacolor:any[]=[];
  databorder:any[]=[];
  constructor(private _commonservice:CommonservicesService){


  }
  ngOnInit(){
    this._commonservice.showdata().subscribe(res=>{
      this.data=res;
      if(this.data!=null){
        for(let i=0;i<this.data.length;i++){
          this.datayear.push(this.data[i].year);
          this.dataamount.push(this.data[i].amount);
          this.datacolor.push(this.data[i].color);
          this.databorder.push(this.data[i].border);

        }
      }
      this.showchartdata(this.datayear,this.dataamount,this.datacolor,this.databorder);
    })
 
  }
  showchartdata(datayear:any,dataamount:any,datacolor:any,databorder:any){

    console.log(datayear,dataamount)
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: datayear,
        datasets: [{
          label: 'SALES',
          data: dataamount,
          borderWidth: 1,
          backgroundColor:datacolor,
          borderColor:databorder
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
  }