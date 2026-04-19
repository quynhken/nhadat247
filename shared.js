/* ============================================================
   NHADAT247.VN — Shared Assets
   Tailwind CDN config + Header/Footer/Mobile Nav injection
   ============================================================ */

// ---------- Tailwind v3 custom config (runs before CDN evaluates) ----------
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#fff1f2",
          100: "#ffe1e3",
          200: "#ffc7cb",
          300: "#ff9da5",
          400: "#ff6672",
          500: "#f83644",
          600: "#e11d2a",   // main brand red
          700: "#bd1420",
          800: "#9c141f",
          900: "#82151f",
          950: "#47060c",
        },
        ink: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        'card': '0 1px 0 rgba(15,23,42,0.04), 0 6px 20px rgba(15,23,42,0.06)',
        'pop':  '0 20px 45px -15px rgba(225,29,42,0.35)',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        floatY: 'floatY 4s ease-in-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
      }
    }
  }
};

// ---------- Small SVG icon helper ----------
const ic = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  pin:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  bed:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 9v10"/><path d="M22 19V9"/><path d="M2 14h20"/><path d="M6 14v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></svg>`,
  bath:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M12 4h.01"/></svg>`,
  area:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M3 7V3h4"/><path d="M17 3h4v4"/><path d="M21 17v4h-4"/><path d="M7 21H3v-4"/></svg>`,
  heart:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>`,
  star:   `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"/></svg>`,
  phone:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"/></svg>`,
  mail:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>`,
  chev:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>`,
  home:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2Z"/></svg>`,
  plus:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 5v14M5 12h14"/></svg>`,
  msg:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`,
  user:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  menu:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`,
  bell:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></svg>`,
  close:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22 3H2l8 9.5V19l4 2v-8.5Z"/></svg>`,
  grid:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  list:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
  share:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>`,
  check:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="m5 12 5 5L20 7"/></svg>`,
  zap:    `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
  eye:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  arrow:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
};

// ---------- Header (shared) ----------
function buildHeader(active = 'home') {
  const link = (key, label, href) => `
    <a href="${href}" class="px-3 py-2 text-sm font-medium rounded-lg transition ${active===key?'text-primary-600 bg-primary-50':'text-ink-700 hover:text-primary-600 hover:bg-primary-50/60'}">${label}</a>`;
  return `
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-2 shrink-0">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 grid place-items-center text-white font-black shadow-pop">N</div>
          <div class="leading-tight">
            <div class="font-display font-extrabold text-lg text-ink-900">nhadat<span class="text-primary-600">247</span></div>
            <div class="text-[10px] text-ink-500 -mt-0.5 tracking-wider uppercase">kênh bất động sản</div>
          </div>
        </a>
        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-1">
          ${link('home','Trang chủ','index.html')}
          ${link('buy','Nhà đất bán','listing.html?type=sell')}
          ${link('rent','Nhà đất thuê','listing.html?type=rent')}
          ${link('project','Dự án','listing.html?type=project')}
          ${link('news','Tin tức','#')}
          ${link('contact','Liên hệ','contact.html')}
        </nav>
        <!-- Desktop actions -->
        <div class="hidden lg:flex items-center gap-2">
          <button class="p-2 text-ink-600 hover:text-primary-600 rounded-lg hover:bg-primary-50" aria-label="Thông báo">${ic.bell}</button>
          <a href="dashboard.html" class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-700 hover:text-primary-600">
            ${ic.user}<span>Tài khoản</span>
          </a>
          <a href="post.html" class="ml-1 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold shadow-pop transition">
            ${ic.plus}<span>Đăng tin</span>
          </a>
        </div>
        <!-- Mobile -->
        <button id="mobile-open" class="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-slate-100" aria-label="Menu">${ic.menu}</button>
      </div>
    </div>
    <!-- Mobile drawer -->
    <div id="mobile-drawer" class="fixed inset-0 z-50 hidden">
      <div class="absolute inset-0 bg-black/40" id="mobile-backdrop"></div>
      <aside class="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col">
        <div class="flex items-center justify-between px-4 h-16 border-b">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 grid place-items-center text-white font-black">N</div>
            <span class="font-display font-extrabold text-lg">nhadat<span class="text-primary-600">247</span></span>
          </div>
          <button id="mobile-close" class="p-2 rounded-lg hover:bg-slate-100">${ic.close}</button>
        </div>
        <nav class="p-4 flex-1 overflow-y-auto space-y-1">
          <a href="index.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium">${ic.home}Trang chủ</a>
          <a href="listing.html?type=sell" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium"><span class="text-primary-600">${ic.pin}</span>Nhà đất bán</a>
          <a href="listing.html?type=rent" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium"><span class="text-primary-600">${ic.pin}</span>Nhà đất thuê</a>
          <a href="listing.html?type=project" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium"><span class="text-primary-600">${ic.pin}</span>Dự án</a>
          <a href="#" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium"><span class="text-primary-600">${ic.star}</span>Tin tức</a>
          <a href="contact.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium"><span class="text-primary-600">${ic.phone}</span>Liên hệ</a>
          <div class="pt-2 border-t mt-3"></div>
          <a href="dashboard.html" class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 text-ink-800 font-medium">${ic.user}Tài khoản của tôi</a>
        </nav>
        <div class="p-4 border-t">
          <a href="post.html" class="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl py-3 shadow-pop">${ic.plus}Đăng tin miễn phí</a>
        </div>
      </aside>
    </div>
  </header>`;
}

// ---------- Footer (shared) ----------
function buildFooter() {
  return `
  <footer class="bg-ink-900 text-slate-300 pb-28 lg:pb-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="col-span-2">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 grid place-items-center text-white font-black">N</div>
            <div>
              <div class="font-display font-extrabold text-white text-xl">nhadat<span class="text-primary-500">247</span></div>
              <div class="text-xs text-slate-400">Kênh thông tin bất động sản số 1 Việt Nam</div>
            </div>
          </div>
          <p class="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
            Nền tảng kết nối người mua, người bán, chủ nhà và môi giới với hàng triệu tin đăng bất động sản được cập nhật mỗi ngày trên toàn quốc.
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a href="#" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-3 2.5-4.4 2.6-4.5-1.4-2-3.6-2.3-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1s-2.4-1.1-4-1c-2 0-3.9 1.2-5 3-2.1 3.7-.5 9.2 1.5 12.2 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1s2.3 1 3.9 1c1.6 0 2.7-1.5 3.7-3 1.2-1.7 1.6-3.4 1.7-3.5-.1 0-3.2-1.2-3.1-4.9ZM14.8 3.5c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.3.1 2.7-.7 3.6-1.7Z"/></svg>
              <div class="leading-tight text-xs">
                <div class="text-slate-300">Tải về trên</div>
                <div class="font-semibold text-white">App Store</div>
              </div>
            </a>
            <a href="#" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="m3.6 1.5 12.5 12.4-3.4 3.4L2.3 6.7a2 2 0 0 1 1.3-5.2Zm14 9.4 3.4 1.9c1.3.7 1.3 2.7 0 3.4l-3.5 2-3.4-3.4 3.5-3.9Zm-2.9 4.5 3.4 3.5-12.9 7.3a2 2 0 0 1-2.8-2.5Z"/></svg>
              <div class="leading-tight text-xs">
                <div class="text-slate-300">Tải về trên</div>
                <div class="font-semibold text-white">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Khám phá</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="listing.html?type=sell" class="hover:text-primary-400">Nhà đất bán</a></li>
            <li><a href="listing.html?type=rent" class="hover:text-primary-400">Nhà đất cho thuê</a></li>
            <li><a href="listing.html?type=project" class="hover:text-primary-400">Dự án mới</a></li>
            <li><a href="#" class="hover:text-primary-400">Môi giới uy tín</a></li>
            <li><a href="#" class="hover:text-primary-400">Tin tức thị trường</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Dành cho bạn</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="post.html" class="hover:text-primary-400">Đăng tin miễn phí</a></li>
            <li><a href="dashboard.html" class="hover:text-primary-400">Quản lý tin đăng</a></li>
            <li><a href="#" class="hover:text-primary-400">Bảng giá dịch vụ</a></li>
            <li><a href="#" class="hover:text-primary-400">Hướng dẫn sử dụng</a></li>
            <li><a href="contact.html" class="hover:text-primary-400">Trung tâm hỗ trợ</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Liên hệ</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex gap-2"><span class="text-primary-500 mt-0.5">${ic.pin}</span><span>Tầng 12, Toà nhà Sunrise, 123 Nguyễn Huệ, Q.1, TP.HCM</span></li>
            <li class="flex gap-2"><span class="text-primary-500 mt-0.5">${ic.phone}</span><span>Hotline: <b class="text-white">1900 247 247</b></span></li>
            <li class="flex gap-2"><span class="text-primary-500 mt-0.5">${ic.mail}</span><span>hotro@nhadat247.vn</span></li>
          </ul>
          <div class="mt-5 flex gap-2">
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-600 grid place-items-center transition">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1 .4-2 2-2h2V1h-3c-3 0-5 2-5 5v4H6v4h3v8h4Z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-600 grid place-items-center transition">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 7 17l-1.8-1.8A7.5 7.5 0 1 1 19.6 13H12V9.7h10v.3a10 10 0 0 1-10 12Z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-600 grid place-items-center transition">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.3.5.5.2.9.5 1.4.9.4.4.7.9.9 1.4.2.5.4 1.1.5 2.3 0 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.5 2.3-.2.5-.5.9-.9 1.4-.5.4-.9.7-1.4.9-.5.2-1.1.4-2.3.5-1.3 0-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.3-.5-.5-.2-.9-.5-1.4-.9a4 4 0 0 1-.9-1.4c-.2-.5-.4-1.1-.5-2.3 0-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.3-1.8.5-2.3.2-.5.5-.9.9-1.4.5-.4.9-.7 1.4-.9.5-.2 1.1-.4 2.3-.5 1.3 0 1.7-.1 4.9-.1ZM12 0C8.7 0 8.3 0 7 .1c-1.3 0-2.2.3-3 .6-.8.3-1.5.7-2.2 1.4C1.1 2.8.7 3.5.4 4.3c-.3.8-.5 1.7-.6 3C-.1 8.7 0 9.1 0 12.4s0 3.7.1 5c0 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3 0 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c0-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.8-10.4a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0Z"/></svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-600 grid place-items-center transition">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1-3.2-.2-8-.2-8-.2s-4.8 0-8 .2c-.4.1-1.4.1-2.2 1C.9 5.4.8 7 .8 7S.5 8.9.5 10.8v1.8c0 1.9.3 3.8.3 3.8s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.7.2 7.9.2 7.9.2s4.8 0 8-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.3-1.9.3-3.8V11c0-1.9-.2-3.8-.2-3.8ZM9.7 15V8.3l6.3 3.4-6.3 3.3Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-400">
        <div>© 2026 nhadat247.vn — Công ty cổ phần Bất Động Sản 247. Mã số DN: 0123456789.</div>
        <div class="flex gap-4">
          <a href="#" class="hover:text-primary-400">Điều khoản</a>
          <a href="#" class="hover:text-primary-400">Bảo mật</a>
          <a href="#" class="hover:text-primary-400">Quy chế hoạt động</a>
          <a href="#" class="hover:text-primary-400">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ---------- Mobile bottom nav (shared) ----------
