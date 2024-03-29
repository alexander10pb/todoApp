import { Component, signal } from '@angular/core';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = "Hola Mi Primer Proyecto"
  welcome = 'Bienvenido a mi primera aplicacion con Angular';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = signal('Alexander');
  age = 22;
  disabled = true;
  img = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frailsware.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F05%2FReact-VS-Angular.jpg&f=1&nofb=1&ipt=554a7fbbb066de955e005c73430ab32f1215c6bfb0a0483015ed8c15b82c8a84&ipo=images';

  person = signal({
    name: 'Alexander',
    age: 19,
    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frailsware.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F05%2FReact-VS-Angular.jpg&f=1&nofb=1&ipt=554a7fbbb066de955e005c73430ab32f1215c6bfb0a0483015ed8c15b82c8a84&ipo=images'
  });

  colorCtrol = new FormControl()
  widhthCtrol = new FormControl(50, {
    nonNullable: true,
  })
  nameCtrl = new FormControl('Alexander', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  constructor() {
    this.colorCtrol.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    })
  }
}
