import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from "../about-us/about-us.component";
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProductShowcaseComponent } from '../product-showcase/product-showcase.component';
import { OurTechnologyComponent } from "../our-technology/our-technology.component";
import { OurUniqueValueComponent } from "../our-unique-value/our-unique-value.component";
import { TheScienceBehindGlaucoglassesComponent } from "../the-science-behind-glaucoglasses/the-science-behind-glaucoglasses.component";
import { ExperimentalResultsComponent } from "../experimental-results/experimental-results.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ReferencesComponent } from "../references/references.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutUsComponent, FooterComponent, HeaderComponent, ProductShowcaseComponent, OurTechnologyComponent, OurUniqueValueComponent, TheScienceBehindGlaucoglassesComponent, ExperimentalResultsComponent, TestimonialsComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bro';
}
