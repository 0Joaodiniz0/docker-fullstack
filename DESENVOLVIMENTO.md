🛠️ Processo de Desenvolvimento
📅 Organização
Projeto individual desenvolvido ao longo de uma semana (segunda a sexta-feira).

Iniciei com estudo teórico sobre Docker, containers, redes e volumes.

Em seguida, montei e configurei os serviços (frontend, backend e banco de dados PostgreSQL).

Finalizei após realizar testes e confirmar a comunicação completa entre os serviços.

✅ Metodologia
Organização pessoal com anotações e tarefas distribuídas em etapas.

Utilização do GitHub Projects no estilo Kanban para controle de progresso.

🧰 Ferramentas
VS Code – Edição do código.

Docker / Docker Compose – Orquestração dos serviços.

PostgreSQL – Banco de dados.

GitHub – Controle de versão e backup.

🚧 Desafios Enfrentados
❌ Erro de conexão entre backend e banco: inicialmente, o backend não encontrava o serviço db. Resolvido ajustando as variáveis de ambiente e o nome do host para db, que é o nome do serviço no docker-compose.yml.

❌ Frontend não exibia os dados: erro na URL usada para o fetch. Foi necessário garantir que o backend estivesse rodando e respondendo corretamente.

❌ Persistência do banco: após reiniciar os containers, os dados sumiam. Foi resolvido adicionando o volume db_data.

❌ Problemas de rede entre containers: solucionado com a criação da rede Docker app-network.

❌ Ambiente de desenvolvimento confuso: dificuldade em entender onde rodar os comandos (docker exec, psql, etc.). Resolvido após entender a estrutura dos containers e como acessá-los.

🧠 Soluções Adotadas
Criação de rede personalizada entre os serviços.

Utilização de depends_on para garantir a ordem de inicialização correta.

Configuração adequada de variáveis de ambiente.

Testes diretos no container do banco (psql) para verificar o funcionamento da base.