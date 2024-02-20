//middlewrae para barrar usuários nas rotas que não estão logados

module.exports.checkAuth = function(req, res, next) {

  const userId = req.session.userid

  if(!userId) {
    res.redirect('/login')
  }

  next()
}