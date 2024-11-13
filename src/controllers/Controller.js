class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  // Função auxiliar para verificar a existência do registro
  async verificaRegistroExistente(id) {
    const registro = await this.entidadeService.pegaUmRegistroPorId(id);
    if (!registro) {
      throw { status: 404, mensagem: "Registro não encontrado" };
    }
    return registro;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ mensagem: "Erro ao buscar registros" });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.verificaRegistroExistente(Number(id));
      return res.status(200).json(umRegistro);
    } catch (erro) {
      console.error(erro);
      return res.status(erro.status || 500).json({ mensagem: erro.mensagem || "Erro ao buscar registro" });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(201).json(novoRegistroCriado);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ mensagem: "Erro ao criar registro" });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      if (!dadosAtualizados || Object.keys(dadosAtualizados).length === 0) {
        return res.status(400).json({ mensagem: "Nenhum dado para atualizar" });
      }

      await this.verificaRegistroExistente(Number(id));
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: "Registro não foi atualizado" });
      }

      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
      console.error(erro);
      return res.status(erro.status || 500).json({ mensagem: erro.mensagem || "Erro interno do servidor" });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.verificaRegistroExistente(Number(id));
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `Registro com id ${id} deletado` });
    } catch (erro) {
      console.error(erro);
      return res.status(erro.status || 500).json({ mensagem: erro.mensagem || "Erro ao deletar registro" });
    }
  }
}

module.exports = Controller;
