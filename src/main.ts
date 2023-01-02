import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


const routes = [
  {
    path: 'feedback-and-chat',
    loadComponent: () =>
      import('./components/feedback-and-chat/feedback-and-chat.component').then(({ FeedbackAndChatComponent }) => FeedbackAndChatComponent),
  }
]

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(error => console.log(error));