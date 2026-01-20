# Landing Page - Portfólio de Natália Lima Sousa

Uma landing page moderna e responsiva para apresentar o portfólio profissional de Natália Lima Sousa, especialista em Saúde Coletiva, Economia da Saúde e Tecnologia em Saúde.

## 📋 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Seções Completas**:
  - Home com hero section
  - Sobre (biografía e áreas de atuação)
  - Experiência profissional (timeline)
  - Formação acadêmica
  - Competências técnicas
  - Projetos destacados
  - Currículo
  - Formulário de contato
  - Footer com redes sociais

- **Funcionalidades JavaScript**:
  - Menu hamburguer para mobile
  - Animações ao scroll
  - Smooth scroll para navegação
  - Formulário de contato com validação
  - Indicador de seção ativa no menu
  - Animação de barras de progresso
  - Contador de visitantes

## 🎨 Design

- **Cores Profissionais**: Azul, cinza e vermelho
- **Tipografia**: Segoe UI para melhor legibilidade
- **Ícones**: Font Awesome 6.4.0
- **Gradientes**: Visuais modernos e atraentes
- **Sombras**: Efeito de profundidade

## 📁 Estrutura dos Arquivos

```
Landing Page teste/
├── index.html       # Arquivo HTML principal
├── styles.css       # Estilos CSS
├── script.js        # Funcionalidades JavaScript
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir a Página
Simply open `index.html` in your web browser.

### 2. Personalizar Informações

Abra `index.html` e edite as seguintes seções conforme necessário:

- **Contato**: Procure pela seção `#contato` e atualize:
  - Email
  - Telefone
  - Links de redes sociais

- **Currículo**: Procure pela seção `#curriculo` e atualize os links para:
  - PDF do currículo
  - Link do LinkedIn
  - Outros links relevantes

- **Projetos**: Adicione ou remova projetos na seção `#projetos` conforme necessário

### 3. Integração de Email

Para habilitar o envio de emails através do formulário de contato, você pode integrar com:

- **EmailJS** (recomendado para facilidade)
- **Um backend próprio** (Node.js, Python, etc.)
- **Outros serviços** (SendGrid, Mailgun, etc.)

#### Com EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Adicione este código em `script.js`:

```javascript
emailjs.init("SUA_PUBLIC_KEY");

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
        from_name: this.querySelector('input[type="text"]').value,
        from_email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    }).then(response => {
        alert('Email enviado com sucesso!');
        this.reset();
    }).catch(error => {
        alert('Erro ao enviar email');
        console.error(error);
    });
});
```

3. Adicione o script do EmailJS ao final de `index.html`:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

## 🔧 Personalizações

### Mudar Cores

Abra `styles.css` e altere as variáveis CSS no topo do arquivo:

```css
:root {
    --primary-color: #2c3e50;      /* Azul escuro */
    --secondary-color: #3498db;    /* Azul claro */
    --accent-color: #e74c3c;       /* Vermelho */
    --light-color: #ecf0f1;        /* Cinza claro */
    --dark-color: #2c3e50;         /* Cinza escuro */
    --text-color: #333;            /* Texto */
}
```

### Adicionar Novas Seções

1. Adicione a seção HTML em `index.html`
2. Adicione o link no menu de navegação
3. Crie os estilos CSS correspondentes em `styles.css`

### Modificar Animações

As animações estão definidas em `styles.css`. Procure por `@keyframes` para modificar.

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:
- Desktop: 1200px e acima
- Tablet: 769px a 1199px
- Mobile: 480px a 768px
- Small Mobile: até 480px

## 🌐 Hospedagem

Você pode hospedar esta landing page em:

- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)
- **Firebase Hosting**
- **Seu próprio servidor**

### Com GitHub Pages:

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá para Settings → Pages
4. Selecione a branch e salve
5. Sua página estará disponível em: `seu-usuario.github.io/nome-repo`

## 🎯 Checklist de Implementação

- [ ] Atualizar informações de contato
- [ ] Adicionar foto/imagem profissional (substitua o placeholder)
- [ ] Integrar envio de emails
- [ ] Atualizar links de redes sociais
- [ ] Adicionar links para PDFs/documentos
- [ ] Testar em diferentes navegadores
- [ ] Testar em diferentes dispositivos
- [ ] Otimizar imagens
- [ ] Testar formulário de contato

## 🐛 Troubleshooting

### Menu não funciona no mobile
- Verifique se o arquivo `script.js` está carregado corretamente
- Verifique o console do navegador (F12) para erros

### Estilos não aparecem
- Verifique se `styles.css` está no mesmo diretório
- Limpe o cache do navegador (Ctrl+F5)

### Emails não são enviados
- Verifique a integração com o serviço de email
- Verifique o console para mensagens de erro
- Valide que todas as chaves de API estão corretas

## 📞 Suporte

Para questões ou dúvidas sobre a landing page, verifique:
- A documentação do projeto
- Os comentários no código
- O console do navegador para erros

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para usar e modificar conforme necessário.

## ✨ Melhorias Futuras

- [ ] Blog/Seção de artigos
- [ ] Galeria de projetos com imagens
- [ ] Sistema de download de currículo
- [ ] Integração com analytics
- [ ] Dark mode
- [ ] Multi-idioma
- [ ] Certificados/Badges
- [ ] Depoimentos/Recomendações

---

**Desenvolvido com ❤️ para Natália Lima Sousa**
