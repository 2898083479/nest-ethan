import { Module } from "@nestjs/common";
import { DogController } from "./dog.controller";
import { DogService } from "./service/dog.service";

@Module({
    controllers: [DogController],
    providers: [DogService],
    exports: [DogService],
})
export class DogModule {}