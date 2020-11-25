'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserInformationSchema extends Schema {
  up () {
    this.create('user_informations', (table) => {
      
      table.integer('category_item_id').unsigned().references('id').inTable('category_items')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('data', 100).notNullable()
      table.primary(["user_id", "category_item_id"])
      table.timestamps()
    })
  }

  down () {
    this.drop('user_informations')
  }
}

module.exports = UserInformationSchema
