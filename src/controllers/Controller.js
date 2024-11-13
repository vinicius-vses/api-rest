class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
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
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      
      if (!umRegistro) {
        return res.status(404).json({ mensagem: "Registro não encontrado" });
      }
      
      return res.status(200).json(umRegistro);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ mensagem: "Erro ao buscar registro" });
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

      const registroExistente = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      if (!registroExistente) {
        return res.status(404).json({ mensagem: "Registro não encontrado" });
      }

      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: "Registro não foi atualizado" });
      }

      return res.status(200).json({ mensagem: "Atualizado com sucesso" });
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      const registroExistente = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      if (!registroExistente) {
        return res.status(404).json({ mensagem: "Registro não encontrado" });
      }

      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `Registro com id ${id} deletado` });
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ mensagem: "Erro ao deletar registro" });
    }
  }
}

module.exports = Controller;
