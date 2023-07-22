import { IsBoolean, IsNotEmpty } from 'class-validator';

export class DeleteUserDTO {
  @IsBoolean()
  @IsNotEmpty()
  isDeleted: boolean;
}
