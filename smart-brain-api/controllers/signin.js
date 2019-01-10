const jwt = require('jsonwebtoken');
const redis = require('redis');

// redis setup
const redisClient = redis.createClient(process.env.REDIS_URI);

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
}

const getAuthTokenId = () => {
  console.log('auth ok')
}

const signToken = (email) => {
  console.log(email)
  const jwtPayload = { email };
  return jwt.sign(jwtPayload, 'secret', { expiresIn: '2 days' });
}

const createSessions = (user) => {
  // jwt
  const { email, id } = user;
  const token = signToken(email);
  console.log(token)
  return { success: 'true', userId: id, token }
}
// dependency injection
const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  console.log('auth')
  return authorization ? getAuthTokenId() :
    handleSignin(db, bcrypt, req, res)
      .then(data => {
        console.log('data', data)
        return data.id && data.email ? createSessions(data) : Promise.reject(data)
      })
      .then(session => res.json(session))
      .catch(err => res.status(400).json(err))
}

module.exports = {
  signinAuthentication: signinAuthentication
}
