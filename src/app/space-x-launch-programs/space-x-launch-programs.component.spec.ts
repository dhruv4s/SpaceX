import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchProgramsComponent } from './space-x-launch-programs.component';

describe('SpaceXLaunchProgramsComponent', () => {
  let component: SpaceXLaunchProgramsComponent;
  let fixture: ComponentFixture<SpaceXLaunchProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXLaunchProgramsComponent ]
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
});
