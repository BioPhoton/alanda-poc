import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {AuthService} from './auth.service';


const myVal = (pattern) => (g: FormGroup): null | ValidationErrors => {
  console.log(g);
  return g.controls.type.value === g.controls.group.value ? null : {
    myVal: {
      error: 'wrong string',
    }
  };
};

@Component({
  selector: 'app-root',
  template: `
      <!--
      <form [formGroup]="form">
            {{form.errors | json}}
            <formly-form [form]="form" [fields]="fgConfig" [model]="user"></formly-form>
            <formly-form [form]="form" [fields]="fg2Config" [model]="user"></formly-form>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
      -->
      <ul>
          <li>
              <a [routerLink]="'home'">Home</a>
          </li>
          <li>
              <a [routerLink]="'step1'">Step1</a>
          </li>
          <li>
              <a [routerLink]="'step2'">Step2</a>
          </li>
      </ul>
              user$ {{auth.user$ | async}}
      <button (click)="login()" *ngIf="(auth.user$ | async) === false">Login</button>
      <button (click)="logout()" *ngIf="(auth.user$ | async)">Logout</button>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
/*
  fgConfig: FormlyFieldConfig[] = [
    {
      key: 'type',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        placeholder: 'Your first name',
      },
      validators: {
        fieldMatch: {
          expression: (control) => {
            const value = control.value;
            return value.type === value.tags
              || (!value.type || !value.tags);
          },
          message: 'Password Not Matching',
          errorPath: 'passwordConfirm'
        },
      },
    },
    {
      key: 'tags',
      type: 'input',
      templateOptions: {},
      hideExpression: '!model.type',
    },
    {
      key: 'prio',
      type: 'select',
      templateOptions: {
        disable: true,
        options: [
          {value: 1, label: 'Option 1'},
          {value: 2, label: 'Option 2'},
          {value: 3, label: 'Option 3'},
          {value: 4, label: 'Option 4'},
        ]
      }
    },
    {
      key: 'dueDate',
      type: 'input',
      templateOptions: {}
    },
    {
      key: 'details',
      type: 'textarea',
      templateOptions: {},
    }
  ];
  fg2Config: FormlyFieldConfig[] = [
    {
      key: 'type2',
      type: 'input',
      templateOptions: {
        disable: true,
        label: 'First Name',
        placeholder: 'Your first name',
      }
    }
  ];

  form: FormGroup = this.fb.group({});

  user = {
    type: '',
    tags: 'Ersterrichtung'
  };
*/
  constructor(private fb: FormBuilder, public auth: AuthService) {

  }

  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
