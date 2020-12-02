import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // this.recipes = this.recipesService.getAllRecipes();
    console.log('ngOninit');
  }

  ionViewWillEnter() {
    console.log('called ionViewWillEEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('called ionViewDidEEnter');
  }

  ionViewWillLeave() {
    console.log('called ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('called ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('called onDestroyed method');
  }

}
