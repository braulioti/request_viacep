import { Test, TestingModule } from '@nestjs/testing';
import { CepsController } from './ceps.controller';
import {CepsService} from './ceps.service';
import {ICep} from './interfaces/cep.interface';

describe('CepsController', () => {
  let controller: CepsController;
  let service: CepsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CepsController],
      providers: [CepsService]
    }).compile();

    controller = module.get<CepsController>(CepsController);
    service = new CepsService();
  });

  describe('findOne', () => {
    it('should return an valid cep', async () => {
      const result: ICep = {
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
      };

      expect(await service.buscaCep('01001000')).toStrictEqual(result);
    });
  });
});
