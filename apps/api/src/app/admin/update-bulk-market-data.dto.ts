import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray } from 'class-validator';

import { UpdateMarketDataDto } from './update-market-data.dto';

export class UpdateBulkMarketDataDto {
  @ArrayNotEmpty()
  @IsArray()
  @Type(() => UpdateMarketDataDto)
  marketData: UpdateMarketDataDto[];
}
