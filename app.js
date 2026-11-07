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
    highlights: ["6'lı Özel Kutulu", "%85 Taranmış Pamuk", "Ter & Koku Önleyici", "Standart Esnek Kalıp"]
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
    highlights: ["6'lı Özel Kutulu", "Özel Nakış İşleme", "Dikişsiz Burun Konforu", "Standart Esnek Kalıp"]
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
    highlights: ["6'lı Özel Kutulu", "Kaymaz Bilek Bandı", "Ekstra Yumuşak Tuşe", "Standart Esnek Kalıp"]
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
    highlights: ["6'lı Kutu Avantajı", "Hava Kanallı Doku", "Esnek Kemer Desteği", "Standart Esnek Kalıp"]
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
    highlights: ["6'lı Özel Kutulu", "Form Koruyan Likra", "Şık Hediye Kutusu", "Standart Esnek Kalıp"]
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
    const hasSize = product.category === "baxtir";
    const currentSize = selectedSizes[product.id] || "L";
    const sizeButtonsHtml = SIZES.map(sz => `
      <button
        type="button"
        class="size-btn ${currentSize === sz ? "selected" : ""}"
        onclick="selectProductSize('${product.id}', '${sz}')"
      >${sz}</button>
    `).join("");

    const sizeSectionHtml = hasSize
      ? `
        <div class="size-selector-block">
          <div class="size-label-row">
            <span>Beden Seçiniz: <strong style="color:var(--gold-light)">${currentSize}</strong></span>
            <span class="size-stock-ok">● Stokta Hazır</span>
          </div>
          <div class="size-options">
            ${sizeButtonsHtml}
          </div>
        </div>
      `
      : `
        <div class="size-selector-block" style="padding:0.65rem 0.85rem;">
          <div class="size-label-row" style="margin-bottom:0;">
            <span>✨ Standart Esnek Kalıp</span>
            <span class="size-stock-ok">● Stokta Hazır</span>
          </div>
        </div>
      `;

    const addBtnLabel = hasSize ? `🛍️ Sepete Ekle (${currentSize})` : `🛍️ Sepete Ekle`;

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

          ${sizeSectionHtml}

          <div class="product-footer">
            <div class="price-wrap">
              <span class="old-price">${product.oldPrice} ₺</span>
              <span class="current-price">${product.price} ₺</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.45rem; flex:1;">
              <button type="button" class="add-cart-btn" onclick="addToCart('${product.id}')">
                ${addBtnLabel}
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
  const hasSize = product.category === "baxtir";
  const currentSize = selectedSizes[productId] || "L";
  const modal = document.getElementById("quickViewModal");
  modal.dataset.productId = productId;

  const qvSizeHtml = hasSize
    ? `
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
    `
    : `
      <div class="size-selector-block">
        <div class="size-label-row" style="margin-bottom:0;">
          <span>✨ Standart Esnek Kalıp (Her Ayağa Tam Uyum)</span>
          <span class="size-stock-ok">✓ Stokta Mevcut</span>
        </div>
      </div>
    `;

  const qvAddBtnText = hasSize ? `🛍️ (${currentSize} Beden) Sepete Ekle` : `🛍️ Hemen Sepete Ekle`;

  const container = document.getElementById("quickViewBody");
  container.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-img-col" id="qvZoomStage">
        <img id="qvZoomImg" src="${product.image}" alt="${product.title}" onerror="this.src='assets/products/lv_corap_seti.jpg'" />
        <span class="zoom-hint-pill">🔍 Yakınlaştırmak için görsel üzerinde gezinin</span>
      </div>
      <div class="quickview-info-col">
        <span class="section-eyebrow">${product.brand} • ${product.packInfo}</span>
        <h2 style="font-family:'Cinzel',serif; font-size:1.55rem; line-height:1.25;">${product.title}</h2>
        <div style="color:#fbbf24; font-weight:700; font-size:0.9rem;">★★★★★ ${product.rating} • %100 Müşteri Memnuniyeti</div>
        <p style="color:var(--text-muted); line-height:1.68; font-size:0.93rem;">${product.fullDesc}</p>

        <div class="product-highlights">
          ${product.highlights.map(h => `<span class="highlight-pill">✨ ${h}</span>`).join("")}
        </div>

        ${qvSizeHtml}

        <div style="display:flex; flex-direction:column; gap:0.7rem; margin-top:auto; padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
            <div>
              <span class="old-price">${product.oldPrice} ₺</span>
              <div class="current-price">${product.price} ₺</div>
            </div>
            <button type="button" class="btn-gold" onclick="addToCart('${product.id}'); closeQuickView();">
              ${qvAddBtnText}
            </button>
          </div>
          <button type="button" class="whatsapp-order-btn" style="margin-bottom:0;" onclick="quickBuyWhatsApp('${product.id}')">
            💬 WhatsApp Uygulamasında Hemen Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("open");
  bindLensZoom();
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
  const hasSize = product.category === "baxtir";
  const size = hasSize ? (selectedSizes[productId] || "L") : null;
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
  showToast(size ? `👑 ${product.title} (${size} Beden) sepete eklendi!` : `👑 ${product.title} sepete eklendi!`);
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
  const dockCountEl = document.getElementById("mobileDockCartCount");
  if (dockCountEl) dockCountEl.textContent = totalCount;

  const listEl = document.getElementById("cartItemsList");
  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <div style="font-size:2.8rem; margin-bottom:0.8rem;">🛍️</div>
        <p style="font-weight:700; color:#fff; margin-bottom:0.4rem;">VIP Sepetiniz Şu An Boş</p>
        <p style="font-size:0.85rem;">Koleksiyondan ürünlerinizi hemen ekleyin, 3 kutu ve üzeri alımda anında %15 VIP indirimi kazanın!</p>
      </div>
    `;
  } else {
    listEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/products/lv_corap_seti.jpg'" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">${item.size ? `Beden: <strong>${item.size}</strong> • ` : ""}Birim: ${item.price} ₺</div>
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

// Direkt WhatsApp Uygulamasını Açan Yardımcı Fonksiyon (Tarayıcı ara sayfasına takılmaz!)
window.launchWhatsAppApp = function(messageText) {
  const encoded = encodeURIComponent(messageText);
  window.location.href = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encoded}`;
};

