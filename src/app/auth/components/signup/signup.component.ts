import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { registerAction } from '../../store/action';
import { ActionType } from '../../store/actionType';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    console.log('initializeForm');
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form?.value , this.form?.valid);
    this.store.dispatch(registerAction(this.form.value));
  }
}
