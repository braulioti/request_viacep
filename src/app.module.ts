import { Module } from '@nestjs/common';
import { CepsModule } from './ceps/ceps.module';

@Module({
  imports: [CepsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
