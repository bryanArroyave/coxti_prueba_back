const CategoryModel = use("App/Models/Category")

class CategoryService{


    async create({name}){
    try{    
        const category = {name};
        const Category = await CategoryModel.create(category);
        return {error: false, payload: Category, msg: 'Insertado con exito' };
        } catch (error) {
        return {error : true, msg: error};
        }
    }
}


module.exports = new CategoryService