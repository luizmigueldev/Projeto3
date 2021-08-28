const userModel = require("../models/user.model");
const { compare } = require("../utils");

class LoginController {
  async store(request, response) {
    const { email, password } = request.body;
    const user = await userModel.findOne({ email });
    if (!compare(password, user.password)) {
      return response.status(401).json({
        mensagem: "Email ou Senha Invalido!"
      })
    }
    return response.json({
      mensagem: "Usuario Logado com Sucesso!!"
    })

  }
}

module.exports = new LoginController();