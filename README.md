# Lojinha


1. MODELAGEM CONCEITUAL:
Clientes (clients): Representa os usuários que realizam pedidos na aplicação.
Produtos (products): Representa os itens que podem ser comprados.
Categorias (categories): Classifica os produtos em diferentes grupos.
Pedidos (orders): Representa as compras feitas pelos clientes.
Itens do Pedido (itemorders): Detalha os produtos comprados em cada pedido.
Pagamentos (payments): Gerencia as informações de pagamento dos pedidos.
Administradores (admins): Representa usuários administrativos responsáveis pela gestão do sistema.

1.1 Relacionamentos:
Clientes realizam pedidos.
Pedidos contêm itens (produtos).
Produtos pertencem a categorias.
Pedidos possuem pagamentos associados.

2. MODELAGEM LOGÍCA:
2.2 Relacionamentos:
2.2.1 Tabela clients:
  Relaciona-se com orders através do campo Client_id.
2.2.2 Tabela orders:
  Relaciona-se com itemorders através do campo Order_id.
  Relaciona-se com payments pelo campo Payment_id.
2.2.3 Tabela itemorders:
  Relaciona-se com products através do campo Product_id.
  Relaciona-se com orders pelo campo Order_id.
2.2.4 Tabela products:
  Relaciona-se com categories através do campo Category_id.
2.2.5 Tabela categories:
  É usada para classificar os produtos (products).
2.2.6 Tabela payments:
  Relaciona-se com orders através do campo Payment_id.
2.2.7 Tabela admins:
  Não apresenta relação direta com outras tabelas no diagrama, mas pode ser usada para gerenciar o sistema.


3. Chaves Primárias e Estrangeiras:
  Cada tabela tem um identificador único como chave primária (ID_X).
  Campos como Client_id, Order_id, e Product_id servem como chaves estrangeiras para garantir a integridade referencial.
  O banco não possue redundãncias,



4. TESTE
4.1 Arquivo de adição de usuarios pelo sequelize: 
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', [
      { ID_Client: 1, Name: 'John Doe', Email: 'john@example.com', Password: '123', Phone: '123456789', Address: '123 Main St', Street: 'Main St', City: 'New York', Postal_Code: '10001' },
      { ID_Client: 2, Name: 'Jane Smith', Email: 'jane@example.com', Password: '456', Phone: '987654321', Address: '456 Elm St', Street: 'Elm St', City: 'Los Angeles', Postal_Code: '90001' },
      {"ID_Client":3,"Name":"Michael Johnson","Email":"michael.johnson@example.com","Password":"789","Phone":"555123456","Address":"789 Oak St","Street":"Oak St","City":"San Francisco","Postal_Code":"94102"},
      {"ID_Client":4,"Name":"Emily Davis","Email":"emily.davis@example.com","Password":"123","Phone":"123456789","Address":"123 Pine St","Street":"Pine St","City":"Seattle","Postal_Code":"98101"}, 
      {"ID_Client":5,"Name":"David Wilson","Email":"david.wilson@example.com","Password":"123","Phone":"987123654","Address":"456 Maple St","Street":"Maple St","City":"Chicago","Postal_Code":"60601"},
      {"ID_Client":6,"Name":"Sophia Martinez","Email":"sophia.martinez@example.com","Password":"123","Phone":"123987654","Address":"789 Cedar St","Street":"Cedar St","City":"Houston","Postal_Code":"77002"},
      {"ID_Client":7,"Name":"James Brown","Email":"james.brown@example.com","Password":"123","Phone":"654321987","Address":"123 Birch St","Street":"Birch St","City":"Phoenix","Postal_Code":"85001"},
      {"ID_Client":8,"Name":"Olivia Garcia","Email":"olivia.garcia@example.com","Password":"123","Phone":"789654123","Address":"456 Willow St","Street":"Willow St","City":"Dallas","Postal_Code":"75201"},

    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};


4.2. Adição de dados direto no workbench


Adiciona 8 usuarios ao banco.

Adiciona 1 usuario ao banco, agora de forma direta pelo MySql workbench
![insert into clients](https://github.com/user-attachments/assets/9ff5a96e-5c5c-41f2-93ca-4ff2f053015c)

Tabela client apos inserção
![tabela client apos inseert](https://github.com/user-attachments/assets/18068f2a-6114-47cd-a878-149c4d057497)









