import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttempComponent } from './posttemp.component';

describe('PosttempComponent', () => {
  let component: PosttempComponent;
  let fixture: ComponentFixture<PosttempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosttempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
