import { Component, Input, inject } from "@angular/core";
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
    selector:'app-address-group',
    standalone:true,
    imports:[ReactiveFormsModule, AddressGroupComponent,NzFormModule,NzInputModule],
    viewProviders: [
        {
          provide: ControlContainer,
          useFactory: () => inject(ControlContainer, {skipSelf: true})
        }
      ],
    template:`<h2>{{label}}</h2>
    <!-- Address Section -->
    <div nz-row [formGroupName]="controlKey" style="margin-bottom: 24px;">
     
      <div nz-col [nzSpan]="24">
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="street" nzRequired>Street</nz-form-label>
          <nz-form-control [nzSm]="14" nzErrorTip="The input is required!" [nzXs]="24">
            <input nz-input formControlName="street" id="street" placeholder="Enter street"/>
          </nz-form-control>
        </nz-form-item>
      </div>
      <div nz-col [nzSpan]="24">
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24"  nzFor="city" nzRequired>City</nz-form-label>
          <nz-form-control [nzSm]="14" nzErrorTip="The input is required!" [nzXs]="24">
            <input nz-input formControlName="city" id="city" placeholder="Enter city"/>
          </nz-form-control>
        </nz-form-item>
      </div>
      <div nz-col [nzSpan]="24">
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="state" nzRequired>State</nz-form-label>
          <nz-form-control [nzSm]="14" nzErrorTip="The input is required!" [nzXs]="24">
            <input nz-input formControlName="state" id="state" placeholder="Enter state"/>
          </nz-form-control>
        </nz-form-item>
      </div>
      <div nz-col [nzSpan]="24">
        <nz-form-item>
          <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="zip" nzRequired>Zip Code</nz-form-label>
          <nz-form-control [nzSm]="14" nzErrorTip="The input is required!" [nzXs]="24">
            <input nz-input formControlName="zip" id="zip" placeholder="Enter zip code"/>
          </nz-form-control>
        </nz-form-item>
      </div>
    </div>`,
 styles: [`
 input.ng-touched.ng-invalid {
   border-color: red;
 }
 
 div.error {
   color: red;
   font-size: 0.8em;
 }
`]
})
export class AddressGroupComponent{

    @Input() controlKey = '';
    @Input() label = '';
    parentContainer = inject(ControlContainer);
  
    get parentFormGroup() {
      return this.parentContainer.control as FormGroup;
    }
 
    ngOnInit() {
      this.parentFormGroup.addControl(this.controlKey, 
        new FormGroup({
            street: new FormControl('',[Validators.required]),
            city: new FormControl('',[Validators.required]),
            state: new FormControl('',[Validators.required]),
            zip: new FormControl('',[Validators.required]),
        }))
    }
    ngOnDestroy() {
      this.parentFormGroup.removeControl(this.controlKey);
    }
}