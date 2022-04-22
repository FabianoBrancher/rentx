import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';


export default (): ListCategoriesController => {
    // const categoriesRepository = CategoriesRepository.getInstance();
    // const categoriesRepository = null;
    const categoriesRepository = new CategoriesRepository();
    const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
    const listCategoriesController = new ListCategoriesController(listCategoryUseCase)
    
    return listCategoriesController;
    // export { listCategoriesController };
}