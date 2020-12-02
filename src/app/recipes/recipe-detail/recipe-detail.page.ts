import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private alertCtrl: AlertController,
      private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  ionViewWillEnter() {
    console.log('called ionViewWillEEnter');
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

  onDeleteRecipe() {
    this.alertCtrl.create({header: 'Are you sure?', message: 'Do you really want to delete this recipe?',
      buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            }
          }
          ]}).then(alertEl => {
            alertEl.present();
    });
  }
}
