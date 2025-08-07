import { Injectable, Inject } from "@nestjs/common";
import { Cat } from "../cat.interface";

@Injectable()
export class CatService<T> {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    async findAll(): Promise<Cat[]> {
        return this.cats;
    }
}