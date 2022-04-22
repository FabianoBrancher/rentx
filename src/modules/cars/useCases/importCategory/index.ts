import { ImportCategoryuseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export default () : ImportCategoryController => {

    // const categoriesRepository = CategoriesRepository.getInstance();
    const categoriesRepository = new CategoriesRepository();
    const importCategoryUseCase = new ImportCategoryuseCase(categoriesRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase);
    
    // export { importCategoryController }

    return importCategoryController;
}
