import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class DeleteUserDTO {
  @ApiProperty({
    example: false,
    description:
      'A nossa aplicação insere um valor booleano para sinalizar se o usuário está deletado ou não da aplicação',
  })
  @IsBoolean()
  @IsNotEmpty()
  isDeleted: boolean;
}
