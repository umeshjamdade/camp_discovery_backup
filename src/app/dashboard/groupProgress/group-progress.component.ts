import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'group-progress',
  templateUrl: './group-progress.component.html',
  styleUrls: ['./group-progress.component.scss']
})

export class GroupProgressComponent implements OnInit {
  id: string;
  route: any;
  public error: any;
  public  data: any;
  constructor(route: ActivatedRoute, private userService: UserService) {
    this.id = route.snapshot.params['group_id'];
    this.route = route;
  }
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClickeds(e:any):void {
    console.log(e);
  }

  public chartHovereds(e:any):void {
    console.log(e);
  }
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let child_id = params['group_id'];
      // let body = {"Username":  'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
      // this.userService.getkidData(body)
      //   .subscribe((data: any) => {
      //       this.data = data;
      //       console.log(" dashboard data", this.data);
      //     },
      //     (error:any) => {
      //       this.error = error;
      //       console.log("Error", this.error);
      //     }
      //   );
    });
  }

}
