import {Injectable, Logger} from '@nestjs/common';
import {ICep} from './interfaces/cep.interface';
import {BASE_CEP_URL, CEP_FORMAT_JSON} from '../common/environments';

@Injectable()
export class CepsService {
    async buscaCep(cep: string): Promise<ICep> {
        const axios = require('axios');
        
        try {
            const response = await axios.get(`${BASE_CEP_URL}/${cep}/${CEP_FORMAT_JSON}`);
            let data: ICep = response.data;
            return await data;
        } catch (e) {
            throw new Error(e.message);
        }                
    }
}
