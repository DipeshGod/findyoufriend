import { Controller, Get } from '@nestjs/common';

@Controller('userLocations')
export class UserLocationsController {
  @Get()
  findAll(): string {
    return 'This action returns all users Locations';
  }
}