// WhatsApp & Instant Order (Direkt WhatsApp Uygulamasına 0542 575 30 08 yönlendirmeli)
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
    const sizePart = item.size ? ` | Beden: *${item.size}*` : "";
    lines.push(`${i + 1}. ${item.title}${sizePart} | Adet: *${item.qty}* (${item.price * item.qty} ₺)`);
  });
  lines.push(`────────────────────`);
  lines.push(`💰 *Ödenecek Toplam:* ${document.getElementById("cartFinalTotal").textContent}`);
  if (appliedCoupon) lines.push(`🎁 *Aktif Kupon:* ${appliedCoupon}`);

  launchWhatsAppApp(lines.join("\n"));
};

window.quickBuyWhatsApp = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const hasSize = product.category === "baxtir";
  const size = selectedSizes[productId] || "L";
  const lines = [
    `👑 *VIP BOXER STORE - HIZLI SİPARİŞ* 👑`,
    `Merhaba, aşağıdaki ürünü sipariş vermek istiyorum:`,
    `📦 *Ürün:* ${product.title}`
  ];
  if (hasSize) {
    lines.push(`📏 *Beden:* ${size}`);
  }
  lines.push(`💰 *Fiyat:* ${product.price} ₺`);
  launchWhatsAppApp(lines.join("\n"));
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

// 1. VIP Royal Intro Curtain
function initRoyalIntro() {
  const splash = document.getElementById("vipIntroSplash");
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add("hide");
    setTimeout(() => { splash.style.display = "none"; }, 800);
  }, 1150);
}

