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

export const storeProducts: Product[] = [
    // Sneakers (sizes only for shoes)
    { category: 'sneakers', title: 'Nike Air Silver 1.0', price: '$120.00', originalPrice: '$140.00', stockStatus: 'In Stock (12)', image: 'https://placehold.co/300x200/2b6cb0/fff?text=Air+Silver+1.0', url: '#', description: 'Sleek, modern runner perfect for everyday athleisure.' },
    { category: 'sneakers', title: 'Jordan Retro High', price: '$160.00', originalPrice: '$180.00', stockStatus: 'In Stock (7)', image: 'https://placehold.co/300x200/e53e3e/fff?text=Jordan+Retro', url: '#', description: 'The undisputed king of sneaker culture. A true bestseller.', bestseller: true },
    { category: 'sneakers', title: 'Yeezy Boost 350', price: '$220.00', originalPrice: '$250.00', stockStatus: 'In Stock (4)', image: 'https://placehold.co/300x200/38a169/fff?text=Yeezy+Boost+350', url: '#', description: 'Premium knit upper with unbelievable comfort.' },
    { category: 'sneakers', title: 'Vans Old Skool Classic', price: '$65.00', originalPrice: '$75.00', stockStatus: 'In Stock (15)', image: 'https://placehold.co/300x200/000/fff?text=Vans+Old+Skool', url: '#', description: 'The skater classic that never goes out of style. Super popular bestseller.', bestseller: true },
    { category: 'sneakers', title: 'New Balance 574 Core', price: '$85.00', originalPrice: '$95.00', stockStatus: 'In Stock (9)', image: 'https://placehold.co/300x200/805ad5/fff?text=New+Balance+574', url: '#', description: 'Retro chunky runner with unmatched stability.' },
    // Apparel (no sizes in widget — one-size or use for apparel later if needed)
    { category: 'apparel', title: 'Vintage Graphic Tee', price: '$30.00', originalPrice: '$35.00', stockStatus: 'In Stock (20)', image: 'https://placehold.co/300x200/ff9800/fff?text=Graphic+Tee', url: '#', description: 'Soft spun cotton with faded retro graphics.' },
    { category: 'apparel', title: 'Distressed Denim Jacket', price: '$89.00', originalPrice: '$99.00', stockStatus: 'In Stock (5)', image: 'https://placehold.co/300x200/3f51b5/fff?text=Denim+Jacket', url: '#', description: 'A timeless wardrobe essential with hand-distressed detailing.' },
    { category: 'apparel', title: 'Relaxed Fit Cargo Pants', price: '$55.00', stockStatus: 'In Stock (8)', image: 'https://placehold.co/300x200/607d8b/fff?text=Cargo+Pants', url: '#', description: 'Utilitarian style with ample storage space.' },
    { category: 'apparel', title: 'Essential Fleece Hoodie', price: '$65.00', originalPrice: '$75.00', stockStatus: 'In Stock (11)', image: 'https://placehold.co/300x200/f44336/fff?text=Hoodie', url: '#', description: 'Heavyweight bestseller hoodie for colder days.', bestseller: true },
    { category: 'apparel', title: 'Nylon Zip Windbreaker', price: '$75.00', stockStatus: 'In Stock (6)', image: 'https://placehold.co/300x200/009688/fff?text=Windbreaker', url: '#', description: 'Water-resistant lightweight pullover.' },
    // Accessories (no sizes)
    { category: 'accessories', title: 'Classic Leather Wallet', price: '$40.00', originalPrice: '$48.00', stockStatus: 'In Stock (25)', image: 'https://placehold.co/300x200/795548/fff?text=Leather+Wallet', url: '#', description: 'Minimalist bi-fold leather wallet.' },
    { category: 'accessories', title: 'Aura Smart Watch X', price: '$195.00', originalPrice: '$220.00', stockStatus: 'In Stock (3)', image: 'https://placehold.co/300x200/9c27b0/fff?text=Smart+Watch', url: '#', description: 'Track your fitness and stay connected on the go.' },
    { category: 'accessories', title: 'Polarized Aviator Sunglasses', price: '$50.00', originalPrice: '$65.00', stockStatus: 'In Stock (14)', image: 'https://placehold.co/300x200/e91e63/fff?text=Sunglasses', url: '#' },
    { category: 'accessories', title: 'Canvas Travel Backpack', price: '$60.00', stockStatus: 'In Stock (10)', image: 'https://placehold.co/300x200/cddc39/000?text=Backpack', url: '#' },
    { category: 'accessories', title: 'Embroidered Dad Cap', price: '$25.00', stockStatus: 'In Stock (30)', image: 'https://placehold.co/300x200/03a9f4/fff?text=Cap', url: '#' },
    // Electronics / demo (reference-style)
    { category: 'electronics', title: 'Noise-Cancelling Over-Ear Headphones with Microphone', price: '$712.15', originalPrice: '$814.25', stockStatus: 'In Stock (7)', image: 'https://placehold.co/300x200/374151/fff?text=Headphones', url: '#', description: 'Premium sound with active noise cancellation.' },
    { category: 'electronics', title: 'Portable Power Bank with Quick Charge Technology', price: '$712.15', originalPrice: '$814.25', stockStatus: 'Out of Stock', image: 'https://placehold.co/300x200/6b7280/fff?text=Power+Bank', url: '#', description: 'High-capacity fast charging on the go.' },
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
    items: { title: string; price: string; size?: string }[];
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
