'use strict'

/*
|--------------------------------------------------------------------------
| CategoryItemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const CategoryItemModel = use('App/Models/CategoryItem');

class CategoryItemSeeder {
  async run () {
    await CategoryItemModel.create({category_id:1, name : 'Nombre completo'});
    await CategoryItemModel.create({category_id:1, name : 'Número de identificación'});
    await CategoryItemModel.create({category_id:1, name : 'Celular'});
    await CategoryItemModel.create({category_id:1, name : 'Correo Electrónico'});
    await CategoryItemModel.create({category_id:1, name : 'Contraseña'});
    await CategoryItemModel.create({category_id:2, name : 'Departamento'});
    await CategoryItemModel.create({category_id:2, name : 'Ciudad'});
    await CategoryItemModel.create({category_id:2, name : 'Barrio'});
    await CategoryItemModel.create({category_id:2, name : 'Dairección de residencia'});
    await CategoryItemModel.create({category_id:3, name : 'Salario '});
    await CategoryItemModel.create({category_id:3, name : 'Otros ingresos'});
    await CategoryItemModel.create({category_id:3, name : 'Gastos mensuales'});
    await CategoryItemModel.create({category_id:3, name : 'Gastos financieros'});
  }
}

module.exports = CategoryItemSeeder
