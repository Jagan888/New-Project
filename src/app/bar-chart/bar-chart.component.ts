import { Component, OnInit } from '@angular/core';
import { ExtractDataService } from 'src/app/services/extract-data.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  depDates:string[] = this.dataService.getDepositsDates()
  withDates:string[] = this.dataService.getWithdrawsDates()
  sumDep:number[] = this.dataService.getDepositSums()
  sumWith:number[] = this.dataService.getWithdrawsSums()

  particulars : any = Object.keys(this.dataService.getWithdrawalSumsOnTypes())
  credit: any[] = this.dataService.credit()
  parr : any[] = this.dataService.par()
  date : any[] = this.dataService.date()
  dates : any[] = this.dataService.getDates()

  constructor(private dataService:ExtractDataService) {
  }

  public graph = {
    data: [
        { x: this.credit, y: this.parr, type: 'bar', name: 'Deposits', marker: {color: 'red'} },
        { x: this.withDates, y: this.sumWith, type: 'bar', name: 'Withdrawals' },
    ],
    layout: {barmode: 'group', width: 700, height: 450, title: 'Deposits&Withdrawals'}
  };

  public graph1 = {
    data: [
        { x: this.date, y: this.credit, type: 'bar', name: 'Deposits'},      
    ],
    layout: {barmode: 'group', width: 700, height: 450, title: 'Total particulars'}
  };
  
  ngOnInit(): void {
  }
}
