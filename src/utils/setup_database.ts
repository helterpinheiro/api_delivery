import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.URI_MONGO;

mongoose
  .connect(uri)
  .then(() => {
    console.log('Conectado ao MongoDB Atlas');

    createCollections();
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  });

// Criando Schemas
const typeUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Criando modelos ClientePF e ClientePJ
const typeUser = mongoose.model('type_user', typeUserSchema);

// funcao que cria as tabelas dentro do banco de dados
async function createCollections() {
  try {
    await typeUser.create({
      name: 'Pessoa Física',
    });

    await typeUser.create({
      name: 'Pessoa Jurídica',
    });

    console.log('Documentos inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir documentos:', error);
  } finally {
    mongoose.connection.close();
  }
}
