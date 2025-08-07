import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { CatController } from "./cat.controller";
import { CatService } from "./service/cat.service";

@Module({
    controllers: [CatController], // 指定了这个模块中使用的控制器列表
    providers: [CatService], // 定义这个模块提供的服务/提供者列表
    imports: [UserModule], // 指定这个模块要导入的其他模块列表
    exports: [CatService], // 指定这个模块要导出的提供者列表
})
export class CatModule {}