function buildMobileNav(active = 'home') {
  const item = (key, label, href, icon) => `
    <a href="${href}" class="flex flex-col items-center justify-center gap-0.5 py-1.5 ${active===key?'text-primary-600':'text-ink-500'}">
      ${icon}<span class="text-[10px] font-medium">${label}</span>
    </a>`;
  return `
  <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 pb-[env(safe-area-inset-bottom)]">
    <div class="grid grid-cols-5 relative">
      ${item('home','Trang chủ','index.html',ic.home)}
      ${item('search','Tìm kiếm','listing.html',ic.search)}
      <a href="post.html" class="flex flex-col items-center justify-center -mt-6">
        <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 grid place-items-center text-white shadow-pop ring-4 ring-white">${ic.plus}</div>
        <span class="text-[10px] font-semibold text-primary-600 mt-0.5">Đăng tin</span>
      </a>
      ${item('msg','Tin nhắn','#',ic.msg)}
      ${item('me','Tài khoản','dashboard.html',ic.user)}
    </div>
  </nav>`;
}

// ---------- Icon placeholder replacement ----------
// Replaces <i data-ic="name"></i> placeholders with the matching SVG
function applyIcons(root = document) {
  root.querySelectorAll('[data-ic]').forEach(el => {
    const name = el.getAttribute('data-ic');
    if (ic[name]) el.innerHTML = ic[name];
  });
}

