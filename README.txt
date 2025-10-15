Reservas da Frota — Gmail (App Password) + PIN admin + banner
=================================================================
Arquivos:
- index.html (logo/banner no topo, título centralizado, campos obrigatórios, PIN para excluir)
- api/send.js (envio via Gmail SMTP usando App Password)
- api/verify-admin.js (valida PIN de admin)
- header-banner.png (suba este arquivo junto)
- package.json

Variáveis na Vercel (Production):
- GMAIL_USER      -> a conta Gmail (ex.: reservas.frota.unicred@gmail.com)
- GMAIL_APP_PASS  -> App Password de 16 caracteres (gerado em https://myaccount.google.com/apppasswords)
- RESERVAS_TO     -> e-mail central que vai RECEBER (pode ser o mesmo do GMAIL_USER)
- ADMIN_KEY       -> PIN para entrar como administrador

Depois de configurar, faça um Redeploy e teste.