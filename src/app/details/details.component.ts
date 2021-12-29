import { Component, OnInit } from '@angular/core';
import { Statment } from '../models/statment';
import { ExtractDataService } from '../services/extract-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  profileData: Statment = this.dataService.getPersonalData()
  constructor(private dataService:ExtractDataService) { }

  ngOnInit(): void {
  }

}
