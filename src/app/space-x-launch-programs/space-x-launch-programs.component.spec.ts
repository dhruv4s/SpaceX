import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchProgramsComponent } from './space-x-launch-programs.component';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http'
import { SpaceXLaunchProgramsService } from './space-x-launch-programs.service'

describe('SpaceXLaunchProgramsComponent', () => {
  let component: SpaceXLaunchProgramsComponent;
  let fixture: ComponentFixture<SpaceXLaunchProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXLaunchProgramsComponent ],
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [SpaceXLaunchProgramsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXLaunchProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should set all elements for html', () => {
    component.ngOnInit()
    expect(component.launchDetailArray.length).toEqual(0);
  });

  it('should set all', () => {
    component.ngOnInit()
    expect(component.yearSelected).toBe('');
    expect(component.launchSelected).toBe('');
    expect(component.launchSelected).toBe('');
  });
  
  it('should set year', () => {
    component.yearSelect({ year: '2006', active: false })
    expect(component.yearSelected).toBe('2006');
  });

  it('should set launch success to true', () => {
    component.launchSelect({ value: 'True', parseValue:'true' ,active: false })
    expect(component.launchSelected).toBe('true');
  });

  it('should set launch success to false', () => {
    component.launchSelect({ value: 'False', parseValue:'false' ,active: false })
    expect(component.launchSelected).toBe('false');
  });

  it('should set land success to true', () => {
    component.landSelect({ value: 'True', parseValue:'true' ,active: false })
    expect(component.landSelected).toBe('true');
  });

  it('should set land success to false', () => {
    component.landSelect({ value: 'False', parseValue:'false' ,active: false })
    expect(component.landSelected).toBe('false');
  });
  

});
