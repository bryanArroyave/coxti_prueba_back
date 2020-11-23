'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserInformationSchema extends Schema {
  up () {
    this.create('user_informations', (table) => {
      table.increments()
      table.string('category_item_id').unsigned().references('id').inTable('category_items')
      table.integer('user_id').notNullable();
      table.string('data', 100).nostNullabler()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_informations')
  }
}

module.exports = UserInformationSchema
