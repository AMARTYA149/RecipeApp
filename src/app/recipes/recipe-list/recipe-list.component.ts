import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chilly Paneer',
      'Spicy Paneer with Red Sauce Gravy',
      'https://1.bp.blogspot.com/-KeCawc8_1Xk/XQ_u6jCkWwI/AAAAAAAAJGg/K6R3tsNEhpobjcEZd-dlzU3VXny7lkGngCLcBGAs/s1600/IMG_20190616_203154.jpg'
    ),
    new Recipe(
      'Kadhai Paneer',
      'Spicy Paneer with Onion Gravy',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/03/kadai-paneer-1-500x375.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
