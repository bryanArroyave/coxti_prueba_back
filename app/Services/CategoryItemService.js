const CategoryItemModel = use("App/Models/CategoryItem")

class CategoryItemService{


    async create({name}){
        try{    
            const category = {name};
            const categoryItem = await CategoryItemModel.create(category);
            return {error: false, payload: categoryItem, msg: 'Insertado con exito' };
        } catch (error) {
            return {error : true, msg: error};
        }
    }

    async get(){
        
        try {
            const  category = await CategoryItemModel.all()

            return {error: false, payload: category, msg: '' };
        } catch (error) {
            console.log(error);
            return {error : true, msg: error};
        }
    }

    async getOne(id){

        try {
            const  categoryItem = await CategoryItemModel.find(id);

            return {error: false, payload: categoryItem["$attributes"], msg: '' };
        } catch (error) {
            return {error : true, msg: error};
        }
    }
}


module.exports = new CategoryItemService