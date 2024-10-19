import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Injectable, Logger } from "@nestjs/common";

import { HttpAdapter } from "../interfaces/http-adapter.interface";

@Injectable()
export class AxiosAdapter implements HttpAdapter {

    logger = new Logger()

    constructor (private readonly httpService: HttpService) {}

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await firstValueFrom(this.httpService.get<T>(url));
            return data;
        } catch (error) {
            this.logger.error(error);
            throw new Error('This is an error on get - Check logs');
        }
    }

    async post<T>(url: string, body?: any): Promise<T> {
        try {
            const response = await firstValueFrom(this.httpService.post<T>(url, body));
            return response.data;
        } catch (error) {
            this.logger.error(error);
            throw new Error('This is an error on post - Check logs');
        }
    }

}
