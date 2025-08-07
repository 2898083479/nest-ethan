import { 
    Body, 
    Controller, 
    Get, 
    HttpException, 
    HttpStatus, 
    Post, 
    Query 
} from "@nestjs/common";
import { CatDto } from "src/wx/com/cat/domain/cat.dto";
import { CatService } from "src/wx/com/cat/service/cat.service";
import { 
    ResponseCode,
    ResponseMessage
} from "src/response";

@Controller('cats')
export class CatController<T> {

    constructor(private readonly catService: CatService<T>) {}

    @Get()
    async findAll(@Query('age') age: number, @Query('breed') breed: string) {
        const data = await this.catService.findAll();
        return {
            code: ResponseCode.SUCCESS,
            message: ResponseMessage[ResponseCode.SUCCESS],
            data: data
        }
    }

    @Post()
    create(@Body() createCatDto: CatDto) {
        this.catService.create(createCatDto);
        return 'This action adds a new cat';
    }

    @Get('/test')
    test() {
        try {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        } catch (error) {
            console.log(error);
        }
    }
}