// 2. Floating 24K Gold Dust Canvas & Cursor Spotlight
function initGoldDustAndSpotlight() {
  const spotlight = document.getElementById("cursorSpotlight");
  if (spotlight && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    }, { passive: true });
  } else if (spotlight) {
    spotlight.style.display = "none";
  }

  const canvas = document.getElementById("goldDustCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 768 ? 28 : 55;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.9 + 0.5,
    vx: (Math.random() - 0.5) * 0.28,
    vy: -Math.random() * 0.45 - 0.12,
    alpha: Math.random() * 0.65 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(249, 229, 150, ${p.alpha})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// 3. 3D Perspective Card Tilt
function bind3DTiltCards() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const cards = document.querySelectorAll(".product-card, .hero-visual-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// 4. HD Lens Zoom in Quick View
function bindLensZoom() {
  const stage = document.getElementById("qvZoomStage");
  const img = document.getElementById("qvZoomImg");
  if (!stage || !img) return;

  const moveZoom = (clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    stage.classList.add("zooming");
    img.style.transformOrigin = `${xPct}% ${yPct}%`;
  };

  stage.addEventListener("mousemove", (e) => moveZoom(e.clientX, e.clientY));
  stage.addEventListener("mouseleave", () => {
    stage.classList.remove("zooming");
    img.style.transformOrigin = "center center";
  });
  stage.addEventListener("touchmove", (e) => {
    if (e.touches[0]) moveZoom(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  stage.addEventListener("touchend", () => stage.classList.remove("zooming"));
}

// 5. Instagram-Style VIP Story Viewer
const STORIES_DATA = [
  { productId: "ck-baxtir-3lu" },
  { productId: "tommy-baxtir-3lu" },
  { productId: "puma-baxtir-3lu" },
  { productId: "lv-vip-6li" },
  { productId: "gucci-vip-6li" },
  { productId: "ck-vip-6li" },
  { productId: "uspolo-vip-6li" }
];
let currentStoryIdx = 0;
let storyTimer = null;
let storyProgress = 0;

window.openStoryViewer = function(idx) {
  currentStoryIdx = idx;
  document.getElementById("storyModal").classList.add("open");
  showStorySlide(currentStoryIdx);
};

window.closeStoryViewer = function() {
  clearInterval(storyTimer);
  document.getElementById("storyModal").classList.remove("open");
};

window.stepStory = function(dir) {
  const next = currentStoryIdx + dir;
  if (next < 0) {
    showStorySlide(0);
  } else if (next >= STORIES_DATA.length) {
    closeStoryViewer();
  } else {
    currentStoryIdx = next;
    showStorySlide(currentStoryIdx);
  }
};

function showStorySlide(idx) {
  clearInterval(storyTimer);
  storyProgress = 0;
  const entry = STORIES_DATA[idx];
  const product = PRODUCTS.find(p => p.id === entry.productId) || PRODUCTS[0];

  document.getElementById("storyBrandText").textContent = product.brand;
  document.getElementById("storyMainImg").src = product.image;
  document.getElementById("storyTitleText").textContent = product.title;
  document.getElementById("storyPriceText").textContent = `${product.price} ₺ • ${product.packInfo}`;
  const actionBtn = document.getElementById("storyActionBtn");
  actionBtn.onclick = () => {
    closeStoryViewer();
    openQuickView(product.id);
  };

  const progRow = document.getElementById("storyProgressRow");
  progRow.innerHTML = STORIES_DATA.map((_, i) => `
    <div class="story-prog-seg">
      <div class="story-prog-fill" id="storySegFill_${i}" style="width:${i < idx ? 100 : 0}%"></div>
    </div>
  `).join("");

  storyTimer = setInterval(() => {
    storyProgress += 2.5;
    const activeFill = document.getElementById(`storySegFill_${idx}`);
    if (activeFill) activeFill.style.width = `${Math.min(100, storyProgress)}%`;
    if (storyProgress >= 100) {
      stepStory(1);
    }
  }, 100);
}

// 6. Cinematic Scroll Reveal
function initScrollReveal() {
  const targets = document.querySelectorAll(".features-strip, .section-wrap, .baxtir-spotlight, .bundle-section, .review-card, .vip-stories-section");
  targets.forEach(el => el.classList.add("reveal-item"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

const _origRenderProducts = renderProducts;
renderProducts = function() {
  _origRenderProducts();
  bind3DTiltCards();
};

document.addEventListener("DOMContentLoaded", () => {
  initRoyalIntro();
  renderProducts();
  updateCartUI();
  initLiveAtmosphere();
  initGoldDustAndSpotlight();
  initScrollReveal();
});
