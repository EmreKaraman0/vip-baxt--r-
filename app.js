const SIZES = ["S", "M", "L", "XL", "XXL"];
const WHATSAPP_PHONE = "905425753008";

const PRODUCTS = [
  {
    id: "ck-baxtir-3lu",
    category: "baxtir",
    brand: "CALVIN KLEIN BOXER SERİSİ",
    title: "Calvin Klein (CK) Özel Kutulu 3'lü VIP Boxer Seti",
    image: "assets/products/ck_baxtir_seti.jpg?v=7",
    badge: "ÇOK SATAN BOXER",
    packInfo: "3'lü Özel Kutulu (3 Pack)",
    rating: "5.0 (214 Yorum)",
    oldPrice: 399,
    price: 275,
    shortDesc: "Kırmızı ikonik Calvin Klein kemer detaylı, nefes alan likralı birinci sınıf penye kumaş, özel 3'lü CK kutusunda VIP boxer seti.",
    fullDesc: "Calvin Klein 3 Pack Özel Kutulu VIP Boxer Seti! Nefes alabilen esnek pamuk-likra dokusu sayesinde gün boyu maksimum konfor ve hareket özgürlüğü sunar. Beli sıkmayan ikonik kırmızı Calvin Klein logolu elastik kemeri ve paçada toplanma yapmayan tam kalıp kesimiyle S'den XXL'a tüm bedenlerde kusursuz uyum sağlar.",
    highlights: ["3 Adet Özel Kutulu", "Nefes Alan Likralı Penye", "Toplanma Yapmaz Kalıp", "S - XXL Tüm Bedenler"]
  },
  {
    id: "tommy-baxtir-3lu",
    category: "baxtir",
    brand: "TOMMY HILFIGER BOXER SERİSİ",
    title: "Tommy Hilfiger Özel Kutulu 3'lü VIP Boxer Seti",
    image: "assets/products/tommy_baxtir_seti.jpg?v=7",
    badge: "PREMİUM BOXER",
    packInfo: "3'lü Özel Kutulu (3 Pack)",
    rating: "4.9 (178 Yorum)",
    oldPrice: 399,
    price: 275,
    shortDesc: "Mavi ikonik Tommy Hilfiger dokuma kemerli, terletmeyen yumuşak süprem pamuklu, şık 3'lü kutusunda VIP boxer seti.",
    fullDesc: "Tommy Hilfiger 3 Pack Özel Kutulu VIP Boxer Seti! Özel dokuma mavi logolu esnek bel bandı iz yapmaz, yüksek kaliteli siyah likralı penye kumaşı yıkamalarda formunu ve rengini korur. Günlük kullanımda ve sporda üstün rahatlık arayanlar için S - M - L - XL - XXL tam kalıp seçenekleriyle stokta!",
    highlights: ["3 Adet Özel Kutulu", "İkonik Dokuma Kemer", "Terletmeyen Pamuk Doku", "S - XXL Tam Kalıp"]
  },
  {
    id: "puma-baxtir-3lu",
    category: "baxtir",
    brand: "PUMA BOXER SERİSİ",
    title: "Puma Sport-Lux Özel Kutulu 3'lü VIP Boxer Seti",
    image: "assets/products/puma_baxtir_seti.jpg?v=7",
    badge: "SPOR & GÜNLÜK",
    packInfo: "3'lü Özel Kutulu (3 Pack)",
    rating: "4.9 (165 Yorum)",
    oldPrice: 399,
    price: 275,
    shortDesc: "Dinamik kırmızı Puma kemerli, ekstra esnek ve dayanıklı likralı pamuk dokulu, özel 3'lü Puma kutusunda VIP boxer seti.",
    fullDesc: "Puma 3 Pack Özel Kutulu VIP Boxer Seti! Hareketli günler ve maksimum rahatlık için geliştirilen esnek likralı yapısı vücudu sıkmadan sarar. Ter emici doğal pamuklu dokusu ve şık 3'lü hediye kutusuyla hem kendiniz hem sevdikleriniz için 1 numara tercih!",
    highlights: ["3 Adet Özel Kutulu", "Ekstra Esnek Likra", "Yıpranmaz Bel Bandı", "S - XXL Tüm Bedenler"]
  },
  {
    id: "lv-vip-6li",
    category: "corap",
    brand: "LOUIS VUITTON SERİSİ",
    title: "LV Özel Yeşil Kutulu 6'lı VIP Patik Çorap Seti",
    image: "assets/products/lv_corap_seti.jpg?v=7",
    badge: "EN ÇOK SATAN VIP",
    packInfo: "6 Çift Özel Kutulu",
    rating: "4.9 (184 Yorum)",
    oldPrice: 350,
    price: 225,
    shortDesc: "Zümrüt yeşili ve altın varaklı özel pencereli koleksiyon kutusunda 6 çift (Siyah & Beyaz kombin) lüks penye pamuk patik çorap.",
    fullDesc: "Girdiğiniz her ortamda fark yaratan LV Özel Kutulu 6'lı VIP Set! Terletmeyen %85 taranmış birinci sınıf penye pamuk dokusu, bileği sıkmayan esnek likralı yapısı ve burun-topuk takviyesiyle gün boyu ultra konfor sunar. Özel pencereli şık kutusuyla 6 çift olarak gönderilir.",
    highlights: ["6'lı Özel Kutulu", "%85 Taranmış Pamuk", "Ter & Koku Önleyici", "S - XXL Tüm Bedenler"]
  },
  {
    id: "gucci-vip-6li",
    category: "corap",
    brand: "GUCCI SERİSİ",
    title: "Gucci İkonik Kutulu 6'lı VIP Patik Çorap Seti",
    image: "assets/products/gucci_corap_seti.jpg?v=7",
    badge: "LÜKS SERİ",
    packInfo: "6 Çift Özel Kutulu",
    rating: "5.0 (162 Yorum)",
    oldPrice: 350,
    price: 225,
    shortDesc: "İkonik yeşil-kırmızı şerit detaylı gold pencereli kutusunda 6 çift nakış işlemeli ultra yumuşak VIP patik çorap seti.",
    fullDesc: "İtalyan stilini adımlarınıza taşıyan Gucci İkonik 6'lı Kutulu VIP Set! Bilek ve burun kısmındaki yüksek yoğunluklu özel nakış işlemesi yıkamalarda asla bozulmaz. Nefes alan gözenekli pamuk dokusu sayesinde dört mevsim ferah kullanım sağlar.",
    highlights: ["6'lı Özel Kutulu", "Özel Nakış İşleme", "Dikişsiz Burun Konforu", "S - XXL Tüm Bedenler"]
  },
  {
    id: "ck-vip-6li",
    category: "corap",
    brand: "CALVIN KLEIN SERİSİ",
    title: "Calvin Klein (CK) Özel Kutulu 6'lı VIP Çorap Seti",
    image: "assets/products/ck_corap_seti.jpg?v=7",
    badge: "FAVORİ KOMBİN",
    packInfo: "6 Çift Özel Kutulu",
    rating: "4.9 (149 Yorum)",
    oldPrice: 340,
    price: 225,
    shortDesc: "Minimalist lacivert-beyaz-altın pencereli kutusunda 6 çift (Siyah & Beyaz) ekstra yumuşak dokulu günlük & klasik VIP çorap.",
    fullDesc: "Modern ve minimalist şıklığın zirvesi Calvin Klein 6'lı VIP Kutu! Sneaker, loafer ve günlük ayakkabılarla kusursuz uyum sağlayan bilek boy kesimi, kayma yapmayan elastik bandı ve ipeksi pamuk tuşesiyle vazgeçilmeziniz olacak.",
    highlights: ["6'lı Özel Kutulu", "Kaymaz Bilek Bandı", "Ekstra Yumuşak Tuşe", "S - XXL Tüm Bedenler"]
  },
  {
    id: "puma-vip-6li",
    category: "corap",
    brand: "PUMA SPORT-LUX SERİSİ",
    title: "Puma Dinamik Kutulu 6'lı VIP Spor Çorap Seti",
    image: "assets/products/puma_corap_seti.jpg?v=7",
    badge: "SPOR & GÜNLÜK",
    packInfo: "6 Çift Özel Kutulu",
    rating: "4.9 (137 Yorum)",
    oldPrice: 340,
    price: 225,
    shortDesc: "Kırmızı-siyah özel tasarım pencereli kutusunda 6 çift ekstra esnek, darbe emici taban destekli spor ve günlük VIP çorap seti.",
    fullDesc: "Yüksek tempolu günler ve spor kombinler için tasarlanan Puma 6'lı VIP Kutu! Ayak kemerini saran dinamik esnek dokusu, nem transferi sağlayan hava kanalları ve dayanıklı topuk dokumasıyla maksimum performans ve şıklığı birleştirir.",
    highlights: ["6'lı Kutu Avantajı", "Hava Kanallı Doku", "Esnek Kemer Desteği", "S - XXL Tüm Bedenler"]
  },
  {
    id: "uspolo-vip-6li",
    category: "corap",
    brand: "U.S. POLO ASSN. SERİSİ",
    title: "U.S. Polo Assn. Özel Kutulu 6'lı VIP Çorap Seti",
    image: "assets/products/uspolo_corap_seti.jpg?v=7",
    badge: "KLASİK ASALET",
    packInfo: "6 Çift Özel Kutulu",
    rating: "4.9 (128 Yorum)",
    oldPrice: 340,
    price: 225,
    shortDesc: "Asil lacivert-kırmızı-altın plakalı kutusunda 6 çift üç renk şerit detaylı birinci sınıf penye pamuk VIP çorap seti.",
    fullDesc: "Zamansız Amerikan klasiği U.S. Polo Assn. 6'lı VIP Set! İnce işçilikli bilek nakışı, formunu kaybetmeyen likralı penye kumaşı ve şık hediye kutusuyla gardırobunuzun en kaliteli parçalarından biri olmaya aday.",
    highlights: ["6'lı Özel Kutulu", "Form Koruyan Likra", "Şık Hediye Kutusu", "S - XXL Tam Kalıp"]
  }
];

