import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [RouterModule],
  template: `
<footer class="border-t border-softgray bg-white">
  <div class="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
    <!-- Brand / Address -->
    <div>
      <h4 class="font-serif text-xl text-charcoal">Royal Oasis Spa</h4>
      <p class="text-zinc-600 mt-2">200 Swanton Street<br>Winchester, MA 01890</p>
      <p class="text-zinc-600 mt-1">Mon–Fri 10–7 • Sat 10–5</p>
    </div>

    <!-- Nav -->
    <div>
      <h5 class="text-sm font-medium text-charcoal">Explore</h5>
      <ul class="mt-3 space-y-2">
        <li><a routerLink="/services" class="text-charcoal hover:text-gold">Services</a></li>
        <li><a routerLink="/booking" class="text-charcoal hover:text-gold">Booking</a></li>
        <li><a routerLink="/gallery" class="text-charcoal hover:text-gold">Gallery</a></li>
        <li><a routerLink="/contact" class="text-charcoal hover:text-gold">Contact</a></li>
      </ul>
    </div>

    <!-- Contact / Social -->
    <div>
      <h5 class="text-sm font-medium text-charcoal">Contact</h5>
      <p class="mt-3 text-zinc-600">
        hellosparoyaloasis.com<br>(781) 555-0123
      </p>
      <div class="mt-4 flex gap-3">
        <a href="https://instagram.com" target="_blank" class="text-gold hover:text-gold-700">Instagram</a>
        <a href="https://facebook.com" target="_blank" class="text-gold hover:text-gold-700">Facebook</a>
      </div>
    </div>
  </div>

  <div class="border-t border-softgray py-6 text-center text-zinc-500 text-sm">
    © {{year}} Royal Oasis Spa. All rights reserved.
  </div>
</footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
