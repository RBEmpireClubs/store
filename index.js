// Master Data Source Object for Dropshipping Catalog Storefront
const catalogProducts = [
    {
        sku: "RB-APEX-01",
        title: "Apex Wireless ANC Over-Ears",
        description: "Engineered with proprietary sound dampening spatial acoustic arrays and high performance 45-hour lithium processing boards.",
        badge: "Top Seller",
        originalPrice: "₹14,999",
        currentPrice: "₹8,499",
        gradientBg: "linear-gradient(45deg, #4f46e5, #06b6d4)"
    },
    {
        sku: "RB-QTM-05",
        title: "Quantum Telemetry Smartwatch",
        description: "Next-generation wellness ecosystem capturing advanced pulse patterns and biometric feedback telemetry inside structural armor.",
        badge: "Limited Drop",
        originalPrice: "₹22,000",
        currentPrice: "₹12,499",
        gradientBg: "linear-gradient(45deg, #7c3aed, #ed4690)"
    },
    {
        sku: "RB-OMNI-BAK",
        title: "Omni Weatherproof Tech Pack",
        description: "Ballistic grade composite weaves configured with shockproof deployment zones optimized for digital nomad assets.",
        badge: "Flash Deal",
        originalPrice: "₹6,500",
        currentPrice: "₹3,199",
        gradientBg: "linear-gradient(45deg, #10b981, #3b82f6)"
    }
];

// Document Object Model Entry Pipeline Execution
document.addEventListener("DOMContentLoaded", () => {
    const productRoot = document.getElementById("product-root");
    
    if (!productRoot) return;

    // Formulate layout blocks iteration looping arrays
    catalogProducts.forEach(product => {
        const cardElement = document.createElement("div");
        cardElement.className = "glass-card";

        cardElement.innerHTML = `
            <div class="card-img-wrapper" style="background: ${product.gradientBg}">
                <span class="card-badge">${product.badge}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${product.title}</h3>
                <p class="card-desc">${product.description}</p>
                <div class="card-footer">
                    <div class="price-group">
                        <span class="price-old">${product.originalPrice}</span>
                        <span class="price-current">${product.currentPrice}</span>
                    </div>
                    <a href="product.html?sku=${encodeURIComponent(product.sku)}" class="buy-btn">View Deal</a>
                </div>
            </div>
        `;

        productRoot.appendChild(cardElement);
    });
});
