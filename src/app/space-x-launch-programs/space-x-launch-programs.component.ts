import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs.service';

@Component({
  selector: 'app-space-x-launch-programs',
  templateUrl: './space-x-launch-programs.component.html',
  styleUrls: ['./space-x-launch-programs.component.css'],
})
export class SpaceXLaunchProgramsComponent implements OnInit {
  yearSelected: any = '';
  launchSelected: any = '';
  landSelected: any = '';
  dataLimit: any = 10;

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
    { value: 'True', parseValue: 'true', active: false },
    { value: 'False', parseValue: 'false', active: false },
  ];

  landArray = [
    { value: 'True', parseValue: 'true', active: false },
    { value: 'False', parseValue: 'false', active: false },
  ];

  launchDetailArray: any=[];

  constructor(
    private location: Location,
    private spacexService: SpaceXLaunchProgramsService
  ) {}

  ngOnInit(): void {
    this.updateData();
  }

  yearSelect(item: any) {
    this.dataLimit=40;
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
    this.updateLocation();
  }

  launchSelect(item: any) {
    this.dataLimit=40;
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
    this.updateLocation();
  }

  landSelect(item: any) {
    this.dataLimit=40;
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
    this.updateLocation();
  }

  updateLocation() {
    let location = `launches?limit=${this.dataLimit}`;
    if (this.launchSelected != '') {
      location = location + `&launch_success=${this.launchSelected}`;
    }
    if (this.landSelected != '') {
      location = location + `&land_success=${this.landSelected}`;
    }
    if (this.yearSelected != '') {
      location = location + `&launch_year=${this.yearSelected}`;
    }
    this.location.go(location);
  }
  
  updateData() {
    this.spacexService
      .getAllPrograms(
        this.dataLimit,
        this.yearSelected,
        this.launchSelected,
        this.landSelected
      )
      .subscribe((response) => {
        this.launchDetailArray = response;
      });
  }
}
