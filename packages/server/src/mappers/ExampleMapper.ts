import { DogDTO } from "../types/dto";

export class ExampleMapper {
  static toDTO(dog: any): DogDTO {
    return {
      id: dog.id,
      name: dog.name, 
      breed: dog.breed,
      goodBoy: dog.goodBoy
    }
  }

  static toModel(dog: Partial<DogDTO>): any {
    return {...dog};
  }
}