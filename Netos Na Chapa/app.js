const WHATSAPP_NUMBER = "5564999992266";

let customerLocationLink = "";
const DELIVERY_FEE = 0;
const PIX_KEY = "+5564999992266";
const PIX_KEY_LABEL = "64 99999-2266";
const OPEN_DAYS = [1, 2, 3, 4, 5, 6];
const OPEN_RANGES = [["18:00", "23:30"]];

const images = {
  smash: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=82",
  double: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=82",
  bacon: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=82",
  chickenBurger: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=82",
  veggie: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=82",
  sides: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=82",
  drinks: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=82",
  skol600: "assets/skol-pilsen-600ml.jpg",
  brahma600: "assets/brahma-600ml.jpg",
  amstel600: "assets/amstel-600ml.jpg",
  original600: "assets/original-600ml.jpg",
  heineken600: "assets/heineken-600ml.jpg",
  contraFileMandioca: "assets/contra-file-mandioca.jpg",
  caftaMandioca: "assets/cafta-mandioca.jpg",
  coracaoFrangoMandioca: "assets/coracao-frango-mandioca.jpg",
  franbaconMandioca: "assets/franbacon-mandioca.jpg",
  linguicaMandioca: "assets/linguica-mandioca.jpg",
  asinhaFrangoMandioca: "assets/asinha-frango-mandioca.jpg",
  picanhaMandioca: "assets/picanha-mandioca.jpg",
  pancetaMandioca: "assets/panceta-mandioca.jpg",
  queijoCoalhoMandioca: "assets/queijo-coalho-mandioca.jpg",
  cupimMandioca: "assets/cupim-mandioca.jpg",
  contraFileJantinha: "assets/contra-file-jantinha.jpg",
  caftaJantinha: "assets/cafta-jantinha.jpg",
  coracaoFrangoJantinha: "assets/coracao-frango-jantinha.jpg",
  franbaconJantinha: "assets/franbacon-jantinha.jpg",
  cupimJantinha: "assets/cupim-jantinha.jpg",
  linguicaJantinha: "assets/linguica-jantinha.jpg",
  picanhaJantinha: "assets/picanha-jantinha.jpg",
  asinhaFrangoJantinha: "assets/asinha-frango-jantinha.jpg",
  pancetaJantinha: "assets/panceta-jantinha.jpg",
  queijoCoalhoJantinha: "assets/queijo-coalho-jantinha.jpg",
  batataFritaCompleta: "assets/batata-frita-completa.jpg",
  torresmo: "assets/torresmo.jpg",
  fileTilapia: "assets/file-tilapia.jpg",
  frangoFrito: "assets/frango-frito.jpg",
  linguicaAcebolada: "assets/linguica-acebolada.jpg",
  figadoAcebolado: "assets/figado-acebolado.jpg",
  carneAceboladaFritasMucarela: "assets/carne-acebolada-fritas-mucarela.jpg",
  carneQueijoMandioca: "assets/carne-queijo-mandioca.jpg",
  arroz: "assets/arroz.jpg",
  feijaoTropeiro: "assets/feijao-tropeiro.jpg",
  mandioca: "assets/mandioca.jpg",
  vinagrete: "assets/vinagrete.jpg",
  almocoJantaAVontade: "assets/almoco-janta-a-vontade.jpg",
  almocoJantaNoKilo: "assets/almoco-janta-no-kilo.jpg",
  pratoFeitoMarmita: "assets/prato-feito-marmita.jpg",
};

