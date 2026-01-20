# Preparação para Backend - Landing Page

## 📋 Estrutura Recomendada para Gerenciamento de Conteúdo

### Dados Editáveis no Banco de Dados

Recomenda-se criar uma tabela/collection no seu banco de dados:

```
Tabela: portfolio_content

Campos:
├── id (UUID/String)
├── section (String) - hero, about, skills, experience, contact
├── key (String) - field_name
├── content (Text) - conteúdo do campo
├── image_url (String) - para imagens
├── type (String) - text, html, image, link
├── updated_at (DateTime)
└── created_at (DateTime)
```

### Exemplo de Registros

```json
{
  "section": "hero",
  "key": "subtitle",
  "content": "Analista de Dados | Analista de Requisitos | Enfermeira",
  "type": "text"
}

{
  "section": "hero",
  "key": "hero_image",
  "image_url": "https://example.com/images/hero.jpg",
  "type": "image"
}

{
  "section": "about",
  "key": "main_text",
  "content": "Seja muito bem-vindo...",
  "type": "html"
}
```

## 🔧 API Endpoints Sugeridos

### GET - Carregar Conteúdo
```
GET /api/portfolio/content/:section
Retorna todos os conteúdos de uma seção

Exemplo:
GET /api/portfolio/content/hero
```

### POST - Criar/Atualizar Conteúdo
```
POST /api/portfolio/content
Body: {
  "section": "hero",
  "key": "subtitle",
  "content": "Novo conteúdo",
  "type": "text"
}
```

### PUT - Atualizar Conteúdo
```
PUT /api/portfolio/content/:id
Body: { "content": "Conteúdo atualizado" }
```

### DELETE - Remover Conteúdo
```
DELETE /api/portfolio/content/:id
```

### POST - Upload de Imagem
```
POST /api/portfolio/upload
FormData: { "file": File, "section": "hero", "key": "hero_image" }
Retorna: { "url": "https://..." }
```

## 🎨 Campos Editáveis Identificados

### Hero Section
- [ ] `subtitle` - "Analista de Dados | Analista de Requisitos | Enfermeira"
- [ ] `hero_image` - Imagem circular

### Sobre Mim
- [ ] `main_text` - Texto principal
- [ ] `experience_years_data` - "7+"
- [ ] `experience_years_admin` - "11+"

### Experiência
- [ ] `job_1_title` - Colmeia Soluções em Tecnologia
- [ ] `job_1_position` - Analista de Dados / Analista de Requisitos
- [ ] `job_1_date` - Abr/2025 – Atual
- [ ] `job_1_description` - Descrição com tasks

(E assim para cada experiência...)

### Skills
- [ ] `skill_names` - Array de nomes de skills
- [ ] `skill_percentage` - Array de percentuais

### Contato
- [ ] `email` - sousa.natalialima1@gmail.com
- [ ] `linkedin` - URL do LinkedIn
- [ ] `lattes` - URL do Lattes

## 💾 Exemplo de Implementação Frontend

### Carregar Conteúdo do Backend

```javascript
// No início do script.js
async function loadPortfolioContent() {
    try {
        const response = await fetch('/api/portfolio/content');
        const content = await response.json();
        
        // Atualizar elementos
        content.forEach(item => {
            const selector = `[data-content="${item.section}-${item.key}"]`;
            const element = document.querySelector(selector);
            if (element) {
                if (item.type === 'image') {
                    element.src = item.image_url;
                } else if (item.type === 'html') {
                    element.innerHTML = item.content;
                } else {
                    element.textContent = item.content;
                }
            }
        });
    } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
    }
}

// Chamar ao carregar a página
document.addEventListener('DOMContentLoaded', loadPortfolioContent);
```

### Atualizar HTML para Suportar Backend

Adicione `data-content` aos elementos:

```html
<!-- Hero -->
<p class="hero-subtitle" data-content="hero-subtitle">
    Analista de Dados | Analista de Requisitos | Enfermeira
</p>
<img id="heroImage" data-content="hero-image" />

<!-- Sobre -->
<div class="about-text" data-content="about-main">
    Seja muito bem-vindo...
</div>

<!-- Email -->
<a href="mailto:sousa.natalialima1@gmail.com" data-content="contact-email">
    sousa.natalialima1@gmail.com
</a>
```

## 🔐 Segurança

### Recomendações
1. **Autenticação**: Implemente JWT ou sessão
2. **Autorização**: Apenas o proprietário pode editar
3. **Validação**: Valide entrada no backend
4. **Sanitização**: Sanitize HTML se permitido
5. **Rate Limiting**: Limite requisições de upload
6. **CORS**: Configure CORS adequadamente

### Exemplo de Middleware de Autenticação
```javascript
// Verificar se usuário está autenticado
async function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
```

## 📦 Stack Recomendado

### Backend
- **Node.js** + Express
- **MongoDB** ou **PostgreSQL**
- **Multer** para upload de arquivos
- **JWT** para autenticação
- **Cors** para requisições

### Storage
- **AWS S3** ou **Cloudinary** para imagens
- **Firebase Storage** como alternativa

## 🧪 Teste de Integração

```bash
# Testar upload de imagem
curl -X POST http://localhost:3000/api/portfolio/upload \
  -F "file=@hero.jpg" \
  -F "section=hero" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Testar atualização de conteúdo
curl -X PUT http://localhost:3000/api/portfolio/content/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"content": "Novo conteúdo"}'
```

## 📝 Próximos Passos

1. [ ] Criar banco de dados
2. [ ] Implementar endpoints API
3. [ ] Criar middleware de autenticação
4. [ ] Implementar upload de arquivos
5. [ ] Criar painel administrativo
6. [ ] Integrar com frontend
7. [ ] Testar todas as funcionalidades
8. [ ] Deploy em produção

---

**Documentação Criada**: 19 de Janeiro de 2026