// ---------- Mounting helpers ----------
function mountShared(opts = {}) {
  const { active = 'home' } = opts;
  const h = document.getElementById('app-header');
  const f = document.getElementById('app-footer');
  const m = document.getElementById('app-mobilenav');
  if (h) h.innerHTML = buildHeader(active);
  if (f) f.innerHTML = buildFooter();
  if (m) m.innerHTML = buildMobileNav(active);

  // Mobile drawer wiring
  const open = document.getElementById('mobile-open');
  const drawer = document.getElementById('mobile-drawer');
  const close = document.getElementById('mobile-close');
  const back = document.getElementById('mobile-backdrop');
  function toggle(v) { drawer && drawer.classList.toggle('hidden', !v); }
  open && open.addEventListener('click', () => toggle(true));
  close && close.addEventListener('click', () => toggle(false));
  back && back.addEventListener('click', () => toggle(false));

  // Replace inline icon placeholders (both shared chrome and page body)
  applyIcons();
}

// ---------- Format helpers ----------
const fmt = {
  vnd(n) {
    if (n >= 1e9) return (n/1e9).toFixed(n%1e9===0?0:1).replace('.0','') + ' tỷ';
    if (n >= 1e6) return (n/1e6).toFixed(0) + ' triệu';
    return n.toLocaleString('vi-VN');
  },
  m2(n) { return n.toLocaleString('vi-VN') + ' m²'; }
};

// ---------- Sample data (Vietnamese) ----------
const SAMPLE_LISTINGS = [
  { id:1, title:'Căn hộ cao cấp view sông Saigon Pearl', price:6800000000, area:78, bed:2, bath:2, addr:'Q. Bình Thạnh, TP.HCM', type:'Căn hộ', img:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900', hot:true, vip:true, verified:true, postedAt:'2 giờ trước' },
  { id:2, title:'Nhà phố 3 tầng mặt tiền Nguyễn Văn Cừ', price:9200000000, area:72, bed:4, bath:3, addr:'Q.5, TP.HCM', type:'Nhà phố', img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900', hot:false, vip:true, verified:true, postedAt:'5 giờ trước' },
  { id:3, title:'Đất nền KDC Vinhomes Grand Park 100m²', price:4500000000, area:100, bed:0, bath:0, addr:'TP. Thủ Đức, TP.HCM', type:'Đất nền', img:'https://images.unsplash.com/photo-1448630360428-65456885c650?w=900', hot:true, vip:false, verified:true, postedAt:'Hôm qua' },
  { id:4, title:'Biệt thự nghỉ dưỡng ven hồ Tuyền Lâm', price:15800000000, area:320, bed:5, bath:4, addr:'Đà Lạt, Lâm Đồng', type:'Biệt thự', img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900', hot:false, vip:true, verified:true, postedAt:'1 ngày trước' },
  { id:5, title:'Căn hộ Studio full nội thất Vinhomes Smart City', price:2250000000, area:32, bed:1, bath:1, addr:'Q. Nam Từ Liêm, Hà Nội', type:'Căn hộ', img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900', hot:true, vip:false, verified:true, postedAt:'3 giờ trước' },
  { id:6, title:'Shophouse mặt tiền khu đô thị Ecopark', price:12500000000, area:90, bed:3, bath:3, addr:'Văn Giang, Hưng Yên', type:'Shophouse', img:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900', hot:false, vip:true, verified:false, postedAt:'Hôm nay' },
  { id:7, title:'Penthouse 2 tầng view toàn thành phố', price:22000000000, area:210, bed:4, bath:4, addr:'Q.2, TP.HCM', type:'Penthouse', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900', hot:true, vip:true, verified:true, postedAt:'6 giờ trước' },
  { id:8, title:'Nhà hẻm ô tô 4m Phan Xích Long', price:5600000000, area:48, bed:3, bath:2, addr:'Q. Phú Nhuận, TP.HCM', type:'Nhà phố', img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900', hot:false, vip:false, verified:true, postedAt:'2 ngày trước' },
];

const SAMPLE_PROJECTS = [
  { name:'Vinhomes Grand Park', city:'TP.HCM', status:'Đang mở bán', price:'Từ 2.1 tỷ', img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900', units:'12.500 căn' },
  { name:'Masterise Lumière Riverside', city:'TP.HCM', status:'Sắp bàn giao', price:'Từ 6.9 tỷ', img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900', units:'1.000 căn' },
  { name:'Ecopark Sky Oasis', city:'Hưng Yên', status:'Đang mở bán', price:'Từ 2.7 tỷ', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900', units:'4.200 căn' },
  { name:'Sun Grand City Hillside', city:'Phú Quốc', status:'Đã bàn giao', price:'Từ 7.5 tỷ', img:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900', units:'2.800 căn' },
];

const SAMPLE_CITIES = [
  { name:'TP. Hồ Chí Minh', count:'128.492', img:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800' },
  { name:'Hà Nội', count:'96.214', img:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800' },
  { name:'Đà Nẵng', count:'42.681', img:'https://images.unsplash.com/photo-1564694202779-bc908c327862?w=800' },
  { name:'Hải Phòng', count:'18.905', img:'https://images.unsplash.com/photo-1528291151377-165f5107c82a?w=800' },
  { name:'Cần Thơ', count:'12.340', img:'https://images.unsplash.com/photo-1528127269322-539801943592?w=800' },
  { name:'Nha Trang', count:'21.867', img:'https://images.unsplash.com/photo-1528127269322-539801943592?w=800' },
  { name:'Đà Lạt', count:'9.871', img:'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800' },
  { name:'Phú Quốc', count:'7.412', img:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800' },
];

const SAMPLE_NEWS = [
  { cat:'Thị trường', title:'Thị trường BĐS quý 1/2026: phân khúc căn hộ dẫn dắt đà phục hồi', date:'15/04/2026', img:'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800' },
  { cat:'Pháp lý', title:'Luật đất đai 2026 có hiệu lực: 7 điểm mới người mua nhà cần biết', date:'12/04/2026', img:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800' },
  { cat:'Phong thuỷ', title:'Cách chọn hướng nhà hợp tuổi gia chủ cho người sinh 1990', date:'10/04/2026', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800' },
];

const SAMPLE_AGENTS = [
  { name:'Nguyễn Minh Tú', role:'Chuyên viên cao cấp', rating:4.9, deals:187, area:'TP.HCM', avatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300' },
  { name:'Trần Bảo Ngọc', role:'Tư vấn dự án', rating:4.8, deals:142, area:'Hà Nội', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' },
  { name:'Lê Quốc Anh', role:'Môi giới BĐS', rating:4.9, deals:203, area:'Đà Nẵng', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
  { name:'Phạm Thanh Hương', role:'Chuyên viên nhà phố', rating:4.7, deals:116, area:'TP.HCM', avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
];
