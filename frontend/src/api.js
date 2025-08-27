export async function fetchOrders() {
  const res = await fetch("http://localhost:3000/api/orders");
  return await res.json();
}

export async function updateOrderStatus(uniqid, metka) {
  const res = await fetch("http://localhost:3000/api/update-status", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uniqid, metka }),
  });
  return res.ok;
}
