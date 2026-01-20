# Guia de Uso - Edição de Conteúdo

## Como Adicionar Sua Foto de Perfil

Atualmente, a imagem do hero está configurada para carregar via JavaScript. Aqui estão as opções:

### Opção 1: Colocar a Imagem em uma Pasta (Mais Simples)
1. Crie uma pasta chamada `images` na raiz do projeto
2. Coloque sua foto com o nome `hero-image.jpg`
3. Abra o arquivo `script.js` e procure por:
   ```javascript
   const heroImage = document.getElementById('heroImage');
   const savedImagePath = localStorage.getItem('heroImagePath');
   if (savedImagePath) {
       heroImage.src = savedImagePath;
   }
   ```
4. Adicione antes desta linha:
   ```javascript
   // Caminho padrão da imagem
   heroImage.src = 'images/hero-image.jpg';
   ```

### Opção 2: URL Direta do Google Drive
1. Acesse seu Google Drive
2. Faça upload da imagem
3. Clique com botão direito > Abrir link em nova aba para obter o link público
4. Copie o ID da imagem da URL
5. Use no script:
   ```javascript
   heroImage.src = 'https://drive.google.com/uc?id=SEU_ID_AQUI&export=download';
   ```

## Estrutura do Projeto

```
Landing Page teste/
├── index.html              # Arquivo HTML principal
├── styles.css              # Estilos CSS (com paleta roxo/verde/cinza)
├── script.js               # JavaScript (com tema claro/escuro)
├── images/                 # Pasta para imagens (crie se necessário)
│   └── hero-image.jpg      # Sua foto (adicione)
├── CHANGELOG_ATUALIZACAO.md # Registro de mudanças
├── DICAS_DESENVOLVIMENTO.md
├── EMAIL_INTEGRATION.html
├── PERSONALIZACOES.html
└── README.md
```

## Funcionalidades Implementadas

### ✅ Tema Claro/Escuro
- Botão no canto superior direito
- Preferência salva automaticamente
- Alternância suave entre temas

### ✅ Cores da Paleta
- Roxo Escuro: #6558FE
- Verde: #93C0A4
- Preto/Cinza: #1a1a1a, #2d2d2d

### ✅ Responsividade
- Desktop
- Tablet
- Móvel

### ✅ Seções
- Hero (Abertura)
- Sobre Mim
- Experiência Profissional
- Formação Acadêmica
- Competências Técnicas
- Contato

## Como Editar Textos

Todos os textos estão no arquivo `index.html`. Procure pelas tags e edite diretamente:

### Exemplo: Alterar Nome
Procure por:
```html
<h2>Olá, meu nome é <span class="green-text">Natália</span> Lima Sousa</h2>
```

### Exemplo: Alterar Email
Procure por:
```html
<a href="mailto:sousa.natalialima1@gmail.com">sousa.natalialima1@gmail.com</a>
```

## Dicas de Personalização

1. **Mudar Cores**: Edite as variáveis CSS em `styles.css`:
   ```css
   :root {
       --primary-color: #6558FE;
       --secondary-color: #93C0A4;
   }
   ```

2. **Adicionar Redes Sociais**: Procure por `social-links` no footer

3. **Mudar Fontes**: Altere `font-family` em `body`

4. **Ajustar Espaçamento**: Edite valores de `padding` e `margin`

## Testes Recomendados

1. Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge)
2. Teste responsividade no DevTools do navegador (F12)
3. Teste o toggle de tema
4. Teste todos os links de navegação
5. Verifique se as imagens carregam corretamente

## Suporte

Para ajuda com as alterações, consulte os comentários no código:
- `index.html` - Estrutura HTML
- `styles.css` - Estilos visuais
- `script.js` - Interatividade

---

**Desenvolvido em**: 19 de Janeiro de 2026
