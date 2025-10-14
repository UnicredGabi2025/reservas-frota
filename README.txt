Reservas da Frota — Envio de e-mail (Microsoft 365 via Vercel)
===================================================================

Arquivos incluídos:
- index.html  → página com Nome e E-mail + chamada a /api/send
- api/send.js → função serverless Vercel (nodemailer + Office 365)
- package.json→ dependência 'nodemailer'

Como usar:
1) Suba estes arquivos no seu repositório (substitua o index.html atual).
2) Na Vercel (Project → Settings → Environment Variables), configure:
   - M365_USER = reservas@unicred.com.br
   - M365_PASS = (senha ou App Password)
3) Faça um commit para gerar novo deploy.
4) Abra o site, crie uma reserva e valide a chegada do e-mail.

Dica: Se você usa 'header-banner.png' no topo, mantenha esse arquivo na raiz.
