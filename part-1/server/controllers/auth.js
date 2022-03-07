const bcryptjs = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {

      console.log('Logging In User')

      const { username, password } = req.body;

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          let existingPassword = bcryptjs.compareSync(password, users[i].passHash);
          if(existingPassword){
            let secureObj = {...users[i]};
            delete secureObj.passHash;

            res.status(200).send(secureObj);
            return;
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')

        let {username, email, firstName, lastName, password} = req.body;
        let salt = bcryptjs.genSaltSync(5);
        let passHash = bcryptjs.hashSync(password, salt);

        let userObj = {
          username,
          email,
          firstName,
          lastName,
          passHash
        };
        users.push(userObj);

        let secureObj = {...userObj};
        delete secureObj.passHash;
        
        res.status(200).send(secureObj);
    }
}