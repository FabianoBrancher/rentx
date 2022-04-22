import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {
    }

    handle(request: Request, response: Response): Response {
        return response.status(201).send();
    }
}

export { CreateSpecificationController };