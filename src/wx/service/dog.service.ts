import { Injectable } from "@nestjs/common";
import { DogDto } from "../domain/dog.dto";

@Injectable() // 注入到容器中
export class DogService {
    private readonly dogs: DogDto[] = [];

    create(dog: DogDto) {
        this.dogs.push(dog);
    }
}