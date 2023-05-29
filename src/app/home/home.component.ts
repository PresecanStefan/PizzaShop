import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  food:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
          this.food=this.foodService.getAll().filter(food => 
            food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else if(params['tag'])
      this.food=this.foodService.getAllFoodsByTag(params['tag'])
      else
          this.food=this.foodService.getAll();
    })
  }
}
