import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { SendMail } from '../../models/interfaces/contact-model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private readonly _ContactService: ContactService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData: SendMail = {
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        body: this.contactForm.value.message,
      };
      console.log(formData);
      this._ContactService.sendMail(formData).subscribe({
        next: (response) => {
          console.log('Correo enviado exitosamente:', response);
          alert('¡Mensaje enviado con éxito!');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Error al enviar el correo:', error);
          alert(
            'Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.'
          );
        },
      });
    } else {
      console.log('El formulario no es válido');
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
