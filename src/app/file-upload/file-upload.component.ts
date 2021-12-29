import { Statment } from '../models/statment';
import { Component, OnInit } from '@angular/core';
//import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

loading: boolean = false; 
data:FormData=new FormData
statment:Statment = new Statment()
error:boolean = false
file:string=" "
filetoupload!:File

constructor(private fileUploadService: FileUploadService, private router: Router) { }

ngOnInit(): void {
}

onChange(event:Event) {
    var file = event.target as HTMLInputElement
    this.filetoupload = (file.files as FileList)[0]
    this.file=this.filetoupload.name
}

onUpload() {
    if (this.file.split(".").pop() == "csv" || this.file.split(".").pop() == "pdf") {
      this.error = false
      this.fileUploadService.upload(this.filetoupload).subscribe(
        (data: any) => {
            this.statment = data as Statment
            console.log(data)
            this.loading = false;
            localStorage.setItem('response', JSON.stringify(this.statment));
            this.router.navigate(['bar-chart']);
        }
      );
    }
    else{
      this.error = true
      console.log(this.file.split(".").pop())
    }
  }
}