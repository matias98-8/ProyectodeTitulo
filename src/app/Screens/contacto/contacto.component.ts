
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.less']
})
export class ContactoComponent implements OnInit {

  title = 'envioCorreos';

  

  form: FormGroup;

  constructor(
    private httpclient:HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }


  private buildForm() {  
  this.form = this.formBuilder.group({

    name: ['', [ Validators.pattern(/^[a-zA-Z ]+$/),Validators.required]],
    contacto: ['', [Validators.required, Validators.pattern(/^-?[0-9][^\.]*$/)]], 
    email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
    text: ['', [Validators.required, Validators.maxLength(10000), Validators.minLength(50)]],
  });

    
    84939828
  }
  
  get emailField() {
    return this.form.get('email');
  }

  get emailFieldIsValid() {
    return this.emailField.touched && this.emailField.valid;
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }
 //name
  get nameField() {
    return this.form.get('name');
  }

  get nameFieldIsValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get nameFieldIsInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }
  //contacto
  get contactoField() {
    return this.form.get('contacto');
  }

  get contactoFieldIsValid() {
    return this.contactoField.touched && this.contactoField.valid;
  }

  get contactoFieldIsInvalid() {
    return this.contactoField.touched && this.contactoField.invalid;
  }
  //text
  get textField() {
    return this.form.get('text');
  }

  get textFieldIsValid() {
    return this.textField.touched && this.textField.valid;
  }

  get textFieldIsInvalid() {
    return this.textField.touched && this.textField.invalid;
  }
  
  doSomething() {
    console.log('click');
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  enviocorreo(){
    
    let params = {
      nombre: this.form.value.name,
      phone: this.form.value.contacto,
      email: this.form.value.email,
      content: this.form.value.text,
    }
    
    console.log(params);
    
    
    this.httpclient.post('http://localhost:3000/envio', params).subscribe(resp =>{
      console.log(resp)
    })
    this.form.reset();
  }

  refrescar() {
    this.form.patchValue({  
      name: '',
      contacto:'',
      email: '',
      text: '',
    });    
  }

  showModal() {
    Swal.fire({
      
      icon: 'success',
      title: '¡Tu correo ha sido enviado!',
      showConfirmButton: false,
      timer: 4500
    })
  }

}
