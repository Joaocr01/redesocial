const Publicacao = require('../models/Publicacao')

const listar = async function(req, res) {
  try {
    const publicacoes = await Publicacao.find()
    res.render('publicacoes/listar', {
      title: "Lista de Publicações",
      publicacoes: publicacoes
    })
  } catch (err) {
    res.status(500).send("Erro ao buscar publicações")
  }
}
const visualizar = async function(req, res) {
  try {
    const id = req.params.id;
    const pub = await Publicacao.findById(id);

    if (!pub) return res.status(404).send('Publicação não encontrada');

    res.render('publicacoes/visualizar', {
      titulo: pub.titulo,
      descricao: pub.descricao,
      imagem: pub.imagem,
      data: pub.data,
      comentarios: pub.comentarios,
      curtidas: pub.curtidas,
      compartilhamentos: pub.compartilhamentos
    });
  } catch (err) {
    res.status(500).send('Erro ao buscar publicação');
  }
};
module.exports = { listar, visualizar }
