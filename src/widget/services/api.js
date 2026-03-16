/** REST API for checkout: OTP, addresses, place order */
const defaultBase = 'http://localhost:3000';

function base(apiBaseUrl) {
    return (apiBaseUrl || defaultBase).replace(/\/$/, '');
}

export async function checkoutSendOtp(sessionId, phone, apiBaseUrl) {
    const res = await fetch(`${base(apiBaseUrl)}/api/checkout/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, phone: String(phone).replace(/\D/g, '') }),
    });
    return res.json();
}

export async function checkoutVerifyOtp(sessionId, phone, code, apiBaseUrl) {
    const res = await fetch(`${base(apiBaseUrl)}/api/checkout/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sessionId,
            phone: String(phone).replace(/\D/g, ''),
            code: String(code).replace(/\D/g, '').slice(0, 4),
        }),
    });
    return res.json();
}

export async function checkoutGetAddresses(sessionId, apiBaseUrl) {
    const res = await fetch(`${base(apiBaseUrl)}/api/checkout/addresses?sessionId=${encodeURIComponent(sessionId)}`);
    const data = await res.json();
    return data.addresses || [];
}

export async function checkoutAddAddress(sessionId, address, apiBaseUrl) {
    const res = await fetch(`${base(apiBaseUrl)}/api/checkout/address`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, address }),
    });
    return res.json();
}

export async function checkoutPlaceOrder(sessionId, addressId, paymentMethod, apiBaseUrl) {
    const res = await fetch(`${base(apiBaseUrl)}/api/checkout/place-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, addressId: Number(addressId), paymentMethod: paymentMethod === 'prepaid' ? 'prepaid' : 'COD' }),
    });
    return res.json();
}
