import { Module } from '@nestjs/common';
import { UserLocationsController } from './userLocation.controller';

@Module({
  imports: [],
  controllers: [UserLocationsController],
  providers: [],
})
export class UserLocationModule {}
