import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './models';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-selector',
  imports: [Select, FormsModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelectorComponent {
  languages: Language[];

  selectedLanguage: Language;

  private translateService = inject(TranslateService);

  constructor() {
    this.languages = [
      { code: 'fr', name: 'Français' },
      { code: 'en', name: 'English' },
    ];

    this.selectedLanguage = this.languages[0];

    this.translateService.addLangs(
      this.languages.map((language) => language.code),
    );
    this.translateService.setDefaultLang('fr');
  }

  changeLanguage() {
    this.translateService.use(this.selectedLanguage.code);
  }
}
