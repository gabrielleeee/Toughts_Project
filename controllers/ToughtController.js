const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render('toughts/home')
  }

  static async dashboard (req, res) {

    const userId = req.session.userid

    const user = await User.findOne({
    where: {
      id: userId,
    },
    include: Tought,
    plain: true,
    })

    //checar se usuário existe
    if(!user) {
      res.redirect('/login')
    }

    //map: modifica os itens em um array
    const toughts = user.Toughts.map((result) => result.dataValues)

    console.log(toughts)

    res.render('toughts/dashboard', { toughts })
  }

  static createTought (req, res) {
    res.render('toughts/create')
  }

  static async createToughtSave (req, res) {

    const tought = {
      title: req.body.title,
      UserId: req.session.userid
    }

    await Tought.create(tought)
    req.flash('message', 'Pensamento criado com sucesso!')
    
    try {
      req.session.save(() => {
        res.redirect('/toughts/dashboard')
      })
    } catch(error) {
      console.log('Aconteceu um erro:' + error)
    }
    
  }

  static async removeTought (req, res) {

    const id = req.body.id
    const UserId = req.session.userid

    try {
      await Tought.destroy({where: {id: id, UserId: UserId}})

      req.flash('message', 'Pensamento removido com sucesso!')

      req.session.save(() => {
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log('Aconteceu um erro:' + error)
    }

  }
}