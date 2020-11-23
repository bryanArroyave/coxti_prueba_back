'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryItemSchema extends Schema {
  up () {
    this.create('category_items', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.string('name', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('category_items')
  }
}

module.exports = CategoryItemSchema
