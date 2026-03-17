export interface Product {
    category: string;
    title: string;
    price: string;
    image: string;
    url: string;
    description?: string;
    bestseller?: boolean;
    sizes?: string[];
    originalPrice?: string;
    stockStatus?: string; // e.g. "In Stock (7)" or "Out of Stock"
}

const shoeSizes = ["US 8", "US 9", "US 10", "US 11"];

// Real product demo images (Unsplash, cropped 400x300)
const IMG = {
    nike: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    jordan: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=300&fit=crop',
    yeezy: 'https://images.unsplash.com/photo-1600185365926-7a121e3b7c4e?w=400&h=300&fit=crop',
    vans: 'https://images.unsplash.com/photo-1579338559194-162654c4a42d?w=400&h=300&fit=crop',
    newbalance: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=300&fit=crop',
    tee: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    denim: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
    cargo: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop',
    hoodie: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
    windbreaker: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop',
    wallet: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop',
    watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    sunglasses: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    backpack: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    cap: 'https://images.unsplash.com/photo-1588850561407-752bc4516d2a?w=400&h=300&fit=crop',
    headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    powerbank: 'https://images.unsplash.com/photo-1609099518303-83ac2b1e3b16?w=400&h=300&fit=crop',
};

export const storeProducts: Product[] = [
    // Sneakers (sizes only for shoes)
    { category: 'sneakers', title: 'Nike Air Silver 1.0', price: '$120.00', originalPrice: '$140.00', stockStatus: 'In Stock (12)', image: IMG.nike, url: '#', description: 'Sleek, modern runner perfect for everyday athleisure.' },
    { category: 'sneakers', title: 'Jordan Retro High', price: '$160.00', originalPrice: '$180.00', stockStatus: 'In Stock (7)', image: IMG.jordan, url: '#', description: 'The undisputed king of sneaker culture. A true bestseller.', bestseller: true },
    { category: 'sneakers', title: 'Yeezy Boost 350', price: '$220.00', originalPrice: '$250.00', stockStatus: 'In Stock (4)', image: IMG.yeezy, url: '#', description: 'Premium knit upper with unbelievable comfort.' },
    { category: 'sneakers', title: 'Vans Old Skool Classic', price: '$65.00', originalPrice: '$75.00', stockStatus: 'In Stock (15)', image: IMG.vans, url: '#', description: 'The skater classic that never goes out of style. Super popular bestseller.', bestseller: true },
    { category: 'sneakers', title: 'New Balance 574 Core', price: '$85.00', originalPrice: '$95.00', stockStatus: 'In Stock (9)', image: IMG.newbalance, url: '#', description: 'Retro chunky runner with unmatched stability.' },
    // Apparel
    { category: 'apparel', title: 'Vintage Graphic Tee', price: '$30.00', originalPrice: '$35.00', stockStatus: 'In Stock (20)', image: IMG.tee, url: '#', description: 'Soft spun cotton with faded retro graphics.' },
    { category: 'apparel', title: 'Distressed Denim Jacket', price: '$89.00', originalPrice: '$99.00', stockStatus: 'In Stock (5)', image: IMG.denim, url: '#', description: 'A timeless wardrobe essential with hand-distressed detailing.' },
    { category: 'apparel', title: 'Relaxed Fit Cargo Pants', price: '$55.00', stockStatus: 'In Stock (8)', image: IMG.cargo, url: '#', description: 'Utilitarian style with ample storage space.' },
    { category: 'apparel', title: 'Essential Fleece Hoodie', price: '$65.00', originalPrice: '$75.00', stockStatus: 'In Stock (11)', image: IMG.hoodie, url: '#', description: 'Heavyweight bestseller hoodie for colder days.', bestseller: true },
    { category: 'apparel', title: 'Nylon Zip Windbreaker', price: '$75.00', stockStatus: 'In Stock (6)', image: IMG.windbreaker, url: '#', description: 'Water-resistant lightweight pullover.' },
    // Accessories
    { category: 'accessories', title: 'Classic Leather Wallet', price: '$40.00', originalPrice: '$48.00', stockStatus: 'In Stock (25)', image: IMG.wallet, url: '#', description: 'Minimalist bi-fold leather wallet.' },
    { category: 'accessories', title: 'Aura Smart Watch X', price: '$195.00', originalPrice: '$220.00', stockStatus: 'In Stock (3)', image: IMG.watch, url: '#', description: 'Track your fitness and stay connected on the go.' },
    { category: 'accessories', title: 'Polarized Aviator Sunglasses', price: '$50.00', originalPrice: '$65.00', stockStatus: 'In Stock (14)', image: IMG.sunglasses, url: '#' },
    { category: 'accessories', title: 'Canvas Travel Backpack', price: '$60.00', stockStatus: 'In Stock (10)', image: IMG.backpack, url: '#' },
    { category: 'accessories', title: 'Embroidered Dad Cap', price: '$25.00', stockStatus: 'In Stock (30)', image: IMG.cap, url: '#' },
    // Electronics
    { category: 'electronics', title: 'Noise-Cancelling Over-Ear Headphones with Microphone', price: '$712.15', originalPrice: '$814.25', stockStatus: 'In Stock (7)', image: IMG.headphones, url: '#', description: 'Premium sound with active noise cancellation.' },
    { category: 'electronics', title: 'Portable Power Bank with Quick Charge Technology', price: '$712.15', originalPrice: '$814.25', stockStatus: 'Out of Stock', image: IMG.powerbank, url: '#', description: 'High-capacity fast charging on the go.' },
].map((p) => {
    const base = { ...p };
    if (p.category === 'sneakers') {
        (base as Product).sizes = shoeSizes;
    }
    return base as Product;
});

export interface Order {
    id: string;
    phone: string;
    status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    items: { title: string; price: string; size?: string; image?: string }[];
    total: number;
    date: string;
}

export const mockOrders: Order[] = [
    {
        id: "ORD-1001",
        phone: "1234567890",
        status: "Shipped",
        items: [{ title: "Jordan Retro High", price: "$160.00", size: "US 10" }],
        total: 160.00,
        date: "2023-10-01"
    },
    {
        id: "ORD-1002",
        phone: "1234567890",
        status: "Delivered",
        items: [{ title: "Essential Fleece Hoodie", price: "$65.00", size: "L" }],
        total: 65.00,
        date: "2023-09-15"
    }
];
