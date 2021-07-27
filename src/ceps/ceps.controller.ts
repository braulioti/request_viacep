import {Controller, Get, Param} from '@nestjs/common';
import {CepsService} from './ceps.service';

@Controller('ceps')
export class CepsController {
    
    constructor(
        private cepsService: CepsService
    ) {
    }

    @Get(':id')
    async findOne(@Param() params) {
        return await this.cepsService.buscaCep(params.id);
    }
}