let selectedSizes = {};
PRODUCTS.forEach(p => {
  selectedSizes[p.id] = "L"; // Varsayılan popüler beden seçili gelir, tek tıkla S-M-L-XL-XXL değiştirilir
});

let cart = [];
let activeFilter = "all";
let appliedCoupon = null;

// Render Products
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const list = activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  grid.innerHTML = list.map(product => {
    const currentSize = selectedSizes[product.id] || "L";
    const sizeButtonsHtml = SIZES.map(sz => `
      <button
        type="button"
        class="size-btn ${currentSize === sz ? "selected" : ""}"
        onclick="selectProductSize('${product.id}', '${sz}')"
      >${sz}</button>
    `).join("");

    return `
      <article class="product-card" data-category="${product.category}">
        <div class="product-media" onclick="openQuickView('${product.id}')">
          <div class="product-badges">
            <span class="badge-vip">👑 ${product.badge}</span>
            <span class="badge-pack">📦 ${product.packInfo}</span>
          </div>
          <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='assets/products/lv_corap_seti.jpg'" />
          <button type="button" class="quick-zoom-btn" onclick="event.stopPropagation(); openQuickView('${product.id}')">
            🔍 Detaylı İncele
          </button>
        </div>

        <div class="product-body">
          <div class="product-brand-row">
            <span class="product-brand">${product.brand}</span>
            <span class="product-rating">★ ${product.rating}</span>
          </div>

          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.shortDesc}</p>

          <div class="product-highlights">
            ${product.highlights.map(h => `<span class="highlight-pill">✓ ${h}</span>`).join("")}
          </div>

          <div class="size-selector-block">
            <div class="size-label-row">
              <span>Beden Seçiniz: <strong style="color:var(--gold-light)">${currentSize}</strong></span>
              <span class="size-stock-ok">● Stokta Hazır</span>
            </div>
            <div class="size-options">
              ${sizeButtonsHtml}
            </div>
          </div>

          <div class="product-footer">
            <div class="price-wrap">
              <span class="old-price">${product.oldPrice} ₺</span>
              <span class="current-price">${product.price} ₺</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.45rem; flex:1;">
              <button type="button" class="add-cart-btn" onclick="addToCart('${product.id}')">
                🛍️ Sepete Ekle (${currentSize})
              </button>
              <button type="button" class="card-wp-btn" onclick="quickBuyWhatsApp('${product.id}')">
                💬 WP Hızlı Sipariş
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

window.selectProductSize = function(productId, size) {
  selectedSizes[productId] = size;
  renderProducts();
  // Eğer QuickView açıksa oradaki beden seçimini de güncelle
  const modal = document.getElementById("quickViewModal");
  if (modal.classList.contains("open") && modal.dataset.productId === productId) {
    openQuickView(productId);
  }
};

// Filter Tabs
window.setCategoryFilter = function(cat, btnEl) {
  activeFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderProducts();
};

// Hero Thumbnail Switcher
window.switchHeroImage = function(src, titleText, thumbEl) {
  const mainImg = document.getElementById("heroMainImg");
  const caption = document.getElementById("heroCaptionTitle");
  mainImg.src = src;
  if (caption && titleText) caption.textContent = titleText;
  document.querySelectorAll(".hero-thumb").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
};

// Quick View Modal
window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const currentSize = selectedSizes[productId] || "L";
  const modal = document.getElementById("quickViewModal");
  modal.dataset.productId = productId;

  const container = document.getElementById("quickViewBody");
  container.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-img-col">
        <img src="${product.image}" alt="${product.title}" onerror="this.src='assets/products/lv_corap_seti.jpg'" />
      </div>
      <div class="quickview-info-col">
        <span class="section-eyebrow">${product.brand} • ${product.packInfo}</span>
        <h2 style="font-family:'Cinzel',serif; font-size:1.55rem; line-height:1.25;">${product.title}</h2>
        <div style="color:#fbbf24; font-weight:700; font-size:0.9rem;">★★★★★ ${product.rating} • %100 Müşteri Memnuniyeti</div>
        <p style="color:var(--text-muted); line-height:1.68; font-size:0.93rem;">${product.fullDesc}</p>

        <div class="product-highlights">
          ${product.highlights.map(h => `<span class="highlight-pill">✨ ${h}</span>`).join("")}
        </div>

        <div class="size-selector-block">
          <div class="size-label-row">
            <span>Beden Seçimi (Tam Kalıp): <strong style="color:var(--gold-light)">${currentSize}</strong></span>
            <span class="size-stock-ok">✓ S - XXL Tüm Bedenler Mevcut</span>
          </div>
          <div class="size-options">
            ${SIZES.map(sz => `
              <button
                type="button"
                class="size-btn ${currentSize === sz ? "selected" : ""}"
                onclick="selectProductSize('${product.id}', '${sz}')"
              >${sz}</button>
            `).join("")}
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:0.7rem; margin-top:auto; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
            <div>
              <span class="old-price">${product.oldPrice} ₺</span>
              <div class="current-price">${product.price} ₺</div>
            </div>
            <button type="button" class="btn-gold" onclick="addToCart('${product.id}'); closeQuickView();">
              🛍️ (${currentSize} Beden) Sepete Ekle
            </button>
          </div>
          <button type="button" class="whatsapp-order-btn" style="margin-bottom:0;" onclick="quickBuyWhatsApp('${product.id}')">
            💬 WhatsApp ile Hemen Sipariş Ver (0542 575 30 08)
          </button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("open");
};

window.closeQuickView = function() {
  document.getElementById("quickViewModal").classList.remove("open");
};

// Size Guide Modal
window.openSizeGuide = function() {
  document.getElementById("sizeGuideModal").classList.add("open");
};
window.closeSizeGuide = function() {
  document.getElementById("sizeGuideModal").classList.remove("open");
};

// Cart Logic
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = selectedSizes[productId] || "L";
  const existing = cart.find(item => item.productId === productId && item.size === size);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      productId: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      size: size,
      qty: 1
    });
  }
  updateCartUI();
  showToast(`👑 ${product.title} (${size} Beden) sepete eklendi!`);
  openCartDrawer();
};

window.changeCartQty = function(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
};

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById("cartBadgeCount").textContent = totalCount;

  const listEl = document.getElementById("cartItemsList");
  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <div style="font-size:2.8rem; margin-bottom:0.8rem;">🛍️</div>
        <p style="font-weight:700; color:#fff; margin-bottom:0.4rem;">VIP Sepetiniz Şu An Boş</p>
        <p style="font-size:0.85rem;">Koleksiyondan S - M - L - XL - XXL beden seçerek hemen ekleyin, 3 set ve üzeri alımda anında %15 VIP indirimi kazanın!</p>
      </div>
    `;
  } else {
    listEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/products/lv_corap_seti.jpg'" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">Beden: <strong>${item.size}</strong> • Birim: ${item.price} ₺</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeCartQty(${idx}, -1)">−</button>
            <span style="font-size:0.85rem; font-weight:700;">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
          </div>
        </div>
        <div style="font-weight:800; color:var(--gold-light); font-size:0.95rem;">
          ${item.price * item.qty} ₺
        </div>
      </div>
    `).join("");
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  // 3 set ve üzeri otomatik %15 VIP İndirim
  const bundleDiscount = totalCount >= 3 ? Math.round(subtotal * 0.15) : 0;
  const couponDiscount = appliedCoupon ? Math.round((subtotal - bundleDiscount) * 0.10) : 0;
  const finalTotal = Math.max(0, subtotal - bundleDiscount - couponDiscount);

  document.getElementById("cartSubtotal").textContent = `${subtotal} ₺`;
  document.getElementById("cartDiscount").textContent =
    (bundleDiscount + couponDiscount) > 0 ? `-${bundleDiscount + couponDiscount} ₺` : "0 ₺";
  document.getElementById("cartFinalTotal").textContent = `${finalTotal} ₺`;

  const promoHint = document.getElementById("cartPromoHint");
  if (totalCount > 0 && totalCount < 3) {
    promoHint.innerHTML = `🔥 Sepete <strong>${3 - totalCount} kutu daha</strong> eklerseniz anında <strong>%15 VIP Kombin İndirimi</strong> aktif olur!`;
  } else if (totalCount >= 3) {
    promoHint.innerHTML = `🎉 Tebrikler! <strong>%15 VIP Çoklu Kutu İndirimi + Ücretsiz Kargo</strong> kazandınız!`;
  } else {
    promoHint.innerHTML = `✨ Tüm siparişlerde şeffaf kargo ve kapıda ödeme imkanı!`;
  }
}

window.openCartDrawer = function() {
  document.getElementById("cartDrawerBackdrop").classList.add("open");
};
window.closeCartDrawer = function() {
  document.getElementById("cartDrawerBackdrop").classList.remove("open");
};

// WhatsApp & Instant Order (Direkt 0542 575 30 08 yönlendirmeli)
window.completeOrderWhatsApp = function() {
  if (cart.length === 0) {
    showToast("Lütfen önce sepetinize en az 1 ürün ekleyin!");
    return;
  }
  const customerName = document.getElementById("orderCustomerName").value.trim() || "Belirtilmedi";
  const customerAddress = document.getElementById("orderCustomerAddress").value.trim() || "Mesajda belirtilecek";

  let lines = [
    `👑 *VIP BOXER STORE - YENİ SİPARİŞ* 👑`,
    `👤 *Müşteri:* ${customerName}`,
    `📍 *Teslimat Adresi:* ${customerAddress}`,
    `────────────────────`
  ];
  cart.forEach((item, i) => {
    lines.push(`${i + 1}. ${item.title} | Beden: *${item.size}* | Adet: *${item.qty}* (${item.price * item.qty} ₺)`);
  });
  lines.push(`────────────────────`);
  lines.push(`💰 *Ödenecek Toplam:* ${document.getElementById("cartFinalTotal").textContent}`);
  if (appliedCoupon) lines.push(`🎁 *Aktif Kupon:* ${appliedCoupon}`);

  const msg = encodeURIComponent(lines.join("\n"));
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, "_blank");
};

window.quickBuyWhatsApp = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = selectedSizes[productId] || "L";
  const lines = [
    `👑 *VIP BOXER STORE - HIZLI SİPARİŞ* 👑`,
    `Merhaba, aşağıdaki ürünü sipariş vermek istiyorum:`,
    `📦 *Ürün:* ${product.title}`,
    `📏 *Beden:* ${size}`,
    `💰 *Fiyat:* ${product.price} ₺`
  ];
  const msg = encodeURIComponent(lines.join("\n"));
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, "_blank");
};

// VIP Wheel / Lucky Coupon Modal
window.openWheelModal = function() {
  document.getElementById("wheelModal").classList.add("open");
};
window.closeWheelModal = function() {
  document.getElementById("wheelModal").classList.remove("open");
};
window.spinVipCoupon = function() {
  const btn = document.getElementById("spinBtn");
  btn.disabled = true;
  btn.textContent = "👑 VIP Şansınız Çevriliyor...";

  setTimeout(() => {
    appliedCoupon = "VIP10ALTIN";
    updateCartUI();
    document.getElementById("couponResultBox").style.display = "block";
    btn.textContent = "✅ %10 İndirim Sepetinize Tanımlandı!";
    showToast("🎁 Harika! Ekstra %10 VIP Hoş Geldin İndirimi kazandınız!");
  }, 1100);
};

// Toast Helper
function showToast(message) {
  const toast = document.getElementById("vipToast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Live Viewers Counter & Subtle Social Proof
function initLiveAtmosphere() {
  const countEl = document.getElementById("liveViewerCount");
  setInterval(() => {
    const base = 24 + Math.floor(Math.random() * 15);
    if (countEl) countEl.textContent = base;
  }, 4500);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  initLiveAtmosphere();
});
