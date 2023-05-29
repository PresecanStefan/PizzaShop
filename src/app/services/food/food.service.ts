import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) : Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsByTag(tag:string): Food[]{
    if(tag == "All")
      return this.getAll();
    else return this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count: 7},
      {name: 'Cheese', count: 2},
      {name: 'Classic', count: 3},
      {name: 'Chicken', count: 1},
      {name: 'LA Style', count: 1},
      {name: 'NY Style', count: 2},
      {name: 'Meat', count: 1},
      {name: 'Pepperoni', count: 1},
      {name: 'Has Everything', count: 1},
      {name: 'Vegetarian', count: 1},
    ]
  }

  getAll():Food[]{
    return [
      {
        id:1,
        name: 'Cheese Pizza',
        price: 5,
        cookTime: '20-25',
        favorite: false, 
        origins: ['ITALY'],
        imageUrl: '/assets/images/cheese pizza.jpg',
        tags: ['Cheese', 'Classic'],
      },
      {
        id:2,
        name: 'Chicken Pizza',
        price: 5,
        cookTime: '20-25',
        favorite: false, 
        origins: ['USA'],
        imageUrl: '/assets/images/chicken pizza.jpg',
        tags: ['Chicken', 'LA Style'],
      },
      {
        id:3,
        name: 'Margherita Pizza',
        price: 5,
        cookTime: '20-25',
        favorite: false, 
        origins: ['ITALY'],
        imageUrl: '/assets/images/margherita pizza.jpg',
        tags: ['Cheese', 'Classic'],
      },
      {
        id:4,
        name: 'Meat Pizza',
        price: 5,
        cookTime: '20-25',
        favorite: false, 
        origins: ['USA'],
        imageUrl: '/assets/images/meat pizza.jpg',
        tags: ['Meat', 'NY Style'],
      },
      {
        id:5,
        name: 'Pepperoni Pizza',
        price: 5,
        cookTime: '20-25',
        favorite: false, 
        origins: ['USA'],
        imageUrl: '/assets/images/pepperoni pizza.jpg',
        tags: ['Pepperoni', 'NY Style'],
      },
      {
        id:6,
        name: 'Supreme Pizza',
        price: 6,
        cookTime: '25-30',
        favorite: false, 
        origins: ['USA'],
        imageUrl: '/assets/images/supreme pizza.jpg',
        tags: ['Has Everything'],
      },
      {
        id:7,
        name: 'Veggie Pizza',
        price: 4,
        cookTime: '20-25',
        favorite: false, 
        origins: ['ITALY'],
        imageUrl: '/assets/images/veggie pizza.jpg',
        tags: ['Vegetarian', 'Classic'],
      },
    ]
  }
}
