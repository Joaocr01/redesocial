const mongoose = require('mongoose');

const PublicacaoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  conteudo: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  },
  descricao: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('Publicacao', PublicacaoSchema);
