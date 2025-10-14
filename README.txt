Reservas da Frota — Núcleo Estratégico
=======================================

Como publicar na Vercel (método simples, sem instalar nada):

1) Acesse https://vercel.com e faça login.
2) Clique em "Add New..." > "Project" > "Import".
3) Arraste e solte esta pasta ZIP inteira.
4) Vercel vai perguntar a framework: escolha "Other" (ou deixe a detecção automática). Confirme o deploy.
5) Pronto! Pegue a URL gerada e compartilhe com sua equipe.

Como testar localmente (opcional):
- Basta abrir o arquivo index.html no navegador.

Login Google + sincronização em tempo real (opcional):
1) Crie um projeto no Firebase (firestore + auth Google).
2) No arquivo index.html, preencha o objeto FIREBASE_CONFIG (apiKey, authDomain, projectId).
3) Recarregue a página: aparecerá o botão "Entrar com Google".
4) As reservas passam a salvar/ler em tempo real na coleção 'reservas_frota' do Firestore.

Veículos fixos:
- Virtus Cinza (RYD2D70)
- Virtus Preto (RYD2B90)

Campos da reserva:
- Veículo, Destino, Data/Hora início e fim, Motorista

Funções:
- Agenda (6 meses), Lista de reservas, Exportar CSV, Exclusão, Detecção de conflitos.
