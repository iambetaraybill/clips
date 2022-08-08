import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clips';
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement
    media.muted = true
    media.play()
  }

}
