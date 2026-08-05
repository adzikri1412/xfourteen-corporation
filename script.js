// SECURITY & ANTI-DEVTOOLS
(function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === 82) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 82) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.key === 'F5' || e.keyCode === 116) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 69) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === 46) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode === 78) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        if (e.ctrlKey && e.keyCode === 78) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('paste', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
        }
        img, video, iframe, canvas {
            pointer-events: none !important;
            -webkit-user-drag: none !important;
            user-drag: none !important;
        }
        body {
            -webkit-touch-callout: none !important;
        }
        .btn-royal-primary, .btn-royal-secondary, .tab-royal, .contact-royal-glossy, #product-grid > div {
            pointer-events: auto !important;
        }
    `;
    document.head.appendChild(style);

    function detectDevTools() {
        const before = new Date().getTime();
        debugger;
        const after = new Date().getTime();
        if (after - before > 100) {
            document.body.innerHTML = `
                <div style="background: black; color: white; text-align: center; padding: 50px; font-family: monospace; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h1 style="font-size: 48px;">DEVTOOLS DETECTED</h1>
                    <p style="font-size: 24px; margin-top: 20px;">You think you can inspect XFOURTEEN CORPORATION?</p>
                    <p style="font-size: 20px; color: #666666;">GO BACK TO SCHOOL</p>
                    <button onclick="location.reload()" style="margin-top: 30px; padding: 10px 20px; background: white; color: black; border: none; cursor: pointer; border-radius: 5px;">RELOAD</button>
                </div>
            `;
            document.body.style.overflow = 'hidden';
            throw new Error('DevTools detected');
        }
        setTimeout(detectDevTools, 500);
    }
    setTimeout(detectDevTools, 1000);

    const noop = function() {};
    window.console.log = noop;
    window.console.info = noop;
    window.console.warn = noop;
    window.console.error = noop;
    window.console.debug = noop;
    window.console.table = noop;
    window.console.trace = noop;
    window.console.group = noop;
    window.console.groupEnd = noop;
    window.console.groupCollapsed = noop;

    function disableImageContext() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                return false;
            });
            img.setAttribute('draggable', 'false');
        });
    }
    document.addEventListener('DOMContentLoaded', disableImageContext);
    setTimeout(disableImageContext, 500);

    setInterval(function() {
        debugger;
    }, 100);

    let requestCount = 0;
    let lastReset = Date.now();
    
    setInterval(function() {
        requestCount = 0;
        lastReset = Date.now();
    }, 60000);
    
    const originalFetch = window.fetch;
    window.fetch = function() {
        requestCount++;
        if (requestCount > 100) {
            return Promise.reject('Rate limit exceeded');
        }
        return originalFetch.apply(this, arguments);
    };
    
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        requestCount++;
        if (requestCount > 100) {
            return;
        }
        return originalOpen.apply(this, arguments);
    };

    if (window.location.protocol === 'viewsource:') {
        window.location.href = 'about:blank';
    }

    if (top !== self) {
        top.location = self.location;
    }
})();

// ===== CONFIG =====
const CONFIG = {
    wa: "628895823757",
    webhookSupport: "https://discord.com/api/webhooks/1506954604875874304/bPS9G4bR5U4z0AgxV2oEFvjXmPzCOkGW_K2L0SMOL_nI7x7Cic29Awj9TemZll8",
    webhookPurchase: "https://discord.com/api/webhooks/1506954202100928563/zlt6kOh1FfthDzPzQyk8FjEROAHFXotM33kiuqppqRyhBCF5Rsrs3Z8FjuDlXAf5",
    imgbbApiKey: "bd950527de06c220d16c04e0f75658a8",
    paymentNumbers: {
        qris: "QRIS_AVAILABLE"
    }
};

// ===== DATA =====
const PRODUCTS = [
    { id: 1, name: 'XFOURTEEN BASIC TOOLS', cat: 'ANDROID', price: 25000, img: 'assets/banner.png', features: ['Drag Headshot', 'Aim Assist', 'Sensitivity Screen', 'Sensitivity PPI & Density', 'Crosshairs', 'System Tuning & Utility', 'And So Forth'], description: 'Unlock maximum performance and ultimate control. Here are the core premium features included in this build', bestseller: false },
    { id: 2, name: 'XFOURTEEN PREMIUM TOOLS', cat: 'ANDROID', price: 50000, img: 'assets/banner.png', features: ['Drag Headshot', 'Recoil Stability', 'Vertical Drag Assist', 'Crosshair', 'Sensitivity Optimized', 'Sensitivity PPI & DPI', 'System Tuning & Utility'], description: 'Unlock maximum performance and ultimate control. Here are the core premium features included in this build', bestseller: false },
    { id: 3, name: 'COMING SOON', cat: 'ANDROID', price: 0, img: 'assets/banner.png', features: ['Drag Headshot', 'Recoil Stability', 'Vertical Drag Assist', 'Crosshair', 'Sensitivity Optimized', 'Sensitivity PPI & DPI', 'System Tuning & Utility'], description: 'Unlock maximum performance and ultimate control. Here are the core premium features included in this build', bestseller: false },
    { id: 4, name: 'CHEATS iOS', cat: 'IOS', price: 0, img: 'assets/banner.png', features: ['Coming Soon', 'Coming Soon', 'Coming Soon'], description: 'Premium iOS optimization for the elite Coming Soon.', bestseller: false },
    { id: 5, name: 'XFOURTEEN OPTIMIZE', cat: 'PC', price: 30000, img: 'assets/banner.png', features: ['Tweak Engine (100+ Tweaks)', 'Mouse & Aim Optimization', 'Input & Latency Reduction', 'Optimizer Pro (Preset 1Click)', 'System & Hardware Optimizer', 'Network & Utility'], description: 'X14 Tweaks Pro is a Windows optimization and tweaking utility. It is designed to perform aggressive system optimizations at the registry, kernel, BCD, and hardware levels to boost gaming performance', bestseller: false },
    { id: 6, name: 'EXTERNAL PANEL MAINTANCE', cat: 'PC', price: 60000, img: 'assets/banner.png', features: ['AimBot AI', 'AimBot Head', 'AimBot Neck', 'Stream Mode', 'Support Windows 10 & 11', 'Support All Emulator'], description: 'XFOURTEEN CHEATS is a premium cheat application designed specifically for Free Fire, combining three advanced aimbot modes with a superfast, stable memory scanning system for Windows 10 and 11.', bestseller: false },
    { id: 7, name: 'STREAMER PANEL MAINTANCE', cat: 'PC', price: 100000, img: 'assets/banner.png', features: ['Cheat Engine (5+ Feature Active)', 'Support Windows 10 & 11', 'Support All Emulator', 'System & Remote Utilities', 'Security & Privacy', 'Performance & Reliability'], description: 'XFourteen Remote Panel is a remote control and cheat engine application that integrates keyboard and mouse inputs to control emulator games in realtime. it allows users to access and control cheat features from web browser.', bestseller: false },
];

const FEATURES = [
    { icon: 'bolt', title: 'Best Performance', desc: 'Maximum optimization for elite gameplay. Every setting calibrated for royalty.' },
    { icon: 'crosshairs', title: 'Best Precision', desc: 'Scientific sensitivity calibration for accuracy that befits a king.' },
    { icon: 'shield-alt', title: 'Safe & Legal', desc: '100% safe, purely ingame settings. No bans, only glory.' },
    { icon: 'sync', title: 'Cloud Sync', desc: 'Your premium settings are safely saved and accessible anywhere.' }
];

const TEAM = [
    { name: 'DziyX', role: 'FOUNDER & DEVELOPER', img: 'assets/founder.png', socials: { whatsapp: '628895823757', instagram: 'https://instagram.com/dziyx14', tiktok: 'https://tiktok.com/xenzzsettings', discord: 'https://discord.gg/GZx4FEw9AE' } }
];

// ===== STATE =====
let currentOrder = null;
let currentBuktiUrl = null;
let currentBuktiNama = null;

// ===== CLASSES =====
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

class BloodRainSystem {
    constructor() {
        this.canvas = document.getElementById('bloodRainCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.drops = [];
        this.init();
    }
    init() {
        this.resize();
        this.createDrops();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    createDrops() {
        const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 20000));
        this.drops = [];
        for (let i = 0; i < count; i++) {
            this.drops.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedY: Math.random() * 1.2 + 0.4,
                speedX: Math.random() * 0.3 - 0.15,
                opacity: Math.random() * 0.4 + 0.15,
                length: Math.random() * 15 + 5,
                glow: Math.random() * 0.5 + 0.2
            });
        }
    }
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drops.forEach(d => {
            d.y += d.speedY;
            d.x += d.speedX;
            if (d.y > this.canvas.height) {
                d.y = -10;
                d.x = Math.random() * this.canvas.width;
            }
            if (d.x < -10) d.x = this.canvas.width + 10;
            if (d.x > this.canvas.width + 10) d.x = -10;
            this.ctx.shadowBlur = d.glow * 6;
            this.ctx.shadowColor = `rgba(200, 200, 200, ${d.opacity * 0.5})`;
            this.ctx.beginPath();
            this.ctx.moveTo(d.x, d.y);
            this.ctx.lineTo(d.x + d.speedX * 2, d.y + d.length);
            this.ctx.strokeStyle = `rgba(200, 200, 200, ${d.opacity})`;
            this.ctx.lineWidth = d.size;
            this.ctx.stroke();
        });
        this.ctx.shadowBlur = 0;
        requestAnimationFrame(() => this.animate());
    }
}

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
            p.life -= 0.05;
            if (p.life <= 0) { this.trail.splice(i, 1); i--; continue; }
            const radius = 10 * p.life;
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
            gradient.addColorStop(0, `rgba(200, 200, 200, ${0.5 * p.life})`);
            gradient.addColorStop(0.4, `rgba(150, 150, 150, ${0.3 * p.life})`);
            gradient.addColorStop(1, 'rgba(100, 100, 100, 0)');
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
        const interactiveElements = document.querySelectorAll('a, button, .btn-royal-primary, .btn-royal-secondary, .tab-royal, .contact-royal-glossy, #product-grid > div');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.width = '50px';
                this.cursor.style.height = '50px';
                this.cursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)';
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.style.width = '30px';
                this.cursor.style.height = '30px';
                this.cursor.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)';
            });
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.5s ease;
            pointer-events: none;
            z-index: 999;
        `;
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.style.transform = 'scale(2)';
            ripple.style.opacity = '0';
        }, 10);
        setTimeout(() => ripple.remove(), 500);
    });
}

function generateQRISPayment(amount, productName) {
    const container = document.getElementById('payment-content');
    if (!container) return;
    container.innerHTML = `
        <div class="text-center">
            <p class="text-white/40 text-[10px] uppercase tracking-wider mb-3">Scan QRIS with your e-wallet</p>
            <div class="inline-block bg-white p-3 rounded-xl shadow-lg">
                <img src="assets/qris.jpg" alt="QRIS" class="mx-auto w-40 h-40 object-contain" onerror="this.src='https://placehold.co/200x200/ffffff/000000?text=QRIS'">
            </div>
            <p class="text-white/30 text-[9px] mt-3">Royal Tribute: Rp ${amount.toLocaleString('id-ID')}</p>
        </div>
    `;
}

async function uploadBukti(file) {
    if (!file) { showToast("No file selected!"); return null; }
    if (file.size > 5 * 1024 * 1024) { showToast("File too large! Max 5MB"); return null; }
    if (!file.type.startsWith('image/')) { showToast("Only image files allowed!"); return null; }
    showToast("Uploading proof...");
    const formData = new FormData();
    formData.append('image', file);
    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${CONFIG.imgbbApiKey}`, { method: 'POST', body: formData });
        if (!response.ok) throw new Error('Upload failed');
        const result = await response.json();
        if (result && result.data && result.data.url) { showToast("Proof uploaded!"); return result.data.url; }
        else throw new Error('Invalid response');
    } catch (error) { showToast("Upload failed, please send manually via WhatsApp"); return null; }
}

function attachBukti() {
    if (!currentOrder) { showToast("Please select a product first!"); return; }
    let fileInput = document.getElementById('hidden-file-input');
    if (!fileInput) {
        fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = 'hidden-file-input';
        fileInput.accept = 'image/jpeg, image/png, image/jpg, image/webp';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const url = await uploadBukti(file);
            if (url) {
                currentBuktiUrl = url;
                currentBuktiNama = file.name;
                const indicator = document.getElementById('buktiIndicator');
                if (indicator) { indicator.classList.remove('hidden'); indicator.innerHTML = '<span class="text-xs text-green-600"><i class="fas fa-check-circle"></i> Proof attached (' + file.name + ')</span>'; }
                const btnAttach = document.getElementById('btnAttachBukti');
                if (btnAttach) { btnAttach.innerHTML = '<i class="fas fa-check-circle mr-2"></i> PROOF ATTACHED'; btnAttach.style.background = 'rgba(16, 185, 129, 0.2)'; btnAttach.style.borderColor = '#10b981'; }
                showToast('Proof attached!');
            } else { currentBuktiUrl = null; showToast('Upload failed, please send manually via WhatsApp'); }
        });
    }
    fileInput.click();
}

async function sendInvoiceToDiscord(order, buktiUrl = null) {
    const embed = { title: " NEW ROYAL PURCHASE ", color: 0x888888, fields: [
        { name: "ORDER ID", value: `\`${order.orderId}\``, inline: false },
        { name: "ITEM", value: `${order.name}`, inline: true },
        { name: "TRIBUTE", value: `Rp ${order.price.toLocaleString('id-ID')}`, inline: true },
        { name: "PAYMENT METHOD", value: "QRIS ONLY", inline: true },
        { name: "TIME", value: `<t:${Math.floor(Date.now()/1000)}:F>`, inline: false }
    ], footer: { text: "XFOURTEEN CORPORATION - ROYAL TREASURY" }, timestamp: new Date().toISOString() };
    if (buktiUrl) { embed.image = { url: buktiUrl }; embed.fields.push({ name: "PROOF", value: `[VIEW PROOF](${buktiUrl})`, inline: false }); }
    try { await fetch(CONFIG.webhookPurchase, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: "XFOURTEEN ROYAL BANK", avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", embeds: [embed], content: "**NEW PURCHASE!**" }) }); return true; }
    catch(e) { return false; }
}

async function confirmToWA() {
    if (!currentOrder) { showToast("No active order!"); return; }
    showToast("Sending confirmation...");
    await sendInvoiceToDiscord(currentOrder, currentBuktiUrl);
    let message = `*ROYAL CONFIRMATION - XFOURTEEN CORPORATION*\n\n`;
    message += ` Order ID: #${currentOrder.orderId}\n`;
    message += ` Item: ${currentOrder.name}\n`;
    message += ` Tribute: Rp ${currentOrder.price.toLocaleString('id-ID')}\n`;
    message += ` Payment Method: QRIS\n\n`;
    if (currentBuktiUrl) { message += `*PROOF:*\n${currentBuktiUrl}\n\n`; showToast("Proof link included!"); }
    else { message += `*PROOF:*\nNo proof attached\n\n`; showToast("No proof attached!"); }
    message += `Hail to the King! I have completed the royal tribute. Please process my order.`;
    window.open(`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(message)}`, '_blank');
    currentBuktiUrl = null; currentBuktiNama = null;
    document.getElementById('buktiIndicator')?.classList.add('hidden');
    const btnAttach = document.getElementById('btnAttachBukti');
    if (btnAttach) { btnAttach.innerHTML = '<i class="fas fa-camera mr-2"></i> ATTACH PROOF'; btnAttach.style.background = ''; btnAttach.style.borderColor = ''; }
    setTimeout(() => { closePayment(); showToast("Confirmation sent! Please wait for XIV Team."); }, 1500);
}

function openPayment(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) { showToast("Product not found!"); return; }
    currentOrder = { ...p, orderId: 'ROYAL' + Date.now().toString().slice(8) };
    currentBuktiUrl = null; currentBuktiNama = null;
    document.getElementById('pay-product').innerText = p.name;
    document.getElementById('pay-amount').innerHTML = "Rp " + p.price.toLocaleString('id-ID');
    generateQRISPayment(p.price, p.name);
    const modal = document.getElementById('payment-modal');
    if (!modal) return;
    document.getElementById('buktiIndicator')?.classList.add('hidden');
    const btnAttach = document.getElementById('btnAttachBukti');
    if (btnAttach) { btnAttach.innerHTML = '<i class="fas fa-camera mr-2"></i> ATTACH PROOF'; btnAttach.style.background = ''; btnAttach.style.borderColor = ''; }
    modal.classList.remove('hidden'); modal.classList.add('flex'); modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; document.body.style.position = 'fixed'; document.body.style.width = '100%';
}

function closePayment() {
    const modal = document.getElementById('payment-modal');
    if (!modal) return;
    modal.classList.add('hidden'); modal.classList.remove('flex'); modal.style.display = 'none';
    document.body.style.overflow = 'auto'; document.body.style.position = 'relative';
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.style.transform = 'translateX(0)';
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
    }, 3000);
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) window.scrollTo({ top: section.offsetTop - 70, behavior: 'smooth' });
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function filterProducts(cat) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    const filtered = PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = filtered.map((p, index) => `
        <div class="stagger-item group bg-black/40 backdrop-blur-sm p-5 rounded-xl border border-white/15 hover:border-white/40 transition-all duration-400 hover:-translate-y-2 relative overflow-hidden" style="transition-delay: ${index * 0.1}s;">
            ${p.bestseller ? `<div class="absolute top-3 right-3 z-20"><span class="bg-white text-black text-[9px] font-bold uppercase px-2 py-1 rounded-full flex items-center gap-1 shadow-md shadow-black/30"><i class="fas fa-crown text-[8px]"></i> BESTSELLER</span></div>` : ''}
            <div class="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-black/40 border border-white/15"><img src="${p.img}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" onerror="this.src='https://placehold.co/500x280/1a1a1a/ffffff?text=XFOURTEEN'"><div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div></div>
            <div class="mb-4"><h3 class="text-white font-bold text-lg mb-1 font-cinzel">${p.name}</h3><p class="text-white/40 text-xs mb-2">${p.description}</p>
            <ul class="space-y-1">${p.features.map(f => `<li class="text-[11px] text-white/50 flex items-center gap-1.5"><i class="fas fa-check-circle text-white/30 text-[8px]"></i> ${f}</li>`).join('')}</ul></div>
            <div class="mb-4"><p class="text-white/30 text-[9px] font-semibold uppercase tracking-wider mb-0.5">ROYAL TRIBUTE</p><p class="text-2xl font-bold text-white">Rp ${p.price.toLocaleString('id-ID')}</p></div>
            <button onclick="event.stopPropagation(); openPayment(${p.id})" class="w-full btn-royal-primary justify-center py-2.5 text-xs" style="position: relative; z-index: 10; cursor: pointer;">Choose Product</button>
        </div>
    `).join('');
    document.querySelectorAll('.tab-royal').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${cat}`)?.classList.add('active');
    initStaggerAnimation();
}

async function sendToDiscord() {
    const name = document.getElementById('webhook-name');
    const phone = document.getElementById('webhook-phone');
    const msg = document.getElementById('webhook-msg');
    const btn = document.getElementById('webhook-btn');
    if (!name || !phone || !msg) return;
    if (!name.value.trim() || !phone.value.trim() || !msg.value.trim()) { showToast("Please fill in all fields!"); return; }
    const original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> SENDING...`;
    try {
        const res = await fetch(CONFIG.webhookSupport, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: "XFOURTEEN ROYAL COURT", avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", embeds: [{ title: "Royal Audience Request", color: 0x888888, fields: [{ name: "Name", value: `\`\`\`${name.value}\`\`\``, inline: true }, { name: "Contact", value: `\`\`\`${phone.value}\`\`\``, inline: true }, { name: "Message", value: msg.value.substring(0, 1000), inline: false }], footer: { text: "XFOURTEEN ROYAL COURT - " + new Date().toLocaleString('en-US') }, timestamp: new Date().toISOString() }] }) });
        if (res.ok) { showToast("Message delivered! The court will respond."); name.value = ""; phone.value = ""; msg.value = ""; }
        else throw new Error();
    } catch (e) { showToast("Failed to deliver message. Please contact directly on WhatsApp."); }
    finally { btn.disabled = false; btn.innerHTML = original; }
}

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px 50px 0px' });
    revealElements.forEach(el => observer.observe(el));
}

function initStaggerAnimation() {
    const staggerContainers = document.querySelectorAll('.stagger-container');
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px 30px 0px' });
    staggerContainers.forEach(el => staggerObserver.observe(el));
}

function playWelcomeSound() {
    const audio = document.getElementById('welcomeSound');
    if (audio) {
        audio.volume = 0.7;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                const playOnInteraction = () => {
                    audio.play().catch(e => console.log("Gagal memutar sound:", e));
                    document.removeEventListener('click', playOnInteraction);
                    document.removeEventListener('touchstart', playOnInteraction);
                };
                document.addEventListener('click', playOnInteraction);
                document.addEventListener('touchstart', playOnInteraction);
            });
        }
    }
}

// ===== DOM INITIALIZATION =====
window.addEventListener('DOMContentLoaded', () => {
    // Initialize effects
    new CursorGlow();
    new BloodRainSystem();
    new MouseTrail();

    // Typewriter
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) new TypeWriter(typewriterElement, ['Optimize Your Free Fire Experience', 'Best Sensitivity Settings', 'Designed for Elite Players', 'Elevate Your Game to Throne Level'], 80, 2500);

    // Features
    const fc = document.getElementById('features-container');
    if (fc) fc.innerHTML = FEATURES.map((f, i) => `
        <div class="stagger-item">
            <div class="feature-icon"><i class="fas fa-${f.icon}"></i></div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
        </div>
    `).join('');

    // Team
    const tg = document.getElementById('team-grid');
    if (tg) tg.innerHTML = TEAM.map((t, i) => `
        <div class="stagger-item group">
            <div class="absolute top-0 left-0 w-full h-28 overflow-hidden">
                <img src="assets/sampul.png" class="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700" alt="banner" onerror="this.src='https://placehold.co/600x200/1a1a1a/ffffff?text=BANNER'">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
            </div>
            <div class="relative pt-16 pb-8 px-6 z-10 flex flex-col items-center">
                <div class="relative mb-5">
                    <div class="absolute -inset-1 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div class="w-24 h-24 rounded-full border-2 border-white/30 p-1 mx-auto overflow-hidden bg-[#020000] relative z-10">
                        <img src="${t.img}" class="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}'">
                    </div>
                </div>
                <div class="flex items-center justify-center gap-2 mb-2">
                    <h3 class="text-white font-bold text-xl font-cinzel group-hover:text-white/80 transition-colors duration-300">${t.name}</h3>
                    <i class="fas fa-check-circle text-white/40 text-xs" title="Verified"></i>
                </div>
                <p class="text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm shadow-white/5">${t.role}</p>
                <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                <div class="flex gap-4 justify-center">
                    ${t.socials.whatsapp ? `<a href="https://wa.me/${t.socials.whatsapp}" target="_blank" class="w-9 h-9 rounded-full bg-[#050101] border border-white/20 hover:border-green-500 hover:bg-green-500/10 flex items-center justify-center text-green-500 hover:text-green-400 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"><i class="fab fa-whatsapp text-sm"></i></a>` : ''}
                    ${t.socials.instagram ? `<a href="${t.socials.instagram}" target="_blank" class="w-9 h-9 rounded-full bg-[#050101] border border-white/20 hover:border-pink-500 hover:bg-pink-500/10 flex items-center justify-center text-pink-500 hover:text-pink-400 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"><i class="fab fa-instagram text-sm"></i></a>` : ''}
                    ${t.socials.tiktok ? `<a href="${t.socials.tiktok}" target="_blank" class="w-9 h-9 rounded-full bg-[#050101] border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"><i class="fab fa-tiktok text-sm"></i></a>` : ''}
                    ${t.socials.discord ? `<a href="${t.socials.discord}" target="_blank" class="w-9 h-9 rounded-full bg-[#050101] border border-white/20 hover:border-indigo-500 hover:bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:text-indigo-300 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"><i class="fab fa-discord text-sm"></i></a>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Filter Products
    filterProducts('ANDROID');

    // Ripple effects
    document.querySelectorAll('.btn-royal-primary, .btn-royal-secondary, .tab-royal').forEach(btn => addRippleEffect(btn));

    // Mobile menu
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

    // Back to top and nav
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

    // Smooth scroll for hash links
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
        let width = 0;
        const loadingBar = document.getElementById('loadingBar');
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        if (nav) nav.style.transform = 'translateY(0)';
                        playWelcomeSound();
                    }, 500);
                }, 500);
            } else {
                width += Math.random() * 12 + 4;
                if (width > 100) width = 100;
                if (loadingBar) loadingBar.style.width = width + '%';
            }
        }, 120);

        // Also trigger sound when loader hides via other means
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (loader.style.display === 'none') {
                        playWelcomeSound();
                        observer.disconnect();
                    }
                }
            });
        });
        observer.observe(loader, { attributes: true });
        
        const checkInterval = setInterval(function() {
            if (loader.style.display === 'none') {
                playWelcomeSound();
                clearInterval(checkInterval);
                observer.disconnect();
            }
        }, 100);
    }

    // Init FAQ, scroll reveal, stagger
    initFaqAccordion();
    initScrollReveal();
    initStaggerAnimation();
});
