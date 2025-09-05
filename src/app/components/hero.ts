import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [CommonModule],
  template: `
<section class="relative">
  <!-- Background image -->
  <img
    class="hero-img w-full h-[60svh] md:h-[70svh] object-cover"
    [src]="imageSrc"
    [alt]="imageAlt || ''"
    loading="lazy"
    fetchpriority="high"
    decoding="async"
  />

  <!-- Overlay -->
  <div class="hero-overlay"></div>

  <!-- Content -->
  <div class="absolute inset-0 flex items-center">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl">
        <h1 class="font-serif text-4xl md:text-5xl text-white drop-shadow">
          {{ headline }}
        </h1>
        <p *ngIf="subhead" class="mt-3 text-white/90 text-lg leading-relaxed drop-shadow">
          {{ subhead }}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            *ngIf="primaryHref"
            class="btn btn-darkonimage"
            [href]="primaryHref"
            [attr.target]="primaryTarget"
            >{{ primaryLabel || 'Book Now' }}</a
          >
          <a
            *ngIf="secondaryHref"
            class="btn btn-ghost text-white border-white/60 hover:bg-white/10"
            [href]="secondaryHref"
            [attr.target]="secondaryTarget"
            >{{ secondaryLabel || 'Gift Cards' }}</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
  `,
})
export class HeroComponent {
  /** Background image (large, high quality) */
  @Input() imageSrc = '/assets/hero/hero.jpg';
  @Input() imageAlt = 'Royal Oasis Spa hero background';

  /** Text */
  @Input() headline = 'A Royal Sanctuary for Wellness';
  @Input() subhead  = 'Luxurious massage, sauna & floating therapies in Winchester, MA.';

  /** CTAs */
  @Input() primaryHref   = 'https://www.vagaro.com/yourbusiness/book-now';
  @Input() primaryLabel  = 'Book Now';
  @Input() primaryTarget = '_blank';

  @Input() secondaryHref   = 'https://www.vagaro.com/yourbusiness/gift-certificates';
  @Input() secondaryLabel  = 'Gift Cards';
  @Input() secondaryTarget = '_blank';
}
