# Configuração de Página 404 e .htaccess

Este documento descreve como a página 404 e o .htaccess foram configurados para o projeto.

## Arquivos Criados

### 1. `src/app/not-found.tsx`
- Página 404 customizada do Next.js (App Router)
- Exibida automaticamente quando uma rota não é encontrada
- Design moderno com gradiente de cores
- Botões para voltar ao início ou página anterior
- Responsiva para mobile

**Como funciona:**
- Next.js detecta rotas inexistentes e renderiza automaticamente esta página
- Funciona apenas em produção (build estático ou servidor Next.js)

### 2. `.htaccess`
- Arquivo de configuração do servidor Apache
- Oferece otimizações e segurança adicionais

**Funcionalidades configuradas:**

#### Rewrite Rules
- Remove trailing slashes de URLs
- Remove extensão `.html` de URLs (se necessário)
- Redireciona URLs antigas

#### GZIP Compression
- Comprime arquivos HTML, CSS, JS e imagens SVG
- Reduz tamanho dos arquivos transferidos

#### Cache Management
- HTML: 1 dia de cache
- CSS/JS: 30 dias de cache
- Imagens: 1 ano de cache
- Fontes: 1 ano de cache

#### Security Headers
- `X-Content-Type-Options: nosniff` - Previne MIME type sniffing
- `X-Frame-Options: SAMEORIGIN` - Previne clickjacking
- `X-XSS-Protection` - Proteção contra XSS

#### Proteção de Arquivos
- Desabilita listagem de diretórios
- Protege arquivos sensíveis (.env, .git, package.json, etc)

### 3. `public/404.html`
- Página 404 estática como fallback
- Usada quando o servidor Apache precisa servir diretamente
- Mantém design consistente com a página dinâmica

## Instruções de Deploy

### Para Vercel (Recomendado para Next.js)
1. Faça deploy normal com `vercel deploy`
2. Vercel detecta automaticamente `not-found.tsx` e configura o 404
3. O `.htaccess` é ignorado (Vercel não usa Apache)

### Para Servidor com Apache
1. Coloque `.htaccess` na raiz do projeto público (web root)
2. Garanta que `mod_rewrite` está ativado no Apache:
   ```bash
   sudo a2enmod rewrite
   sudo a2enmod deflate
   sudo a2enmod expires
   sudo a2enmod headers
   sudo systemctl restart apache2
   ```

3. Configure o `<VirtualHost>` para permitir override:
   ```apache
   <Directory /var/www/html>
       AllowOverride All
   </Directory>
   ```

4. Certifique-se de que `public/404.html` existe no web root

### Para Outros Servidores

#### Nginx
Use este bloco no seu `server {}`:
```nginx
error_page 404 /404.html;
location = /404.html {
    internal;
}

# Enable gzip
gzip on;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
```

#### ISS (Windows)
- Use `web.config` em vez de `.htaccess`
- Next.js com `output: 'standalone'` é recomendado

## Comentários importantes

### Configurações desabilitadas no .htaccess
As seguintes linhas estão comentadas no `.htaccess` e podem ser ativadas conforme necessário:

```htaccess
# Redirecionar HTTP para HTTPS
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirecionar www para non-www
# RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
# RewriteRule ^(.*)$ https://%1/$1 [L,R=301]
```

Descomente conforme suas necessidades de segurança e configuração de domínio.

## Testando Localmente

### Next.js Development
```bash
npm run dev
# Visite uma rota inexistente, ex: http://localhost:3000/rota-inexistente
```

### Next.js Production (Recomendado)
```bash
npm run build
npm run start
# Visite uma rota inexistente
```

O build estático gera uma página 404 otimizada automaticamente.

## Checklist de Deploy

- [ ] Confirmar que `not-found.tsx` existe em `src/app/`
- [ ] Confirmar que `404.html` existe em `public/`
- [ ] Se usando Apache: colocar `.htaccess` no web root
- [ ] Se usando Apache: ativar módulos necessários
- [ ] Se usando Apache: permitir override no VirtualHost
- [ ] Testar página 404 em produção
- [ ] Verificar headers de cache com dev tools
- [ ] Testar compressão gzip com dev tools

## Recursos Adicionais

- [Next.js Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [Apache .htaccess Documentation](https://httpd.apache.org/docs/current/howto/htaccess.html)
- [HTTP Security Headers](https://owasp.org/www-project-secure-headers/)
- [Web Caching Best Practices](https://developers.google.com/web/tools/chrome-devtools/network/issues)
