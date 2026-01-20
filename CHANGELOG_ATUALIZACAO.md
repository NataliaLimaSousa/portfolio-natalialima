# Alterações da Landing Page - Natália Lima Sousa

## Resumo das Alterações Realizadas

### 1. Paleta de Cores Atualizada
- **Roxo Escuro**: #6558FE (cor primária)
- **Verde**: #93C0A4 (cor secundária/destaque)
- **Preto/Cinza**: #1a1a1a (fundo escuro), #2d2d2d (elementos), #f5f5f5 (fundo claro)
- Todas as cores foram atualizadas em todo o CSS para refletir a nova paleta

### 2. Hero Section Redesenhada
- Subtítulo alterado para: "Analista de Dados | Analista de Requisitos | Enfermeira"
- Nome "Natália" em verde (#93C0A4)
- Botão "Sobre mim" com âncora para #sobre-mim
- Imagem circular pronta para receber foto do backend
- Foto será carregada via JavaScript do localStorage (editável via backend)

### 3. Seção "Sobre Mim" Atualizada
- Título: "| Sobre mim:"
- Conteúdo profissional completo conforme especificado
- Palavras-chave destacadas em verde: "doutora", "professora", "analista de dados", "analista de requisitos"
- Números "7+" e "11+" destaque com tamanho grande em verde
- Seção "Principais Habilidades" com 5 cards:
  1. Análise de Dados / Análise de Requisitos
  2. Gestão Administrativa em Saúde
  3. Gestão de Projetos
  4. Dashboards | SQL | PowerBi | Excel | Figma
  5. Gestão em Saúde | Docência em Saúde

### 4. Experiência Profissional Completamente Atualizada
- Colmeia Soluções em Tecnologia (Abr/2025 – atual)
- UECE - Professora Convidada (Fev/2023 – atual)
- CEQUALE - Professora EaD (Mai/2023 - atual)
- Secretaria de Saúde do Estado do Ceará (Nov/2013 – Mai/2024)
- Cada experiência com descrição detalhada em formato de lista

### 5. Seções Removidas
- ❌ Seção "Projetos Destacados"
- ❌ Seção "Currículo"
- ✅ Mantida Seção "Formação Acadêmica" (4 itens principais)

### 6. Competências Técnicas Atualizadas
- Título alterado para "Competências Técnicas"
- Ferramentas: SQL, Power BI, Excel, Figma (com barras de progresso)
- Áreas de Expertise: Análise de Dados, Análise de Requisitos, Gestão Administrativa, Gestão de Projetos, Dashboards, etc.

### 7. Seção de Contato Atualizada
- Título: "| Entre em contato comigo:"
- ✅ Email: sousa.natalialima1@gmail.com
- ✅ LinkedIn: https://www.linkedin.com/in/natalialimasousa
- ✅ Currículo Lattes: http://lattes.cnpq.br/0772783308747982
- ❌ Telefone removido
- ❌ Localização removida

### 8. Modo Claro/Escuro Implementado
- Botão no canto superior direito da navbar
- Alterna entre lua (modo claro) e sol (modo escuro)
- Preferência salva no localStorage
- Toda a interface responsiva aos dois temas
- Cores completamente ajustadas para legibilidade em ambos os modos

### 9. Navegação Simplificada
- Links removidos: "Projetos", "Currículo"
- Links mantidos: "Home", "Sobre", "Experiência", "Contato"

### 10. Responsividade
- Layout otimizado para dispositivos móveis
- Menu hamburger funcional
- Tema toggle visível em todos os tamanhos de tela
- Grid responsivo para cards e conteúdo

## Estrutura de Cores

### Modo Claro
- Fundo: #ffffff / #f8f9fa
- Primária: #6558FE
- Secundária: #93C0A4
- Texto: #333333

### Modo Escuro
- Fundo: #0f0f0f / #1a1a1a
- Primária: #6558FE
- Secundária: #93C0A4
- Texto: #e0e0e0

## Funcionalidades de Backend

A landing page está preparada para integração com backend:

1. **Imagem do Hero**: Salva em `localStorage` com chave `heroImagePath`
2. **Tema Preferência**: Salva em `localStorage` com chave `theme`
3. Estrutura pronta para adicionar upload de imagens
4. Estrutura pronta para edição de conteúdos textuais

## Arquivos Modificados

- ✅ `index.html` - Estrutura HTML atualizada
- ✅ `styles.css` - Todos os estilos com novas cores e tema claro/escuro
- ✅ `script.js` - Funcionalidade de tema toggle adicionada

## Próximos Passos (Opcional)

Para integração com backend:
1. Criar endpoint para upload de imagem do hero
2. Criar endpoint para edição de conteúdos
3. Criar painel administrativo
4. Integrar com sistema de autenticação

---

**Última atualização**: 19 de Janeiro de 2026
