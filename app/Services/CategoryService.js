const { model } = require("@adonisjs/lucid/src/Factory")

const CategoryModel = use("App/Models/Category")

class CategoryService{


    async get(){

        try {
            const  category = await CategoryModel.all()
            return {error: false, payload: category, msg: '' };
        } catch (error) {
            console.log(error);
            return {error : true, msg: error};
        }
    }
}


module.exports = new CategoryService