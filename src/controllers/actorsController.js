const db = require('../database/models')


module.exports = {
    list:(req,res)=>{

        db.Actor.findAll({
            order: [
                ['last_name','ASC']
            ]
        })
            .then(actors =>{
                return res.render('actorsList',{
                    actors
                })
            })
            .catch(error => console.log(error))
    },
    detail : (req,res) =>{
        const {id}=req.params;
        db.Actor.findByPk(id)
            .then(actor=>{
                
                return res.render('actorsDetail',{
                    actor
                })
            })
            .catch(error => console.error(error))
        
    }
}