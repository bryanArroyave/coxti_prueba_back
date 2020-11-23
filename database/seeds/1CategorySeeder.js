'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const CategoryModel = use('App/Models/Category');
class CategorySeeder {
  async run () {
    await CategoryModel.create({name : 'Datos personales'});
    await CategoryModel.create({name : 'Datos de residencia'});
    await CategoryModel.create({name : 'Datos financieros'});
  }
}

module.exports = CategorySeeder
