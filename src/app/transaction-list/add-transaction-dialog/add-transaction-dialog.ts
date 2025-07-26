import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';
import { Transaction } from '../models';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-transaction-dialog',
  imports: [
    Dialog,
    Button,
    InputText,
    InputNumber,
    TranslateModule,
    FloatLabel,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-transaction-dialog.html',
  styleUrl: './add-transaction-dialog.scss',
})
export class AddTransactionDialog {
  isVisible = false;

  @Output()
  AddTransactionDialogEvent = new EventEmitter<Transaction>();

  formSubmitted = false;

  addTransactionForm: FormGroup = inject(FormBuilder).group({
    name: ['', Validators.required],
    amount: ['', Validators.required],
    category: ['', Validators.required],
  });

  onSubmit() {
    this.formSubmitted = true;
    if (this.addTransactionForm.valid) {
      const formData = this.addTransactionForm.value;
      const transaction: Transaction = {
        name: formData.name,
        amount: formData.amount,
        category: formData.category,
      };
      this.AddTransactionDialogEvent.emit(transaction);
      this.addTransactionForm.reset();
      this.formSubmitted = false;
    }
  }

  resetForm(): void {
    this.addTransactionForm.reset();
    this.formSubmitted = false;
  }

  isInvalid(controlName: string) {
    const control = this.addTransactionForm.get(controlName);
    return control?.invalid && this.formSubmitted;
  }

  showForm() {
    this.isVisible = true;
    this.addTransactionForm.reset();
  }
}
