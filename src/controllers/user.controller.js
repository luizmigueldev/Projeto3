const userModel = require("../models/user.model");
const { encode } = require("../utils")

class UserController {
  async store(request, response) {
    const { name, email, password } = request.body;
    const newUser = await userModel.create({
      name,
      email,
      password: encode(password)
    })
    return response.json({
      mensagem: "Usuario Criado com Sucesso!!",
      user: {
        name,
        email,
        id: newUser._id
      }
    })

  }
}

module.exports = new UserController();