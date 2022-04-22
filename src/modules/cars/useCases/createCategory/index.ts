import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

export default (): CreateCategoryController => {

    // const categoriesRepository = CategoriesRepository.getInstance();
    // const categoriesRepository = null;
    const categoriesRepository = new CategoriesRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;
};


// export { createCategoryController };