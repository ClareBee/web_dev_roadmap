
const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        return res.json(user[0])
      } else {
        return res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;
  // knex syntax: https://github.com/tgriesser/knex
  db('users')
    .where({ id })
    .update({ name, age, pet })
    .then(() => {
      if(res){
        return res.json('success')
      } else {
        return res.status(400).json('Unable to update')
      }
    })
    .catch(err => {
      console.log(err)
    });
}

module.exports = {
  handleProfileGet,
  handleProfileUpdate
}
