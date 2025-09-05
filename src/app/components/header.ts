import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-softgray">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-1">
          <img src="/ros-logo.svg" alt="Royal Oasis Spa" class="h-14 w-14">
          <span class="font-serif text-xl text-charcoal">Royal Oasis Spa</span>
        </a>

        <!-- Nav (desktop) -->
        <nav class="hidden md:flex items-center gap-8">
          <a routerLink="/about" class="nav-link">About</a>
          <a routerLink="/services" class="nav-link">Services</a>
          <a routerLink="/booking" class="nav-link">Booking</a>
          <a routerLink="/gallery" class="nav-link">Gallery</a>
          <a routerLink="/blog" class="nav-link">Blog</a>
          <a routerLink="/team" class="nav-link">Team</a>
          <a routerLink="/contact" class="nav-link">Contact</a>
          <a routerLink="/booking" class="btn btn-primary">Book Now</a>
        </nav>

        <!-- Mobile menu button -->
        <button class="md:hidden text-charcoal" (click)="mobileOpen = !mobileOpen">
          ☰
        </button>
      </div>

      <!-- Mobile Nav -->
      @if (mobileOpen) {
        <div class="md:hidden border-t border-softgray bg-white">
          <nav class="flex flex-col p-4 space-y-3">
            <a routerLink="/about" class="nav-link" (click)="mobileOpen=false">About</a>
            <a routerLink="/services" class="nav-link" (click)="mobileOpen=false">Services</a>
            <a routerLink="/booking" class="nav-link" (click)="mobileOpen=false">Booking</a>
            <a routerLink="/gallery" class="nav-link" (click)="mobileOpen=false">Gallery</a>
            <a routerLink="/blog" class="nav-link" (click)="mobileOpen=false">Blog</a>
            <a routerLink="/team" class="nav-link" (click)="mobileOpen=false">Team</a>
            <a routerLink="/contact" class="nav-link" (click)="mobileOpen=false">Contact</a>
            <a routerLink="/booking" class="btn btn-primary">Book Now</a>
          </nav>
        </div>
      }

    </header>
  `,
})
export class HeaderComponent {
  mobileOpen = false;
}
