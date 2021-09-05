import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-famprod',
  templateUrl: './show-famprod.component.html',
  styleUrls: ['./show-famprod.component.css']
})
export class ShowFamprodComponent implements OnInit {

  constructor(private service: SharedService) { }
  FamproduitList:any=[];

  ngOnInit(): void {
    this.refreshfamprodlist();
  }
  refreshfamprodlist(){
    this.service.getfamprodlist().subscribe(data=>{
      this.FamproduitList=data;
    });
  }

}
