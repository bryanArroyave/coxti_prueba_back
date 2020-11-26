"use strict";

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

const CategoryItemModel = use("App/Models/CategoryItem");

class CategoryItemSeeder {
  async run() {
    await CategoryItemModel.create({
      id: 1,
      category_id: 1,
      type: "text",
      name: "Nombre completo",
    });
    await CategoryItemModel.create({
      id: 2,
      category_id: 1,
      type: "text",
      name: "Número de identificación",
    });
    await CategoryItemModel.create({
      id: 3,
      category_id: 1,
      type: "text",
      name: "Celular",
    });
    await CategoryItemModel.create({
      id: 4,
      category_id: 1,
      type: "email",
      name: "Correo Electrónico",
    });
    await CategoryItemModel.create({
      id: 5,
      category_id: 1,
      type: "password",
      name: "Contraseña",
    });
    await CategoryItemModel.create({
      id: 6,
      category_id: 2,
      type: "text",
      name: "Departamento",
    });
    await CategoryItemModel.create({
      id: 7,
      category_id: 2,
      type: "text",
      name: "Ciudad",
    });
    await CategoryItemModel.create({
      id: 8,
      category_id: 2,
      type: "text",
      name: "Barrio",
    });
    await CategoryItemModel.create({
      id: 9,
      category_id: 2,
      type: "text",
      name: "Dairección de residencia",
    });
    await CategoryItemModel.create({
      id: 10,
      category_id: 3,
      type: "number",
      name: "Salario",
    });
    await CategoryItemModel.create({
      id: 11,
      category_id: 3,
      type: "number",
      name: "Otros ingresos",
    });
    await CategoryItemModel.create({
      id: 12,
      category_id: 3,
      type: "number",
      name: "Gastos mensuales",
    });
    await CategoryItemModel.create({
      id: 13,
      category_id: 3,
      type: "number",
      name: "Gastos financieros",
    });
  }
}

module.exports = CategoryItemSeeder;
