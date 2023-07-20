import * as mongoose from 'mongoose';

const uri =
  'mongodb+srv://helter:CylgJG8e76lkRuJH@cluster0.omqjyrh.mongodb.net/enafood?retryWrites=true&w=majority';

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
const clientePFSchema = new mongoose.Schema({
  _id: { type: String, required: true },
});

const clientePJSchema = new mongoose.Schema({
  _id: { type: String, required: true },
});

// Criando modelos ClientePF e ClientePJ
const ClientePF = mongoose.model('cliente_PF', clientePFSchema);
const ClientePJ = mongoose.model('cliente_PJ', clientePJSchema);

// funcao que cria as tabelas dentro do banco de dados
async function createCollections() {
  try {
    await ClientePF.create({
      _id: '1',
    });

    await ClientePJ.create({
      _id: '2',
    });

    console.log('Documentos inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir documentos:', error);
  } finally {
    mongoose.connection.close();
  }
}
