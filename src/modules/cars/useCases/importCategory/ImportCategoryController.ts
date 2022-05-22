import { Request, Response } from 'express';
import { ImportCategoryuseCase } from './ImportCategoryUseCase';

import { container } from 'tsyringe';

class ImportCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const importCategoryUseCase = container.resolve(ImportCategoryuseCase);
        const { file } = request;

        await importCategoryUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };