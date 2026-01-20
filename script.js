// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(currentTheme);

if (currentTheme === 'dark-mode') {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Menu Hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Carregar imagem do hero
const heroImage = document.getElementById('heroImage');
// Carrega imagem da pasta local
heroImage.src = 'images/hero-image.jpg';
// Se houver imagem salva no localStorage, usa ela
const savedImagePath = localStorage.getItem('heroImagePath');
if (savedImagePath) {
    heroImage.src = savedImagePath;
}

// Função para animar elementos quando chegam à view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards
document.querySelectorAll('.skill-card, .project-card, .education-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envio de email
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validação básica
        if (name && email && message) {
            // Enviar para email (usando mailto)
            const mailtoLink = `mailto:sousa.natalialima1@gmail.com?subject=Novo contato de ${encodeURIComponent(name)}&body=Nome: ${encodeURIComponent(name)}%0DEmail: ${encodeURIComponent(email)}%0D%0DMensagem:%0D${encodeURIComponent(message)}`;
            
            // Abre o cliente de email padrão
            window.location.href = mailtoLink;
            
            // Mostrar mensagem
            alert(`Obrigado ${name}! Sua mensagem foi preparada. Seu cliente de email será aberto.`);
            
            // Limpar formulário
            this.reset();
        }
    });
}

// Animação de scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Animação das barras de progresso quando entram na view
const progressBars = document.querySelectorAll('.progress');
let animated = false;

const animateProgressBars = () => {
    if (!animated) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        animated = true;
    }
};

const skillsSection = document.querySelector('.technical-skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe de animação aos elementos
const style = document.createElement('style');
style.textContent = `
    .skill-card,
    .project-card,
    .education-card,
    .timeline-item {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animated {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// Contador de visitantes (opcional)
function initializeVisitorCounter() {
    let visitors = localStorage.getItem('visitors');
    if (!visitors) {
        visitors = 0;
    }
    visitors = parseInt(visitors) + 1;
    localStorage.setItem('visitors', visitors);
    console.log(`Total de visitantes: ${visitors}`);
}

initializeVisitorCounter();

// Função para destacar seção ativa no menu
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Adicionar estilo para link ativo
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-menu a.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(activeStyle);

// Função para copiar email para clipboard (opcional)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email copiado para clipboard!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Adicionar efeito de ripple aos botões
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Lazy loading para imagens (se adicionadas)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Função para enviar email (integração com backend seria necessária)
async function sendEmail(name, email, message) {
    try {
        // Aqui você integraria com um serviço como EmailJS ou um backend próprio
        // Exemplo com fetch para um backend:
        /*
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        
        if (response.ok) {
            console.log('Email enviado com sucesso');
        }
        */
        
        console.log(`Email de ${name} recebido`);
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
}

// Validação de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Atualizar ano no footer
const year = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.textContent = `© ${year} Natália Lima Sousa. Todos os direitos reservados.`;
}
