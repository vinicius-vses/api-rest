class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAllRegisters();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {}
  }
}

module.exports = Controller;
