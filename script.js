/**
 * XFOURTEEN CORPORATION - GOLDEN ROYAL EDITION
 * Premium Royal Animations & Effects
 */

// Configuration
const CONFIG = {
    qris: "assets/qris.jpg",
    wa: "628895823757",
    webhook: "https://discord.com/api/webhooks/1462093167619997953/YJoFvj1-gmkeDDT49akVa-gVTGxJr1SMLWni91-Pdtt0FiaZKxat7u4d8n-KaFI4lTit"
};

// Data Master
const PRODUCTS = [
    { id: 1, name: 'XFOURTEEN FLUXO', cat: 'ANDROID', price: 35000, img: 'assets/banner-ios.jpg', features: ['Royal Performance', 'Golden Aim Assist', 'Crystal Screen', 'Elite PPI and Density', 'Crown Crosshairs', 'Touch of Kings'], description: 'For those beginning their royal journey.', bestseller: false },
    { id: 2, name: 'XFOURTEEN EXONIC', cat: 'ANDROID', price: 70000, img: 'assets/banner-ios.jpg', features: ['Royal Performance', 'Golden Aim Assist', 'Crystal Screen', 'Elite PPI and Density', 'Crown Crosshairs', 'Touch of Kings'], description: 'For knights seeking glory.', bestseller: false },
    { id: 3, name: 'XFOURTEEN PREMIUM', cat: 'ANDROID', price: 100000, img: 'assets/banner-ios.jpg', features: ['Royal Performance', 'Golden Aim Assist', 'Crystal Screen', 'Elite PPI and Density', 'Crown Crosshairs', 'Touch of Kings'], description: 'The crown jewel of Android optimization.', bestseller: true },
    { id: 4, name: 'Comming Soon iOS', cat: 'IOS', price: 10000000, img: 'assets/banner-ios.jpg', features: ['Comming Soon', 'Comming Soon', 'Comming Soon'], description: 'Premium iOS optimization for the elite Comming Soon.', bestseller: false },
    { id: 5, name: 'XFOURTEEN BASIC', cat: 'PC', price: 30000, img: 'assets/banner-pc.jpg', features: ['Golden Mouse', 'Elite Optimization', 'Royal Emulator'], description: 'Basic royal settings for reliable performance.', bestseller: false },
    { id: 6, name: 'XFOURTEEN V1', cat: 'PC', price: 60000, img: 'assets/banner-pc.jpg', features: ['Royal Settings', 'Elite Pack', 'Crown Aim'], description: 'The ultimate royal configuration.', bestseller: true }
];

const FEATURES = [
    { icon: 'bolt', title: 'Royal Performance', desc: 'Maximum optimization for elite gameplay. Every setting calibrated for royalty.' },
    { icon: 'crosshairs', title: 'Golden Precision', desc: 'Scientific sensitivity calibration for accuracy that befits a king.' },
    { icon: 'shield-alt', title: 'Safe & Legal', desc: '100% safe, purely in-game settings. No bans, only glory.' }
];

const TEAM = [
    { name: 'DziyXFourteen', role: 'CEO & Founder & Developer', img: 'assets/team-dev.jpg', socials: { whatsapp: '628895823757', instagram: 'https://instagram.com/ghaziyinhere', tiktok: 'https://tiktok.com/xenzzsettings', discord: 'https://discord.gg/bekkmRDQXX' } }
];

// ============================================
// GOLD DUST PARTICLE SYSTEM
// ============================================
class GoldDustSystem {
    constructor() {
        this.canvas = document.getElementById('goldDustCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2.5 + 0.5,
                speedY: Math.random() * 0.8 + 0.2,
                opacity: Math.random() * 0.4 + 0.1,
                wiggle: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => {
            p.y += p.speedY;
            p.wiggle += 0.03;
            const xOffset = Math.sin(p.wiggle) * 0.8;
            
            if (p.y > this.canvas.height) {
                p.y = 0;
                p.x = Math.random() * this.canvas.width;
            }
            
            this.ctx.beginPath();
            this.ctx.arc(p.x + xOffset, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * (0.6 + Math.sin(p.wiggle) * 0.2)})`;
            this.ctx.fill();
        });
        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// PARTICLE SYSTEM
// ============================================
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0, radius: 180 };
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        this.bindEvents();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const count = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 14000));
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: Math.random() * 0.4 - 0.2,
                speedY: Math.random() * 0.4 - 0.2,
                color: `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.1})`,
                originalX: Math.random() * this.canvas.width,
                originalY: Math.random() * this.canvas.height,
                wiggle: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => {
            p.wiggle += 0.02;
            const xOffset = Math.sin(p.wiggle) * 0.3;
            const yOffset = Math.cos(p.wiggle) * 0.3;
            
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < this.mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (this.mouse.radius - dist) / this.mouse.radius;
                p.x -= Math.cos(angle) * force * 1.8;
                p.y -= Math.sin(angle) * force * 1.8;
            }
            
            p.x += (p.originalX - p.x) * 0.04;
            p.y += (p.originalY - p.y) * 0.04;
            p.x += p.speedX + xOffset * 0.1;
            p.y += p.speedY + yOffset * 0.1;
            
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
            
            this.particles.forEach(other => {
                const dx = p.x - other.x, dy = p.y - other.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 90) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(212, 175, 55, ${0.08 * (1 - dist / 90)})`;
                    this.ctx.lineWidth = 0.4;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            });
        });
        requestAnimationFrame(() => this.animate());
    }

    bindEvents() {
        window.addEventListener('resize', () => { this.resize(); this.createParticles(); });
        window.addEventListener('mousemove', (e) => { this.mouse.x = e.x; this.mouse.y = e.y; });
    }
}

// ============================================
// MOUSE TRAIL - GOLDEN
// ============================================
class MouseTrail {
    constructor() {
        this.canvas = document.getElementById('mouseTrailCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.trail = [];
        this.maxTrail = 15;
        this.init();
    }

    init() {
        this.resize();
        this.animate();
        this.bindEvents();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addPoint(x, y) {
        this.trail.push({ x, y, life: 1 });
        if (this.trail.length > this.maxTrail) this.trail.shift();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.trail.length; i++) {
            const p = this.trail[i];
            p.life -= 0.04;
            if (p.life <= 0) { this.trail.splice(i, 1); i--; continue; }
            const radius = 7 * p.life;
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
            gradient.addColorStop(0, `rgba(212, 175, 55, ${0.8 * p.life})`);
            gradient.addColorStop(0.5, `rgba(212, 175, 55, ${0.4 * p.life})`);
            gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }
        requestAnimationFrame(() => this.animate());
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.addPoint(e.clientX, e.clientY));
    }
}

// ============================================
// CURSOR GLOW - ROYAL
// ============================================
class CursorGlow {
    constructor() {
        this.cursor = null;
        this.init();
    }

    init() {
        this.cursor = document.createElement('div');
        this.cursor.classList.add('cursor-glow');
        document.body.appendChild(this.cursor);
        
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
            this.cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
        });
        
        const interactiveElements = document.querySelectorAll('a, button, .btn-royal-primary, .btn-royal-secondary, .tab-royal, .contact-royal, #product-grid > div');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.width = '50px';
                this.cursor.style.height = '50px';
                this.cursor.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(212, 175, 55, 0) 70%)';
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.style.width = '30px';
                this.cursor.style.height = '30px';
                this.cursor.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0) 70%)';
            });
        });
    }
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
class TypeWriter {
    constructor(element, texts, delay = 100, pause = 2500) {
        this.element = element;
        this.texts = texts;
        this.delay = delay;
        this.pause = pause;
        this.currentIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const fullText = this.texts[this.currentIndex];
        
        if (this.isDeleting) {
            this.currentText = fullText.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = fullText.substring(0, this.currentText.length + 1);
        }
        
        this.element.innerHTML = this.currentText;
        
        let speed = this.isDeleting ? this.delay / 2 : this.delay;
        
        if (!this.isDeleting && this.currentText === fullText) {
            speed = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;
            speed = this.delay;
        }
        
        setTimeout(() => this.type(), speed);
    }
}

// ============================================
// RIPPLE EFFECT
// ============================================
function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.5s ease';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '999';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.transform = 'scale(2)';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
}

// ============================================
// DOM READY
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    // Initialize All Effects
    new CursorGlow();
    new GoldDustSystem();
    new ParticleSystem();
    new MouseTrail();
    
    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        new TypeWriter(typewriterElement, [
        'Optimize Your Free Fire Experience',
        'Best Sensitivity Settings',
        'Designed for Players',
        'Elevate Your Game to Throne Level'
        ], 80, 2500);
    }
    
    // Render Features
    const fc = document.getElementById('features-container');
    if (fc) {
        fc.innerHTML = FEATURES.map((f) => `
            <div class="stagger-item bg-gradient-to-br from-royal-dark to-royal-darker p-8 rounded-2xl border border-gold-500/20 text-center hover:border-gold-500/50 transition-all duration-500 transform hover:-translate-y-2">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-5">
                    <i class="fas fa-${f.icon} text-gold-500 text-2xl"></i>
                </div>
                <h3 class="text-white font-bold text-lg mb-3 font-cormorant">${f.title}</h3>
                <p class="text-gold-300/60 text-sm leading-relaxed">${f.desc}</p>
            </div>
        `).join('');
    }
    
    // Render Team
    const tg = document.getElementById('team-grid');
    if (tg) {
        tg.innerHTML = TEAM.map(t => `
            <div class="stagger-item bg-gradient-to-br from-royal-dark to-royal-darker p-8 rounded-2xl border border-gold-500/20 text-center group hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2">
                <div class="relative mb-5">
                    <div class="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative w-24 h-24 rounded-full border-2 border-gold-500/30 p-1 mx-auto overflow-hidden group-hover:border-gold-500 transition-all duration-500">
                        <img src="${t.img}" class="w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-500" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}'">
                    </div>
                    <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-gold-600 to-amber-600 rounded-full flex items-center justify-center text-royal-dark text-xs">
                        <i class="fas fa-crown"></i>
                    </div>
                </div>
                <h3 class="text-white font-bold text-lg mb-1 font-cormorant">${t.name}</h3>
                <p class="text-gold-500 text-[10px] font-bold uppercase tracking-wider mb-3">${t.role}</p>
                <div class="flex gap-3 justify-center">
                    ${t.socials.whatsapp ? `<a href="https://wa.me/${t.socials.whatsapp}" target="_blank" class="w-9 h-9 rounded-full bg-green-500/10 hover:bg-green-500 flex items-center justify-center text-green-500 hover:text-white transition-all hover:scale-110"><i class="fab fa-whatsapp"></i></a>` : ''}
                    ${t.socials.instagram ? `<a href="${t.socials.instagram}" target="_blank" class="w-9 h-9 rounded-full bg-pink-500/10 hover:bg-pink-500 flex items-center justify-center text-pink-500 hover:text-white transition-all hover:scale-110"><i class="fab fa-instagram"></i></a>` : ''}
                    ${t.socials.tiktok ? `<a href="${t.socials.tiktok}" target="_blank" class="w-9 h-9 rounded-full bg-black/10 hover:bg-black flex items-center justify-center text-gold-300/60 hover:text-white transition-all hover:scale-110"><i class="fab fa-tiktok"></i></a>` : ''}
                    ${t.socials.discord ? `<a href="${t.socials.discord}" target="_blank" class="w-9 h-9 rounded-full bg-indigo-500/10 hover:bg-indigo-500 flex items-center justify-center text-indigo-400 hover:text-white transition-all hover:scale-110"><i class="fab fa-discord"></i></a>` : ''}
                </div>
            </div>
        `).join('');
    }
    
    filterProducts('ANDROID');
    
    // Add Ripple Effect to all buttons
    const buttons = document.querySelectorAll('.btn-royal-primary, .btn-royal-secondary, .tab-royal');
    buttons.forEach(btn => addRippleEffect(btn));
    
    // Mobile Menu
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            mobileMenu.style.transform = isOpen ? 'translateY(-100%)' : 'translateY(0)';
            mobileMenu.style.opacity = isOpen ? '0' : '1';
            mobileMenu.classList.toggle('open');
        });
        
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && mobileMenu.classList.contains('open')) {
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
                mobileMenu.classList.remove('open');
            }
        });
        
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
                mobileMenu.classList.remove('open');
            });
        });
    }
    
    // Scroll Animations
    const backToTop = document.getElementById('backToTop');
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (backToTop) {
            backToTop.style.opacity = window.scrollY > 400 ? '1' : '0';
            backToTop.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(20px)';
        }
        if (nav && window.scrollY > 80) nav.style.transform = 'translateY(0)';
        else if (nav) nav.style.transform = 'translateY(0)';
    });
    
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        });
    });
    
    // Loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                if (nav) nav.style.transform = 'translateY(0)';
            }, 500);
        }, 2000);
    }
});

// Filter Products - Update Bestseller Badge
function filterProducts(cat) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    const filtered = PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = filtered.map(p => `
        <div class="stagger-item group bg-gradient-to-br from-royal-dark to-royal-darker p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            ${p.bestseller ? `
                <div class="absolute top-3 right-3 z-20">
                    <span class="bg-gradient-to-r from-amber-500 to-gold-500 text-royal-dark text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5" style="background: linear-gradient(135deg, #ffdd77, #ffd966, #ffea8a); box-shadow: 0 0 15px rgba(255, 221, 119, 0.8);">
                        <i class="fas fa-crown text-[8px]"></i> BESTSELLER
                    </span>
                </div>
            ` : ''}
            <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-royal-dark">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" onerror="this.src='https://placehold.co/500x280/1a1a1a/d4af37?text=XFOURTEEN'">
                <div class="absolute inset-0 bg-gradient-to-t from-royal-darker/80 via-transparent to-transparent"></div>
            </div>
            <div class="mb-5">
                <h3 class="text-white font-bold text-lg mb-2 font-cormorant">${p.name}</h3>
                <p class="text-gold-300/60 text-sm mb-3">${p.description}</p>
                <ul class="space-y-1">
                    ${p.features.slice(0, 3).map(f => `<li class="text-[11px] text-gold-300/50 flex items-center gap-2"><i class="fas fa-crown text-gold-500 text-[8px]"></i> ${f}</li>`).join('')}
                    ${p.features.length > 3 ? `<li class="text-[11px] text-gold-300/40">+${p.features.length - 3} more features</li>` : ''}
                </ul>
            </div>
            <div class="mb-5">
                <p class="text-gold-300/40 text-[10px] font-semibold uppercase tracking-wider mb-1">Royal Tribute</p>
                <p class="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500 font-bold text-2xl">Rp ${p.price.toLocaleString('id-ID')}</p>
            </div>
            <button onclick="openPayment(${p.id})" class="w-full btn-royal-primary justify-center py-3">
                <i class="fas fa-crown mr-2"></i> Acquire Royal Item
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.tab-royal').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${cat}`);
    if (activeTab) activeTab.classList.add('active');
}

let currentOrder = null;

function openPayment(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    currentOrder = { ...p, orderId: 'ROYAL' + Date.now().toString().slice(-8) };
    document.getElementById('qris-img').src = 'assets/qris.jpg';
    document.getElementById('pay-product').innerText = p.name;
    document.getElementById('pay-amount').innerText = "Rp " + p.price.toLocaleString('id-ID');
    const modal = document.getElementById('payment-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    showToast(`Added ${p.name} to Royal Treasury`);
}

function closePayment() {
    const modal = document.getElementById('payment-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

function confirmToWA() {
    if (!currentOrder) return;
    const text = `*ROYAL CONFIRMATION - XFOURTEEN CORPORATION*\n\n👑 Order ID: #${currentOrder.orderId}\n🏆 Royal Item: ${currentOrder.name}\n💰 Tribute: Rp ${currentOrder.price.toLocaleString('id-ID')}\n\nHail to the King! I have completed the royal tribute. Please process my order.`;
    window.open(`https://api.whatsapp.com/send?phone=${CONFIG.wa}&text=${encodeURIComponent(text)}`);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.remove('hide');
    toast.style.transform = 'translateX(0)';
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
        }, 400);
    }, 3000);
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) window.scrollTo({ top: section.offsetTop - 70, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function sendToDiscord() {
    const name = document.getElementById('webhook-name');
    const phone = document.getElementById('webhook-phone');
    const msg = document.getElementById('webhook-msg');
    const btn = document.getElementById('webhook-btn');
    
    if (!name.value.trim() || !phone.value.trim() || !msg.value.trim()) {
        showToast("Please fill in all fields, noble one!");
        return;
    }
    
    const original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> SENDING ROYAL MESSAGE...`;
    
    try {
        const res = await fetch(CONFIG.webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: "XFOURTEEN ROYAL COURT",
                avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                embeds: [{
                    title: "👑 Royal Audience Request",
                    color: 0xd4af37,
                    fields: [
                        { name: "🏰 Noble Name", value: `\`\`\`${name.value}\`\`\``, inline: true },
                        { name: "📱 Royal Contact", value: `\`\`\`${phone.value}\`\`\``, inline: true },
                        { name: "📜 Royal Message", value: msg.value.substring(0, 1000), inline: false }
                    ],
                    footer: { text: "XFOURTEEN ROYAL COURT • " + new Date().toLocaleString('id-ID') },
                    timestamp: new Date().toISOString()
                }]
            })
        });
        
        if (res.ok) {
            showToast("Royal message delivered! The court will respond.");
            name.value = "";
            phone.value = "";
            msg.value = "";
        } else {
            throw new Error();
        }
    } catch (e) {
        showToast("Failed to deliver message. Send directly to Royal WhatsApp.");
    } finally {
        btn.disabled = false;
        btn.innerHTML = original;
    }
}
