import { Component, inject, CUSTOM_ELEMENTS_SCHEMA, OnInit, TemplateRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

const srcUrl = "https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1";

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeedbackAndChatComponent implements OnInit {

  showMsg: boolean = false;
  private fb: FormBuilder = inject(FormBuilder)

  constructor() { }

  ngOnInit(): void {
    const script = document.createElement("script");
    script.async = true;
    script.src = srcUrl;
    document.head.appendChild(script)
  }

  contactForm = this.fb.group({
    fullname: '',
    email: '',
    comments: ''
  });

  @ViewChild('temlateForm') temlateForm!: ElementRef<HTMLFormElement>
  ngAfterViewInit() {
    this.temlateForm.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }

  onSubmit(): void {
    this.showMsg = true;
    this.contactForm.reset();
  }
}
