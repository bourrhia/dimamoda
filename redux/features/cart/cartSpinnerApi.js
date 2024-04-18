"use client";
export async function fetchCartSpinner(initialPost) {
  const response = await fetch("/api/cart/cartspinner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(initialPost),
  });

  const result = await response.json();

  return result;
}
