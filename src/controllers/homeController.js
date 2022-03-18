const mongoose = require('mongoose');
const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  const contatos = await Contato.buscaContatos(req.session.user.email);
  res.render('index', { contatos }); 
};