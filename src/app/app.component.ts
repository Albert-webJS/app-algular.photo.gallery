import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedbackAndChatComponent } from 'src/components/feedback-and-chat/feedback-and-chat.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, FeedbackAndChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'page-example.project_sa';



  goToForm(): void {
    document.body.scrollTop = document.body.scrollHeight;
  }
}
