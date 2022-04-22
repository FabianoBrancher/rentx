import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;
    // private specifications: Specification[];
    // private static INSTANCE: SpecificationsRepository;

    // private constructor() {
    //     this.specifications = [];
    // }

    constructor() {
        this.repository = getRepository(Specification);
    }

    // public static getInstance(): SpecificationsRepository {
    //     if (!SpecificationsRepository.INSTANCE) {
    //         SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    //     }

    //     return SpecificationsRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {

        const specification = await this.repository.create({
            name,
            description,
        })

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };