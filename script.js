const CONFIG = {
wa: "628895823757",
webhookSupport: "https://discord.com/api/webhooks/1506954604875874304/bPS9G4b-R5U-4z0AgxV2oEFvjXmPzCOkGW_K2L0SMO-L_nI7x7Cic29-Awj9-TemZll8",
webhookPurchase: "https://discord.com/api/webhooks/1506954202100928563/zlt6kOh1F-fthDzPzQyk8Fj-EROAHFXotM-33kiuqppqRyhBCF5Rsrs3-Z8FjuDlXAf5",
imgbbApiKey: "bd950527de06c220d16c04e0f75658a8",
paymentNumbers: {
qris: "QRIS_AVAILABLE"
}
};

const PRODUCTS = [
{ id: 1, name: 'TOOLS BASIC', cat: 'ANDROID', price: 30000, img: 'assets/banner.png', features: ['Drag Headshot', 'Aim Assist', 'Sensitivity Screen', 'Sensitivity PPI & Density', 'Crosshairs', ' System Tuning & Utility', 'And So Forth'], description: 'Unlock maximum performance and ultimate control. Here are the core premium features included in this build', bestseller: false },
{ id: 2, name: 'TOOLS EXOTIC', cat: 'ANDROID', price: 60000, img: 'assets/banner.png', features: ['Drag Headshot', 'Recoil Stability', 'Vertical Drag Assist', 'Crosshair', 'Sensitivity Optimized', 'Sensitivity PPI & DPI', ' System Tuning & Utility'], description: 'Unlock maximum performance and ultimate control. Here are the core premium features included in this build', bestseller: false },
{ id: 3, name: 'CHEATS iOS', cat: 'IOS', price: 0, img: 'assets/banner.png', features: ['Comming Soon', 'Comming Soon', 'Comming Soon'], description: 'Premium iOS optimization for the elite Comming Soon.', bestseller: false },
{ id: 4, name: 'SETTINGS BASIC', cat: 'PC', price: 25000, img: 'assets/banner.png', features: ['Reg Mouse', 'Keybin & Mapping', 'Best Emulator', 'Basic Optimizer'], description: 'Basic features available in the XFourteen Settings Menu to maximize your PC performance and game control response', bestseller: false },
{ id: 5, name: 'TOOLS STABILIZER', cat: 'PC', price: 50000, img: 'assets/banner.png', features: ['Mouse & Aim Optimization', 'Input & Latency Reduction', 'System & Hardware Optimizer', 'Network & Utility'], description: 'Premium features available in the XFourteen Stabilizer Menu to maximize your PC performance and game control response', bestseller: false },
{ id: 6, name: 'REMOTE PANEL X14', cat: 'PC', price: 100000, img: 'assets/banner.png', features: ['Cheats Menu', 'System & Remote Utilities', 'Security & Advanced Advantages', 'And So Forth'], description: 'Premium Cheats designed to instantly improve gaming performance through optimized controls, mechanic, and high-level security systems.', bestseller: false },
];

const FEATURES = [
  { 
    icon: 'bolt', 
    title: 'Royal Performance', 
    desc: 'Maximum optimization for elite gameplay. Every setting calibrated for royalty.' 
  },
  { 
    icon: 'crosshairs', 
    title: 'Best Precision', 
    desc: 'Scientific sensitivity calibration for accuracy that befits a king.' 
  },
  { 
    icon: 'shield-alt', 
    title: 'Safe & Legal', 
    desc: '100% safe, purely in-game settings. No bans, only glory.' 
  },
  { 
    icon: 'tachometer-alt', 
    title: 'Zero Lag', 
    desc: 'Eliminate stutter and frame drops for ultra-smooth rendering.' 
  },
  { 
    icon: 'magic', 
    title: 'Instant Setup', 
    desc: 'Apply elite configurations with just a single click. No hassle.' 
  },
  { 
    icon: 'sync', 
    title: 'Cloud Sync', 
    desc: 'Your premium settings are safely saved and accessible anywhere.' 
  }
];

const TEAM = [
{ name: 'DziyX', role: 'FOUNDER & DEVELOPER', img: 'assets/founder.png', socials: { whatsapp: '628895823757', instagram: 'https://instagram.com/dziyx14', tiktok: 'https://tiktok.com/xenzzsettings', discord: 'https://discord.gg/GZx4FEw9AE' } }
];

let currentOrder = null;
let currentBuktiUrl = null;
let currentBuktiNama = null;

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
this.ctx.fillStyle = `rgba(255, 26, 26, ${p.opacity * (0.6 + Math.sin(p.wiggle) * 0.2)})`;
this.ctx.fill();
});
requestAnimationFrame(() => this.animate());
}
}

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
color: `rgba(255, 26, 26, ${Math.random() * 0.5 + 0.1})`,
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
this.ctx.strokeStyle = `rgba(255, 26, 26, ${0.08 * (1 - dist / 90)})`;
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
gradient.addColorStop(0, `rgba(255, 26, 26, ${0.8 * p.life})`);
gradient.addColorStop(0.5, `rgba(255, 26, 26, ${0.4 * p.life})`);
gradient.addColorStop(1, 'rgba(255, 26, 26, 0)');
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
const interactiveElements = document.querySelectorAll('a, button, .btn-royal-primary, .btn-royal-secondary, .tab-royal, .contact-royal, #product-grid > div');
interactiveElements.forEach(el => {
el.addEventListener('mouseenter', () => {
this.cursor.style.width = '50px';
this.cursor.style.height = '50px';
this.cursor.style.background = 'radial-gradient(circle, rgba(255, 26, 26, 0.8) 0%, rgba(255, 26, 26, 0) 70%)';
});
el.addEventListener('mouseleave', () => {
this.cursor.style.width = '30px';
this.cursor.style.height = '30px';
this.cursor.style.background = 'radial-gradient(circle, rgba(255, 26, 26, 0.6) 0%, rgba(255, 26, 26, 0) 70%)';
});
});
}
}

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
ripple.style.backgroundColor = 'rgba(255, 26, 26, 0.4)';
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

function generateQRISPayment(amount, productName) {
const container = document.getElementById('payment-content');
if (!container) return;
container.innerHTML = `
<div class="text-center">
<p class="text-[#ff6666]/70 text-[10px] md:text-xs uppercase tracking-wider mb-3">Scan QRIS with your e-wallet</p>
<div id="qris-container" class="inline-block bg-white p-3 rounded-xl">
<img src="assets/qris.jpg" alt="QRIS" class="mx-auto w-40 h-40 md:w-48 md:h-48 object-contain" onerror="this.src='https://placehold.co/200x200/ffffff/ff1a1a?text=QRIS'">
</div>
<p class="text-[#ff9999]/50 text-[9px] mt-3">Royal Tribute: Rp ${amount.toLocaleString('id-ID')}</p>
</div>
`;
}

function copyToClipboard(text) {
navigator.clipboard.writeText(text).then(() => showToast('✅ Nomor berhasil disalin!')).catch(() => showToast('❌ Gagal menyalin nomor'));
}

async function uploadBukti(file) {
if (!file) { showToast("❌ Tidak ada file yang dipilih!"); return null; }
if (file.size > 5 * 1024 * 1024) { showToast("❌ Ukuran file terlalu besar! Max 5MB"); return null; }
if (!file.type.startsWith('image/')) { showToast("❌ Hanya file gambar yang diperbolehkan!"); return null; }
showToast("📸 Mengupload PROOF...");
const formData = new FormData();
formData.append('image', file);
try {
const response = await fetch(`https://api.imgbb.com/1/upload?key=${CONFIG.imgbbApiKey}`, { method: 'POST', body: formData });
if (!response.ok) throw new Error('Upload failed');
const result = await response.json();
if (result && result.data && result.data.url) { showToast("✅ Bukti berhasil diupload!"); return result.data.url; }
else throw new Error('Invalid response');
} catch (error) { showToast("⚠️ Upload gagal, kirim manual via WhatsApp"); return null; }
}

function attachBukti() {
if (!currentOrder) { showToast("❌ Pilih produk terlebih dahulu!"); return; }
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
if (indicator) { indicator.classList.remove('hidden'); indicator.innerHTML = '<span class="text-xs text-green-500"><i class="fas fa-check-circle"></i> Bukti sudah dilampirkan (' + file.name + ')</span>'; }
const btnAttach = document.getElementById('btnAttachBukti');
if (btnAttach) { btnAttach.innerHTML = '<i class="fas fa-check-circle mr-2"></i> PROOF TERLAMPIR ✓'; btnAttach.style.background = 'rgba(16, 185, 129, 0.2)'; btnAttach.style.borderColor = '#10b981'; }
showToast('✅ PROOF berhasil dilampirkan!');
} else { currentBuktiUrl = null; showToast('❌ Gagal upload bukti, kirim manual via WA nanti'); }
});
}
fileInput.click();
}

async function sendInvoiceToDiscord(order, buktiUrl = null) {
const embed = { title: " NEW ROYAL PURCHASE! ", color: 0xff1a1a, fields: [
{ name: "ORDER ID", value: `\`${order.orderId}\``, inline: false },
{ name: "ITEM", value: `${order.name}`, inline: true },
{ name: "TRIBUTE", value: `Rp ${order.price.toLocaleString('id-ID')}`, inline: true },
{ name: "PAYMENT METHOD", value: "QRIS ONLY", inline: true },
{ name: "TIME", value: `<t:${Math.floor(Date.now()/1000)}:F>`, inline: false }
], footer: { text: "XFOURTEEN CORPORATION • ROYAL TREASURY" }, timestamp: new Date().toISOString() };
if (buktiUrl) { embed.image = { url: buktiUrl }; embed.fields.push({ name: "📸 PROOF", value: `[KLIK LIHAT BUKTI](${buktiUrl})`, inline: false }); }
try { await fetch(CONFIG.webhookPurchase, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: "XFOURTEEN ROYAL BANK", avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", embeds: [embed], content: "**ADA PEMBELIAN BARU!** 👑" }) }); return true; }
catch(e) { return false; }
}

async function confirmToWA() {
if (!currentOrder) { showToast("❌ Tidak ada pesanan!"); return; }
showToast("📤 Mengirim konfirmasi...");
await sendInvoiceToDiscord(currentOrder, currentBuktiUrl);
let message = `*ROYAL CONFIRMATION - XFOURTEEN CORPORATION*\n\n`;
message += ` Order ID: #${currentOrder.orderId}\n`;
message += ` Item: ${currentOrder.name}\n`;
message += ` Tribute: Rp ${currentOrder.price.toLocaleString('id-ID')}\n`;
message += ` Payment Method: QRIS\n\n`;
if (currentBuktiUrl) { message += `📸 *PROOF:*\n${currentBuktiUrl}\n\n`; showToast("✅ Link PROOF sudah termasuk dalam pesan!"); }
else { message += `📸 *PROOF:*\nTidak ada bukti yang dilampirkan\n\n`; showToast("⚠️ Tidak ada PROOF!"); }
message += `Hail to the King! I have completed the royal tribute. Please process my order.`;
window.open(`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(message)}`, '_blank');
currentBuktiUrl = null; currentBuktiNama = null;
document.getElementById('buktiIndicator')?.classList.add('hidden');
const btnAttach = document.getElementById('btnAttachBukti');
if (btnAttach) { btnAttach.innerHTML = '<i class="fas fa-camera mr-2"></i> LAMPIRKAN PROOF'; btnAttach.style.background = ''; btnAttach.style.borderColor = ''; }
setTimeout(() => { closePayment(); showToast("✅ Konfirmasi terkirim! Tunggu proses dari XIV Team."); }, 1500);
}

function openPayment(id) {
const p = PRODUCTS.find(x => x.id === id);
if (!p) { showToast("❌ Product not found!"); return; }
currentOrder = { ...p, orderId: 'ROYAL' + Date.now().toString().slice(-8) };
currentBuktiUrl = null; currentBuktiNama = null;
document.getElementById('pay-product').innerText = p.name;
document.getElementById('pay-amount').innerHTML = "Rp " + p.price.toLocaleString('id-ID');
generateQRISPayment(p.price, p.name);
const modal = document.getElementById('payment-modal');
if (!modal) return;
document.getElementById('buktiIndicator')?.classList.add('hidden');
const btnAttach = document.getElementById('btnAttachBukti');
if (btnAttach) { btnAttach.innerHTML = '<i class="fas fa-camera mr-2"></i> LAMPIRKAN PROOF'; btnAttach.style.background = ''; btnAttach.style.borderColor = ''; }
modal.classList.remove('hidden'); modal.classList.add('flex'); modal.style.display = 'flex'; modal.style.visibility = 'visible'; modal.style.opacity = '1';
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
toast.classList.remove('hide');
toast.style.transform = 'translateX(0)';
toast.style.opacity = '1';
setTimeout(() => {
toast.classList.add('hide');
setTimeout(() => { toast.style.transform = 'translateX(100%)'; }, 400);
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
grid.innerHTML = filtered.map(p => `
<div class="stagger-item group bg-gradient-to-br from-[#0f0a0a] to-[#080202] p-6 rounded-2xl border border-[#ff1a1a]/30 hover:border-[#ff1a1a]/70 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden animate-card-float">
${p.bestseller ? `<div class="absolute top-3 right-3 z-20"><span class="bg-gradient-to-r from-[#ff1a1a] to-[#cc0000] text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"><i class="fas fa-crown text-[8px]"></i> BESTSELLER</span></div>` : ''}
<div class="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-[#0a0000] border border-[#ff1a1a]/20"><img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" onerror="this.src='https://placehold.co/500x280/1a1a1a/ff1a1a?text=XFOURTEEN'"><div class="absolute inset-0 bg-gradient-to-t from-[#050000]/80 via-transparent to-transparent"></div></div>
<div class="mb-5"><h3 class="text-white font-bold text-xl mb-2 font-playfair">${p.name}</h3><p class="text-[#ff9999] text-sm mb-3">${p.description}</p><ul class="space-y-2">${p.features.map(f => `<li class="text-[12px] text-[#ffcccc] flex items-center gap-2"><i class="fas fa-check-circle text-[#ff1a1a] text-[10px]"></i> ${f}</li>`).join('')}</ul></div>
<div class="mb-5"><p class="text-[#ff1a1a]/50 text-[10px] font-semibold uppercase tracking-wider mb-1">ROYAL TRIBUTE</p><p class="price-text">Rp ${p.price.toLocaleString('id-ID')}</p></div>
<button onclick="event.stopPropagation(); openPayment(${p.id})" class="w-full btn-royal-primary justify-center py-3" style="position: relative; z-index: 10; cursor: pointer;"> BUY ITEM</button>
</div>
`).join('');
document.querySelectorAll('.tab-royal').forEach(btn => btn.classList.remove('active'));
document.getElementById(`tab-${cat}`)?.classList.add('active');
}

async function sendToDiscord() {
const name = document.getElementById('webhook-name');
const phone = document.getElementById('webhook-phone');
const msg = document.getElementById('webhook-msg');
const btn = document.getElementById('webhook-btn');
if (!name || !phone || !msg) return;
if (!name.value.trim() || !phone.value.trim() || !msg.value.trim()) { showToast("Please fill in all fields, noble one!"); return; }
const original = btn.innerHTML;
btn.disabled = true;
btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> SENDING ROYAL MESSAGE...`;
try {
const res = await fetch(CONFIG.webhookSupport, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: "XFOURTEEN ROYAL COURT", avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", embeds: [{ title: "👑 Royal Audience Request", color: 0xff1a1a, fields: [{ name: "🏰 Noble Name", value: `\`\`\`${name.value}\`\`\``, inline: true }, { name: "📱 Royal Contact", value: `\`\`\`${phone.value}\`\`\``, inline: true }, { name: "📜 Royal Message", value: msg.value.substring(0, 1000), inline: false }], footer: { text: "XFOURTEEN ROYAL COURT • " + new Date().toLocaleString('id-ID') }, timestamp: new Date().toISOString() }] }) });
if (res.ok) { showToast("Royal message delivered! The court will respond."); name.value = ""; phone.value = ""; msg.value = ""; }
else throw new Error();
} catch (e) { showToast("Failed to deliver message. Send directly to Royal WhatsApp."); }
finally { btn.disabled = false; btn.innerHTML = original; }
}

// ==================== WELCOME SOUND FUNCTION ====================
function playWelcomeSound() {
    const sound = document.getElementById('welcomeSound');
    if (sound) {
        sound.volume = 0.7;
        sound.play().catch(error => {
            console.log('Auto-play prevented, waiting for user interaction');
            const playOnInteraction = () => {
                sound.play().catch(e => console.log('Still blocked'));
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('touchstart', playOnInteraction);
            };
            document.addEventListener('click', playOnInteraction);
            document.addEventListener('touchstart', playOnInteraction);
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
new CursorGlow();
new GoldDustSystem();
new ParticleSystem();
new MouseTrail();
const typewriterElement = document.getElementById('typewriter-text');
if (typewriterElement) new TypeWriter(typewriterElement, ['Optimize Your Free Fire Experience', 'Best Sensitivity Settings', 'Designed for Elite Players', 'Elevate Your Game to Throne Level'], 80, 2500);
const fc = document.getElementById('features-container');
if (fc) fc.innerHTML = FEATURES.map(f => `<div class="stagger-item"><div class="feature-icon"><i class="fas fa-${f.icon}"></i></div><h3>${f.title}</h3><p>${f.desc}</p></div>`).join('');
const tg = document.getElementById('team-grid');
if (tg) tg.innerHTML = TEAM.map(t => `<div class="stagger-item"><div class="relative mb-5"><div class="w-24 h-24 rounded-full border-2 border-[#ff1a1a]/30 p-1 mx-auto overflow-hidden"><img src="${t.img}" class="w-full h-full object-cover rounded-full" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}'"></div></div><div class="flex items-center justify-center gap-2 mb-1"><h3 class="text-white font-bold text-lg font-playfair">${t.name}</h3><div class="w-5 h-5 rounded-full overflow-hidden bg-gradient-to-br from-[#ff1a1a] to-[#cc0000] flex items-center justify-center shadow-md"><img src="assets/verified.png" class="w-full h-full object-cover" alt="verified"></div></div><p class="text-[#ff1a1a] text-[10px] font-bold uppercase tracking-wider mb-3">${t.role}</p><div class="flex gap-3 justify-center">${t.socials.whatsapp ? `<a href="https://wa.me/${t.socials.whatsapp}" target="_blank" class="w-9 h-9 rounded-full bg-green-500/10 hover:bg-green-500 flex items-center justify-center text-green-500 hover:text-white transition-all hover:scale-110"><i class="fab fa-whatsapp"></i></a>` : ''}${t.socials.instagram ? `<a href="${t.socials.instagram}" target="_blank" class="w-9 h-9 rounded-full bg-pink-500/10 hover:bg-pink-500 flex items-center justify-center text-pink-500 hover:text-white transition-all hover:scale-110"><i class="fab fa-instagram"></i></a>` : ''}${t.socials.tiktok ? `<a href="${t.socials.tiktok}" target="_blank" class="w-9 h-9 rounded-full bg-black/10 hover:bg-black flex items-center justify-center text-[#ff9999]/60 hover:text-white transition-all hover:scale-110"><i class="fab fa-tiktok"></i></a>` : ''}${t.socials.discord ? `<a href="${t.socials.discord}" target="_blank" class="w-9 h-9 rounded-full bg-indigo-500/10 hover:bg-indigo-500 flex items-center justify-center text-indigo-400 hover:text-white transition-all hover:scale-110"><i class="fab fa-discord"></i></a>` : ''}</div></div>`).join('');
filterProducts('ANDROID');
document.querySelectorAll('.btn-royal-primary, .btn-royal-secondary, .tab-royal').forEach(btn => addRippleEffect(btn));
const menuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
menuBtn.addEventListener('click', () => { const isOpen = mobileMenu.classList.contains('open'); mobileMenu.style.transform = isOpen ? 'translateY(-100%)' : 'translateY(0)'; mobileMenu.style.opacity = isOpen ? '0' : '1'; mobileMenu.classList.toggle('open'); });
document.addEventListener('click', (e) => { if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && mobileMenu.classList.contains('open')) { mobileMenu.style.transform = 'translateY(-100%)'; mobileMenu.style.opacity = '0'; mobileMenu.classList.remove('open'); } });
document.querySelectorAll('#mobileMenu a').forEach(link => { link.addEventListener('click', () => { mobileMenu.style.transform = 'translateY(-100%)'; mobileMenu.style.opacity = '0'; mobileMenu.classList.remove('open'); }); });
}
const backToTop = document.getElementById('backToTop');
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => { if (backToTop) { backToTop.style.opacity = window.scrollY > 400 ? '1' : '0'; backToTop.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(20px)'; } if (nav && window.scrollY > 80) nav.style.transform = 'translateY(0)'; else if (nav) nav.style.transform = 'translateY(0)'; });
if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', (e) => { e.preventDefault(); const target = document.querySelector(anchor.getAttribute('href')); if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' }); }); });

// ==================== MODIFIED LOADER WITH AUTO SOUND (REPLACE THIS PART ONLY) ====================
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
                    
                    // LANGSUNG BUNYI OTOMATIS, GA USAH KLIK
                    const sound = document.getElementById('welcomeSound');
                    if (sound) {
                        sound.volume = 0.7;
                        sound.muted = false;
                        sound.play();
                    }
                    
                }, 500); 
            }, 500); 
        } else { 
            width += Math.random() * 15 + 5; 
            if (width > 100) width = 100; 
            if (loadingBar) loadingBar.style.width = width + '%'; 
        } 
    }, 150); 
}});
