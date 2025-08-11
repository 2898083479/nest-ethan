import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    hello() {
        return {
            code: "0000",
            message: "API is running"
        };
    }
    
    getStatus() {
        return {
            code: "0000"
        }
    }
}