import { DogDTO } from "../types/dto";
import dogs from "../db/dogs.json";
import { ExampleMapper } from "../mappers/ExampleMapper";
import { NotFoundError } from "../utils/error-utils";

export class ExampleService {
  async findAll(): Promise<DogDTO[]> {
    return dogs.map(dog => ExampleMapper.toDTO(dog))
  }

  async findOne(id: number): Promise<DogDTO> {
    const dog = dogs[id];
    if (!dog) {
      throw new NotFoundError("Dog does not exist");
    }
    return ExampleMapper.toDTO(dog);
  } 

  async create() {

  }

  async update() {

  }

  async delete() {

  }
}