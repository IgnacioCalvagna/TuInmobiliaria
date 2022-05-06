const Role = require('../models/Role');
const User = require('../models/User');
 
 /* exports.getAll = (req, res) => {
  const { id } = req.params;
  console.log('soy el role del userrrr', id);
 
  if (id === '2' || id === '3') {
    User.findAll().then(users => res.send(users));
  } else {
  console.log(id);
    res.sendStatus(401);
  };   */
  
exports.register = (req, res) => {
  console.log('el body', req.body)
    const { firstName, lastName, email, password, favorite, isAdmin} = req.body;
    //const roleId = 1;
    User.create({
      firstName,
      lastName,
      email,
      password,
      favorite,
      isAdmin,
      //roleId,
    }).then(user => {
      res.status(201).send(user)})
      .catch((error)=> console.log(error)) 

  };

  exports.login = (req, res) => {
    console.log("user",req.user)
    res.send(req.user)
    
  };
  
  exports.logout = (req, res) => {
    req.logOut();
    res.sendStatus(200);
  };

  exports.update = (req, res) => {
    const { id } = req.params;
    User.update(req.body, {
      where: {
        id,
      },
      returning: true,
      plain: true,
    }).then(result => {
      const user = result[1];
      res.status(201).json({
        user,
      });
    });
  };

exports.me = (req, res) => {
    if (!req.user) return res.sendStatus(401); 
    res.send(req.user);
  };

exports.adminPromote = (req, res) => {
  const  id  = req.params.id;
  console.log('soy el id del adminPromote funct', id);
   User.update(
    {
      where: { id },
      returning: true,
      plain: true,
    }
  ).then(result => {
    console.log(result)
    res.sendStatus(200)
    //.catch(err => res.sendStatus(err))
  }); 
};

exports.suprAdmin = (req, res) => {
  const { id } = req.params;
  User.update(
    { roleId: 1 },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  ).then(result => {
    console.log(result);
    res.sendStatus(200);
  });
};

exports.createRole = (req, res) => {
  Role.create(req.body).then(newRole => {
    res.send(newRole);
  });
};

