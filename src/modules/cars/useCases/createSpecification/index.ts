import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
    // const specificationRepository = SpecificationsRepository.getInstance();
    const specificationRepository = new SpecificationsRepository();
    const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
    const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

    return createSpecificationController;
}

// export { createSpecificationController }