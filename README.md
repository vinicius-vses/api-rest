<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>Desafio Técnico - API de Gestão de Clientes</h1>
   <p>Este projeto foi desenvolvido como solução para um desafio técnico proposto pelo gestor Ronaldo Carneiro, da área de previdência da XP.INC. O desafio consiste na criação de uma API RESTful para gerenciar dados de clientes, permitindo o cadastro, consulta e detalhamento de informações dos clientes.</p>

  <h2>Funcionalidades</h2>
  <ul>
    <li><strong>Cadastrar Cliente</strong> - Permite a criação de um novo cliente com os seguintes dados: ID, Nome Completo, Telefone, Email.</li>
    <li><strong>Listar Todos os Clientes</strong> - Retorna uma lista com todos os clientes cadastrados.</li>
    <li><strong>Listar Detalhe do Cliente</strong> - Retorna detalhes específicos de um cliente, incluindo o endereço principal e o email principal.</li>
    <li><strong>Atualizar Cliente</strong> - Permite a atualização dos dados de um cliente existente.</li>
    <li><strong>Deletar Cliente</strong> - Permite a remoção de um cliente do sistema.</li>
  </ul>

<p>Obs: As funcionalidades "Atualizar Cliente" e "Deletar Cliente" não foram solicitadas no desafio, mas eu decidi implementá-las.</p>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>Backend:</strong> linguagem/framework Node.js, Express</li>
    <li><strong>ORM:</strong> Sequelize</li>
  </ul>

  <h2>Como Executar o Projeto</h2>
  <ol>
    <li>Clone o repositório:
      <pre><code>git clone https://github.com/vinicius-vses/api-rest.git</code></pre>
    </li>
    <li>Instale as dependências:
      <pre><code>npm install</code></pre>
    </li>
    <li>Execute o projeto:
      <pre><code>npm start</code></pre>
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Acesse a API em: <code>http://localhost:3000</code></li>
  </ol>

  <h2>Estrutura de Endpoints</h2>
  <table>
    <tr>
      <th>Método</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>POST</td>
      <td>/api/clientes</td>
      <td>Cadastra um novo cliente</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/api/clientes</td>
      <td>Lista todos os clientes</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/api/clientes/{id}</td>
      <td>Detalhes de um cliente</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/api/clientes/{id}</td>
      <td>Atualiza um cliente</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/api/clientes/{id}</td>
      <td>Deleta um cliente</td>
    </tr>    
  </table>

  <h2>Estrutura de Dados</h2>
  <p><strong>Cliente:</strong></p>
  <pre><code>{
  "id": "int",
  "nomeCompleto": "string",
  "telefone": "string",
  "email": "string",
  "enderecoPrincipal": "string"
}</code></pre>

  <h2>Considerações Finais</h2>
  <p>Esta API foi desenvolvida para demonstrar habilidades de desenvolvimento e arquitetura de software. Foram considerados princípios de qualidade e boas práticas de codificação, priorizando a escalabilidade e a organização do código.</p>

</body>
</html>
