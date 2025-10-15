Reservas da Frota — Campos obrigatórios + Exclusão só por admin
===================================================================
Novidades:
- Todos os campos do formulário são obrigatórios (Nome, Destino, Início, Fim e Veículo).
- Para excluir uma reserva, é preciso entrar no modo administrador (PIN).

Como funciona o admin:
- No topo direito há o botão "Entrar como administrador".
- Informe o PIN (verificado no servidor, sem expor no front).
- Ao validar, a sessão atual habilita os botões "Excluir".
- Para sair, use "Sair do modo admin".

Variáveis na Vercel (Project → Settings → Environment Variables):
- M365_USER   -> remetente (ex.: reservas@unicred.com.br)
- M365_PASS   -> senha ou App Password
- RESERVAS_TO -> destinatário central (ex.: reservas.unicred@gmail.com)
- ADMIN_KEY   -> PIN que você usará para entrar como admin (ex.: 123456)

Observação importante:
- As reservas continuam salvas no navegador (localStorage). Para segurança forte e multiusuário real,
  considere migrar depois para um backend (ex.: Google Planilhas/Apps Script ou banco no Vercel).