const products = [
  { id: "xsalada", category: "Lanches", name: "X-Salada", description: "Pao, hamburguer, presunto, mussarela, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 20, image: images.smash },
  { id: "xtudo", category: "Lanches", name: "X-Tudo", description: "Pao, hamburguer, presunto, mussarela, calabresa, bacon, salsicha, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 27, image: images.double },
  { id: "xbacon", category: "Lanches", name: "X-Bacon", description: "Pao, hamburguer, presunto, mussarela, bacon, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 24, image: images.bacon },
  { id: "xcalabresa", category: "Lanches", name: "X-Calabresa", description: "Pao, hamburguer, presunto, mussarela, calabresa, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 23, image: images.double },
  { id: "xfrango", category: "Lanches", name: "X-Frango", description: "Pao, frango, presunto, mussarela, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 21, image: images.chickenBurger },
  { id: "xfile", category: "Lanches", name: "X-File", description: "Pao, file, presunto, mussarela, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 26, image: images.double },
  { id: "xfile-bacon", category: "Lanches", name: "X-File c/ Bacon", description: "Pao, file, presunto, mussarela, bacon, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 29, image: images.bacon },
  { id: "xnetos", category: "Lanches", name: "X-Netos", description: "Pao, hamburguer, file frango, file, presunto, mussarela, calabresa, bacon, salsicha, cheddar, ovo, tomate, alface, abacaxi, banana, milho e batata.", price: 34, image: images.double },
  { id: "cinco-queijo", category: "Especial da Casa", name: "Cinco Queijo", description: "Pao, 2 hamburguer, mussarela, catupiry, cheddar, queijo prato e queijo coalho.", price: 25, image: images.double },
  { id: "queijo-no-mel", category: "Especial da Casa", name: "Queijo no Mel", description: "Pao, hamburguer, bacon, queijo coalho, banana, abacaxi e mel.", price: 25, image: images.bacon },
  { id: "romeu-julieta", category: "Doce na Chapa", name: "Romeu e Julieta", description: "Pao, hamburguer, mussarela, bacon caramelizado na goiabada e catupiry.", price: 20, image: images.smash },
  { id: "quatro-queijo", category: "Doce na Chapa", name: "Quatro Queijo", description: "Pao, 2 hamburguer, mussarela, cheddar, catupiry, queijo prato, cebola caramelizada e abacaxi.", price: 23, image: images.double },
  { id: "bacon-geleia", category: "Doce na Chapa", name: "Bacon com Geleia", description: "Pao, hamburguer, mussarela, bacon, geleia de pimenta e cheddar.", price: 20, image: images.bacon },
  { id: "monte-pao", category: "Monte seu Lanche", name: "Pao", description: "Adicional para montar seu lanche.", price: 4, image: images.smash },
  { id: "monte-hamburguer", category: "Monte seu Lanche", name: "Hamburguer", description: "Adicional para montar seu lanche.", price: 5, image: images.smash },
  { id: "monte-molhos", category: "Monte seu Lanche", name: "Molhos", description: "Adicional para montar seu lanche.", price: 0.5, image: images.sides },
  { id: "monte-presunto-mussarela", category: "Monte seu Lanche", name: "Presunto ou Mussarela", description: "Adicional para montar seu lanche. Valor por item.", price: 2, image: images.double },
  { id: "monte-salsicha-ovo", category: "Monte seu Lanche", name: "Salsicha ou Ovo", description: "Adicional para montar seu lanche. Valor por item.", price: 2, image: images.double },
  { id: "monte-bacon-calabresa", category: "Monte seu Lanche", name: "Bacon ou Calabresa", description: "Adicional para montar seu lanche. Valor por item.", price: 4, image: images.bacon },
  { id: "monte-catupiry-cheddar", category: "Monte seu Lanche", name: "Catupiry ou Cheddar", description: "Adicional para montar seu lanche. Valor por item.", price: 2, image: images.double },
  { id: "monte-file-mignon", category: "Monte seu Lanche", name: "File Mignon", description: "Adicional para montar seu lanche.", price: 5, image: images.double },
  { id: "monte-file-frango", category: "Monte seu Lanche", name: "File Frango", description: "Adicional para montar seu lanche.", price: 4, image: images.chickenBurger },
  { id: "monte-frutas-saladas", category: "Monte seu Lanche", name: "Frutas e Saladas", description: "Adicional para montar seu lanche. Valor por item.", price: 1, image: images.veggie },
  { id: "monte-geleia-pimenta", category: "Monte seu Lanche", name: "Geleia Pimenta", description: "Adicional para montar seu lanche.", price: 3, image: images.sides },
  { id: "monte-bacon-nangoiabada", category: "Monte seu Lanche", name: "Bacon na Goiabada", description: "Adicional para montar seu lanche.", price: 4, image: images.bacon },
  { id: "caldo-frango", category: "Caldos", name: "Frango", description: "Acompanha mussarela, cebolinha e torrada.", price: 18, image: images.sides },
  { id: "caldo-carne-seca", category: "Caldos", name: "Carne Seca", description: "Acompanha mussarela, cebolinha e torrada.", price: 18, image: images.sides },
  { id: "caldo-misto", category: "Caldos", name: "Misto", description: "Acompanha mussarela, cebolinha e torrada.", price: 18, image: images.sides },
  { id: "omelete-pequeno", category: "Omelete", name: "Pequeno", description: "4 ovos, presunto, mussarela, cebola, bacon, tomate e milho.", price: 18, image: images.sides },
  { id: "omelete-medio", category: "Omelete", name: "Medio", description: "6 ovos, presunto, mussarela, cebola, bacon, tomate e milho.", price: 20, image: images.sides },
  { id: "omelete-grande", category: "Omelete", name: "Grande", description: "8 ovos, presunto, mussarela, cebola, bacon, tomate e milho.", price: 22, image: images.sides },
  { id: "coca-2l", category: "Refrigerantes e Sucos", name: "Coca 2 Litros", description: "Bebida gelada.", price: 13, image: images.drinks },
  { id: "coca-2l-zero", category: "Refrigerantes e Sucos", name: "Coca 2 Litros Zero", description: "Bebida gelada.", price: 13, image: images.drinks },
  { id: "mineiro-2l-zero", category: "Refrigerantes e Sucos", name: "Mineiro 2 Litros Zero", description: "Bebida gelada.", price: 10, image: images.drinks },
  { id: "mineiro-2l", category: "Refrigerantes e Sucos", name: "Mineiro 2 Litros", description: "Bebida gelada.", price: 10, image: images.drinks },
  { id: "coca-lata", category: "Refrigerantes e Sucos", name: "Coca Lata", description: "Bebida gelada.", price: 5, image: images.drinks },
  { id: "coca-lata-zero", category: "Refrigerantes e Sucos", name: "Coca Lata Zero", description: "Bebida gelada.", price: 5, image: images.drinks },
  { id: "suco-laranja-500", category: "Refrigerantes e Sucos", name: "Suco Laranja 500ml", description: "Suco natural.", price: 10, image: images.drinks },
];
const combos = [];

const promos = [];

const categories = ["Todos", ...new Set(products.map((item) => item.category))];
let currentCategory = "Todos";
let cart = [];

const formatPrice = (value) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const menuGrid = document.querySelector("#menuGrid");
const comboGrid = document.querySelector("#comboGrid");
const promoGrid = document.querySelector("#promoGrid");
const filters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartBadge = document.querySelector("#cartBadge");

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function updateStoreStatus() {
  const status = document.querySelector("#storeStatus");
  if (!status) return;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const activeRange = OPEN_RANGES.find(([start, end]) => currentMinutes >= timeToMinutes(start) && currentMinutes <= timeToMinutes(end));
  const isOpen = OPEN_DAYS.includes(now.getDay()) && Boolean(activeRange);

  status.classList.toggle("open", isOpen);
  status.classList.toggle("closed", !isOpen);
  status.querySelector("strong").textContent = isOpen ? "Aberto agora" : "Fechado agora";
  status.querySelector("small").textContent = isOpen ? `Atendimento ate ${activeRange[1]}` : "Segunda a sabado, 18:00-23:30";
}

function pixField(id, value) {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function crc16(payload) {
  let crc = 0xffff;
  for (let index = 0; index < payload.length; index += 1) {
    crc ^= payload.charCodeAt(index) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function getCartTotal() {
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "mesa";
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return orderType === "entrega" && cart.length ? subtotal + DELIVERY_FEE : subtotal;
}

function createPixPayload(amount = 0) {
  const merchantAccount = pixField("00", "br.gov.bcb.pix") + pixField("01", PIX_KEY);
  const payloadWithoutCrc = [
    pixField("00", "01"),
    pixField("26", merchantAccount),
    pixField("52", "0000"),
    pixField("53", "986"),
    amount > 0 ? pixField("54", amount.toFixed(2)) : "",
    pixField("58", "BR"),
    pixField("59", "NETOS NA CHAPA"),
    pixField("60", "RIO VERDE"),
    pixField("62", pixField("05", "***")),
    "6304",
  ].join("");

  return `${payloadWithoutCrc}${crc16(payloadWithoutCrc)}`;
}

function setupPixQrCode() {
  const qrCode = document.querySelector("#pixQrCode");
  const pixKey = document.querySelector("#pixKey");
  if (pixKey) pixKey.textContent = PIX_KEY_LABEL;
  if (!qrCode) return;

  const amount = getCartTotal();
  const pixPayload = createPixPayload(amount);
  qrCode.dataset.payload = pixPayload;
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(pixPayload)}`;
  qrCode.alt = amount > 0 ? `QR Code Pix no valor de ${formatPrice(amount)}` : "QR Code Pix";
}

function updatePixBox() {
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "mesa";
  const payment = document.querySelector('input[name="paymentMethod"]:checked')?.value || "";
  const pixBox = document.querySelector("#deliveryPixBox");
  if (!pixBox) return;

  pixBox.classList.toggle("hidden", !(orderType === "entrega" && payment === "Pix"));
}

async function copyPixKey() {
  const status = document.querySelector("#pixCopyStatus");
  const qrCode = document.querySelector("#pixQrCode");
  const pixPayload = qrCode?.dataset.payload || createPixPayload(getCartTotal());
  try {
    await navigator.clipboard.writeText(pixPayload);
    status.textContent = "Pix copia e cola copiado.";
  } catch {
    status.textContent = `Copie a chave: ${PIX_KEY_LABEL}`;
  }
}

function renderFilters() {
  filters.innerHTML = categories
    .map((category) => `<button type="button" class="${category === currentCategory ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const visible = products.filter((item) => {
    const matchesCategory = currentCategory === "Todos" || item.category === currentCategory;
    const matchesSearch = [item.name, item.description, item.category].join(" ").toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  menuGrid.innerHTML = visible
    .map(
      (item) => `
      <article class="product-card reveal">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="product-body">
          <span class="product-category">${item.category}</span>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="product-footer">
            <span class="price">${formatPrice(item.price)}</span>
            <button class="add-button" type="button" data-add="${item.id}">Adicionar</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
  observeReveals();
}

function renderCombos() {
  const comboSection = comboGrid.closest("section");
  comboSection.hidden = combos.length === 0;

  comboGrid.innerHTML = combos
    .map(
      (combo) => `
      <article class="combo-card">
        <h3>${combo.name}</h3>
        <ul>${combo.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="product-footer">
          <strong class="price">${formatPrice(combo.price)}</strong>
        </div>
        <button class="add-button" type="button" data-combo="${combo.id}">Adicionar combo</button>
      </article>
    `
    )
    .join("");
}

function renderPromos() {
  const promoSection = promoGrid.closest("section");
  promoSection.hidden = promos.length === 0;

  promoGrid.innerHTML = promos
    .map(
      (promo) => `
      <article class="promo-card">
        <span class="discount">${promo.badge}</span>
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
      </article>
    `
    )
    .join("");
}

function addToCart(item) {
  const found = cart.find((cartItem) => cartItem.id === item.id);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ ...item, qty: 1, note: "" });
  }
  renderCart();
  openCart();
}

function changeQty(id, amount) {
  cart = cart
    .map((item) => (item.id === id ? { ...item, qty: item.qty + amount } : item))
    .filter((item) => item.qty > 0);
  renderCart();
}

function updateItemNote(id, note) {
  cart = cart.map((item) => (item.id === id ? { ...item, note } : item));
}

function renderCart() {
  cartItems.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
          <article class="cart-row">
            <div class="cart-row-main">
              <div>
                <h3>${item.name}</h3>
                <span>${formatPrice(item.price * item.qty)}</span>
              </div>
              <div class="qty-control" aria-label="Quantidade de ${item.name}">
                <button class="qty-button" type="button" data-qty="${item.id}" data-amount="-1">-</button>
                <strong>${item.qty}</strong>
                <button class="qty-button" type="button" data-qty="${item.id}" data-amount="1">+</button>
              </div>
            </div>
            <label class="item-note">
              <span>Obs. do item</span>
              <input type="text" data-note="${item.id}" value="${escapeHtml(item.note)}" placeholder="Ex.: sem cebola" />
            </label>
          </article>
        `
        )
        .join("")
    : "<p>Seu carrinho esta vazio. Escolha seus burgers favoritos.</p>";

  const total = getCartTotal();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartTotal.textContent = formatPrice(total);
  cartBadge.textContent = count;
  setupPixQrCode();
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function useCustomerLocation() {
  const status = document.querySelector("#locationStatus");

  if (!navigator.geolocation) {
    status.textContent = "Seu navegador nao permite enviar localizacao.";
    return;
  }

  status.textContent = "Solicitando permissao de localizacao...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      customerLocationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
      status.textContent = "Localizacao adicionada ao pedido.";
    },
    () => {
      customerLocationLink = "";
      status.textContent = "Nao foi possivel obter a localizacao. Preencha o endereco.";
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

function sendOrder() {
  if (!cart.length) {
    openCart();
    return;
  }

  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const orderError = document.querySelector("#orderError");
  const tableInput = document.querySelector("#tableNumber");
  const tableNumber = tableInput.value.trim();
  const pickupData = {
    name: document.querySelector("#pickupName").value.trim(),
    payment: document.querySelector('input[name="pickupPaymentMethod"]:checked')?.value || "",
  };
  const deliveryData = {
    name: document.querySelector("#customerName").value.trim(),
    phone: document.querySelector("#customerPhone").value.trim(),
    address: document.querySelector("#deliveryAddress").value.trim(),
    neighborhood: document.querySelector("#deliveryNeighborhood").value.trim(),
    payment: document.querySelector('input[name="paymentMethod"]:checked')?.value || "",
  };

  orderError.textContent = "";

  if (orderType === "mesa" && (!tableNumber || Number(tableNumber) < 1)) {
    openCart();
    orderError.textContent = "Informe um numero de mesa valido para enviar o pedido.";
    tableInput.focus();
    return;
  }

  if (orderType === "retirada") {
    if (!pickupData.name) {
      openCart();
      orderError.textContent = "Informe o nome para retirada.";
      document.querySelector("#pickupName").focus();
      return;
    }

    if (!pickupData.payment) {
      openCart();
      orderError.textContent = "Informe a forma de pagamento.";
      document.querySelector('input[name="pickupPaymentMethod"]').focus();
      return;
    }
  }

  if (orderType === "entrega") {
    const requiredDeliveryFields = [
      ["name", "#customerName", "Informe o nome para entrega."],
      ["phone", "#customerPhone", "Informe o telefone para entrega."],
      ["address", "#deliveryAddress", "Informe o endereco completo para entrega."],
      ["neighborhood", "#deliveryNeighborhood", "Informe o bairro para entrega."],
      ["payment", 'input[name="paymentMethod"]', "Informe a forma de pagamento."],
    ];
    const missingField = requiredDeliveryFields.find(([key]) => !deliveryData[key]);

    if (missingField) {
      openCart();
      orderError.textContent = missingField[2];
      document.querySelector(missingField[1]).focus();
      return;
    }
  }
  const notes = document.querySelector("#orderNotes").value.trim();
  const lines = cart.map((item) => {
    const note = item.note?.trim();
    return `- ${item.qty}x ${item.name} - ${formatPrice(item.price * item.qty)}${note ? `\n  Obs.: ${note}` : ""}`;
  });
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = orderType === "entrega" ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;
  const orderInfo =
    orderType === "mesa"
      ? [`Tipo: Mesa`, `Mesa: ${tableNumber}`]
      : orderType === "retirada"
      ? [`Tipo: Retirada`, `Nome: ${pickupData.name}`, `Pagamento: ${pickupData.payment}`]
      : [
          `Tipo: Entrega`,
          `Nome: ${deliveryData.name}`,
          `Telefone: ${deliveryData.phone}`,
          `Endereco: ${deliveryData.address}`,
          `Bairro: ${deliveryData.neighborhood}`,
          customerLocationLink ? `Localizacao: ${customerLocationLink}` : "",
          `Pagamento: ${deliveryData.payment}`,
        ];
  const message = [
    "Ola, Neto's na Chapa! Quero fazer um pedido:",
    "",
    ...orderInfo,
    "",
    ...lines,
    "",
    orderType === "entrega" ? `Subtotal: ${formatPrice(subtotal)}` : "",
    orderType === "entrega" ? `Taxa de entrega: ${formatPrice(deliveryFee)}` : "",
    `Total: ${formatPrice(total)}`,
    notes ? `Observacoes: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => observer.observe(element));
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  currentCategory = button.dataset.category;
  renderFilters();
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const comboButton = event.target.closest("[data-combo]");
  const qtyButton = event.target.closest("[data-qty]");

  if (addButton) {
    addToCart(products.find((item) => item.id === addButton.dataset.add));
  }

  if (comboButton) {
    const combo = combos.find((item) => item.id === comboButton.dataset.combo);
    addToCart({ id: combo.id, category: "Combos", name: combo.name, description: combo.items.join(", "), price: combo.price });
  }

  if (qtyButton) {
    changeQty(qtyButton.dataset.qty, Number(qtyButton.dataset.amount));
  }
});

cartItems.addEventListener("input", (event) => {
  const noteInput = event.target.closest("[data-note]");
  if (!noteInput) return;
  updateItemNote(noteInput.dataset.note, noteInput.value);
});

document.querySelector("#openCart").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector("#sendOrder").addEventListener("click", sendOrder);
document.querySelector("#useLocation").addEventListener("click", useCustomerLocation);
document.querySelector("#copyPixKey").addEventListener("click", copyPixKey);
document.querySelectorAll('input[name="orderType"]').forEach((input) => {
  input.addEventListener("change", () => {
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "mesa";
    const isDelivery = orderType === "entrega";
    document.querySelector("#tableFields").classList.toggle("hidden", orderType !== "mesa");
    document.querySelector("#pickupFields").classList.toggle("hidden", orderType !== "retirada");
    document.querySelector("#deliveryFields").classList.toggle("hidden", !isDelivery);
    document.querySelector("#orderError").textContent = "";
    document.querySelector("#locationStatus").textContent = "";
    document.querySelector("#pixCopyStatus").textContent = "";
    updatePixBox();
    renderCart();
  });
});
document.querySelectorAll("#tableNumber, #pickupName, #customerName, #customerPhone, #deliveryAddress, #deliveryNeighborhood, input[name='paymentMethod'], input[name='pickupPaymentMethod']").forEach((input) => {
  input.addEventListener("input", () => {
    document.querySelector("#orderError").textContent = "";
  });
  input.addEventListener("change", () => {
    document.querySelector("#orderError").textContent = "";
    updatePixBox();
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});

renderFilters();
renderProducts();
renderCombos();
renderPromos();
renderCart();
updateStoreStatus();
setupPixQrCode();
updatePixBox();
setInterval(updateStoreStatus, 60000);
observeReveals();
