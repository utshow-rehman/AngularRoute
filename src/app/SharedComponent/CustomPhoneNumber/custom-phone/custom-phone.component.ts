import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-custom-phone',
  templateUrl: './custom-phone.component.html',
  styleUrls: ['./custom-phone.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule, NzFormModule,NzInputModule,FormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomPhoneComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomPhoneComponent),
      multi: true
    }
  ]
})
export class CustomPhoneComponent implements ControlValueAccessor, Validator  {



  @Input() label:string = "";
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  phoneNumber: string = '';
  state:string = '';
  onChange = (phoneNumber: string) => {};
  phoneError:string = "";
  
  private onTouched = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(obj: string): void {
    this.phoneNumber = obj || '';
        console.log(obj," writeValue");
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
       console.log(fn," OnChangeFn");
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    console.log(fn," onTouched");
  }
  setDisabledState?(isDisabled: boolean): void {
       console.log(isDisabled," disable");   
  }

  addHighPhen(value:string){
        
         if(value.length>4){
         if(value[4] !== "-"){
              let format = "";
              for(let i=0;i<value.length;i++){
                     if(i===4){
                         format+="-";
                     }
                     format+=value[i];
              }
              value = format;
         }
    }
       this.phoneNumber = value;
  }

  removeExtraLength(phoneNumber:any): void {
     
    
    if (phoneNumber.length> 12) {
          phoneNumber = phoneNumber.substring(0, 12);
    }
   
    this.phoneNumber = phoneNumber;
    
  }

  onBlur($event: any) {
    console.log("Onblur");
    let value = $event.target.value;
    if(value.length !== 12){
      this.phoneError = "Number Should be 11 digit";
      this.phoneNumber = this.phoneNumber.substring(0, 12); 
    }
    else{
      this.phoneError = "";
    }
    
    
     this.onTouched();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let value: string = control.value;
    //  this.addHighPhen(value);
    //  this.removeExtraLength(this.phoneNumber);
     console.log(this.phoneNumber," ddd ",value);
     //this.phoneInput.nativeElement.value = this.phoneNumber;
    if(value.length>4){
          value = value.substring(0, 4) +  value.substring(5); 
    }
    if (!value || /^\d{11}$/.test(value)) {
        return null;  
    } else {
        return { invalidFormat: true };  
    }
  }
 

      
}
