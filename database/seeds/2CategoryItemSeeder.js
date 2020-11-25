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
    await CategoryItemModel.create({id:1,category_id:1, name : 'Nombre completo'});
    await CategoryItemModel.create({id:2,category_id:1, name : 'Número de identificación'});
    await CategoryItemModel.create({id:3,category_id:1, name : 'Celular'});
    await CategoryItemModel.create({id:4,category_id:1, name : 'Correo Electrónico'});
    await CategoryItemModel.create({id:5,category_id:1, name : 'Contraseña'});
    await CategoryItemModel.create({id:6,category_id:2, name : 'Departamento'});
    await CategoryItemModel.create({id:7,category_id:2, name : 'Ciudad'});
    await CategoryItemModel.create({id:8,category_id:2, name : 'Barrio'});
    await CategoryItemModel.create({id:9,category_id:2, name : 'Dairección de residencia'});
    await CategoryItemModel.create({id:10,category_id:3, name : 'Salario '});
    await CategoryItemModel.create({id:11,category_id:3, name : 'Otros ingresos'});
    await CategoryItemModel.create({id:12,category_id:3, name : 'Gastos mensuales'});
    await CategoryItemModel.create({id:13,category_id:3, name : 'Gastos financieros'});
  }
}

module.exports = CategoryItemSeeder
