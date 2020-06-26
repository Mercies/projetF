import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  OrganizationDetail;
  displayedColumns: string[] = ["name"];
  dataSourceBranch;
  dataSourceLevel;
  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("data", data);
    this.OrganizationDetail = data;

    this.dataSourceBranch = data.branchs;
    this.dataSourceLevel = data.levels;
   
    }

  ngOnInit() {}
  cancel(){
    this.dialogRef.close("laaaaaaaaaaah yr7m lik lwalidin");
  }

 
}
