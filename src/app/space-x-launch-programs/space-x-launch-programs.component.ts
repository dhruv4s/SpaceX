import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-space-x-launch-programs',
  templateUrl: './space-x-launch-programs.component.html',
  styleUrls: ['./space-x-launch-programs.component.css'],
})
export class SpaceXLaunchProgramsComponent implements OnInit {
  yearSelected: any = '';
  launchSelected: any = '';
  landSelected: any = '';
  dataLimit: any = 100;

  yearArray = [
    { year: '2006', active: false },
    { year: '2007', active: false },
    { year: '2008', active: false },
    { year: '2009', active: false },
    { year: '2010', active: false },
    { year: '2011', active: false },
    { year: '2012', active: false },
    { year: '2013', active: false },
    { year: '2014', active: false },
    { year: '2015', active: false },
    { year: '2016', active: false },
    { year: '2017', active: false },
    { year: '2018', active: false },
    { year: '2019', active: false },
    { year: '2020', active: false },
  ];

  launchArray = [
    { value: 'True', parseValue:'true' ,active: false },
    { value: 'False', parseValue:'false' ,active: false },
  ];

  landArray = [
    { value: 'True', parseValue:'true' ,active: false },
    { value: 'False', parseValue:'false',active: false },
  ];

  launchDetailArray: any;

  constructor(private http: HttpClient, private location: Location) {}

  ngOnInit(): void {
    this.http
      .get(`https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}`)
      .subscribe((response) => {
        this.launchDetailArray = response;
      });
  }

  yearSelect(item: any) {
    this.yearSelected = '';
    if (!item.active) {
      this.yearSelected = item.year;
      this.yearArray.forEach((element) => {
        element.active = false;
      });
    }
    let index = this.yearArray.indexOf(item);
    item.active = !item.active;
    this.yearArray.splice(index, 1, item);
    this.updateData();
  }

  launchSelect(item: any) {
    this.launchSelected = '';
    if (!item.active) {
      this.launchSelected = item.parseValue;
      this.launchArray.forEach((element) => {
        element.active = false;
      });
    }
    let index = this.launchArray.indexOf(item);
    item.active = !item.active;
    this.launchArray.splice(index, 1, item);
    this.updateData();
  }

  landSelect(item: any) {
    this.landSelected = '';
    if (!item.active) {
      this.landSelected = item.parseValue;
      this.landArray.forEach((element) => {
        element.active = false;
      });
    }
    let index = this.landArray.indexOf(item);
    item.active = !item.active;
    this.landArray.splice(index, 1, item);
    this.updateData();
  }

  updateData() {
    if (
      this.yearSelected != '' &&
      this.launchSelected != '' &&
      this.landSelected != ''
    ) {
      this.location.go(
        `launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}&land_success=${this.landSelected}&launch_year=${this.yearSelected}`
      );
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}&land_success=${this.landSelected}&launch_year=${this.yearSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected != '' &&
      this.launchSelected != '' &&
      this.landSelected == ''
    ) {
      this.location.go(
        `launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}&launch_year=${this.yearSelected}`
      );
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}&launch_year=${this.yearSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected != '' &&
      this.launchSelected == '' &&
      this.landSelected != ''
    ) {
      this.location.go(
        `launches?limit=${this.dataLimit}&land_success=${this.landSelected}&launch_year=${this.yearSelected}`
      );
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&land_success=${this.landSelected}&launch_year=${this.yearSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected == '' &&
      this.launchSelected != '' &&
      this.landSelected != ''
    ) {
      this.location.go(
        `launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}&land_success=${this.landSelected}`
      );
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}&land_success=${this.landSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected != '' &&
      this.launchSelected == '' &&
      this.landSelected == ''
    ) {
      this.location.go(`launches?limit=${this.dataLimit}&launch_year=${this.yearSelected}`);
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&launch_year=${this.yearSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected == '' &&
      this.launchSelected != '' &&
      this.landSelected == ''
    ) {
      this.location.go(
        `launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}`
      );
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&launch_success=${this.launchSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected == '' &&
      this.launchSelected == '' &&
      this.landSelected != ''
    ) {
      this.location.go(`launches?limit=${this.dataLimit}&land_success=${this.landSelected}`);
      this.http
        .get(
          `https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}&land_success=${this.landSelected}`
        )
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    } else if (
      this.yearSelected == '' &&
      this.launchSelected == '' &&
      this.landSelected == ''
    ) {
      this.location.go(``);
      this.http
        .get('https://api.spaceXdata.com/v3/launches?limit=${this.dataLimit}')
        .subscribe((response) => {
          this.launchDetailArray = response;
        });
    }
  }
}
