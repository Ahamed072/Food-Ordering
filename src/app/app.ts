import { Component } from '@angular/core';
import { BannerSectionComponent } from './banner-section/banner-section';
import { WcuSectionComponent } from './wcu-section/wcu-section';
import { EmsSectionComponent } from './ems-section/ems-section';
import { HealthyFoodSectionComponent } from './healthy-food-section/healthy-food-section';
import { DeliverySectionComponent } from './delivery-section/delivery-section';
import { ThankingSectionComponent } from './thanking-section/thanking-section';
import { FollowUsSectionComponent } from './follow-us-section/follow-us-section';

// Main application component that orchestrates the different sections of the Food Munch website.
// It includes the common navigation bar and footer, and embeds all page sections as child components.
@Component({
  selector: 'app-root',
  imports: [BannerSectionComponent, WcuSectionComponent, EmsSectionComponent, HealthyFoodSectionComponent, DeliverySectionComponent, ThankingSectionComponent, FollowUsSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'foodmunch-angular';
}
