import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';
import { TypeUser } from '../interfaces/type_user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CriarUserDTO {
  @ApiProperty({
    example: 'Empresa Fulano de Tal',
    description:
      'O nome será utilizado para qualquer coisa que precise exibir informações do cliente',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '{"_id":"161321516511191dvds41"}',
    description:
      'type user recebe um objeto com a chave _id com o valor em string de um id que faz referência à tabela type_users, onde esse ide pode ser referente ao documento usuário PF ou PJ',
  })
  @IsNotEmpty()
  type_user: TypeUser;

  @ApiProperty({
    example: 'fulanodetal@fulano.com.br',
    description:
      'O e-mail é necessário apra o login, para fazer o login é necessário uma sennha',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'senha123123',
    description:
      'O password é utilizando como autenticação do usuário para utilizar a API junto com email',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example:
      'Avenida fulado de tal, casa 887, baito fulano de tal, município tal estado tal',
    description:
      'O address é o endereço do usuário, irá ser usado como identificação da sua moradia para entrega dos produtos',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: '01231230123123',
    description:
      'Como o usuário pode ser tanto Pessoa Física quanto Pessoa Jurídica, o doc serve para identificar o CPF ou CNPJ do usuário',
  })
  @IsString()
  @IsNotEmpty()
  doc: string;

  @ApiProperty({
    example: false,
    description:
      'A nossa aplicação insere um valor booleano para sinalizar se o usuário está deletado ou não da aplicação',
  })
  @IsBoolean()
  @IsNotEmpty()
  isDeleted: boolean;
}
