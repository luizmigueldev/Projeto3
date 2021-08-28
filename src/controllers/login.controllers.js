
class LoginController {
  async store(request, response) {
    return response.json({
      mensagem: "Usuario Logado com Sucesso!!"
    })

  }
}

module.exports = new LoginController();