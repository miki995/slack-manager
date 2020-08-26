import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IAppState } from '../../../../store';

declare var ScrollReveal: any;
declare const sr: any;
declare const anime: any;

@Component({
  selector: 'sc-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  date;
  loadingPage$: Observable<boolean>;

  constructor(private readonly store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.date = new Date().getFullYear();
    this.loadingPage$ = this.store.pipe(select('layout'), pluck('loadingPage'), distinctUntilChanged<boolean>());
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  animate(): void {
    const doc = document.documentElement;

    doc.classList.remove('no-js');
    doc.classList.add('js');

    // Reveal animations
    if (document.body.classList.contains('has-animations')) {
      /* global ScrollReveal */
      // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
      const sr = window.sr = ScrollReveal();

      sr.reveal('.feature, .testimonial', {
        duration: 600,
        distance: '50px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 100
      });

      /* global anime */
      const heroAnimation = anime.timeline({ autoplay: false });
      const strokedElement = document.querySelector('.stroke-animation');

      if (!strokedElement) {
        return;
      }

      strokedElement.setAttribute('stroke-dashoffset', anime.setDashoffset(strokedElement));

      heroAnimation.add({
        targets: '.stroke-animation',
        strokeDashoffset: {
          value: 0,
          duration: 2000,
          easing: 'easeInOutQuart'
        },
        strokeWidth: {
          value: [ 0, 2 ],
          duration: 2000,
          easing: 'easeOutCubic'
        },
        strokeOpacity: {
          value: [ 1, 0 ],
          duration: 1000,
          easing: 'easeOutCubic',
          delay: 1000
        },
        fillOpacity: {
          value: [ 0, 1 ],
          duration: 500,
          easing: 'easeOutCubic',
          delay: 1300
        }
      }).add({
        targets: '.fadeup-animation',
        offset: 1300, // Starts at 1300ms of the timeline
        translateY: {
          value: [ 100, 0 ],
          duration: 1500,
          easing: 'easeOutElastic',
          delay: (el, i) => {
            return i * 150;
          }
        },
        opacity: {
          value: [ 0, 1 ],
          duration: 200,
          easing: 'linear',
          delay: (el, i) => {
            return i * 150;
          }
        }
      }).add({
        targets: '.fadeleft-animation',
        offset: 1300, // Starts at 1300ms of the timeline
        translateX: {
          value: [ 40, 0 ],
          duration: 400,
          easing: 'easeOutCubic',
          delay: (el, i) => {
            return i * 150;
          }
        },
        opacity: {
          value: [ 0, 1 ],
          duration: 200,
          easing: 'linear',
          delay: (el, i) => {
            return i * 150;
          }
        }
      });

      doc.classList.add('anime-ready');
      heroAnimation.play();
    }
  }
}
