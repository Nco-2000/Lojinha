ROTEAMENTO:

usuario:          ROTAS:            Uso:
cadastro;         /auth/cadastro    Cria Novo usuario
Login;            /auth/login       Faz login
Perfil;           /auth/Profile     Visualiza/modifica/deleta perfil
Produtos;         /products         visualiza produtos e adiciona ao carrinho
Carrinho;         /cart             Pode remover produtos do carrinho e ver o valor total da compra (confirmar compra nao faz nada)


Admin:            ROTAS:            Uso:
Produtos          /products         adicionar/remover/editar 
Categorias        /categories       adicionar/remover/editar
Usuarios          /auth/users       visualiza os dados de todos os Usuarios

Autenticação Cliente:
Cliente não acessa sem estar logado: Carrinho, Perfil e produtos;
Cliente nunca acessa: Edição de produtos, edição de categorias, pagina com dados de usuario, carrinho de outro cliente e perfil de outro cliente
Cliente acessa quando logado: Pagina de produtos, pagina de produto especifico, Perfil e Carrinho.

Autenticação Admin:
Admin nunca Acessa: Pagina de perfil, Carrinho, Pagina comum de produtos.
Admin Acessa: Pagina de edição de produtos, edição de categorias, pagina com todos os clientes