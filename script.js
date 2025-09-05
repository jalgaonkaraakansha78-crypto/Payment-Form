<script>
  const stripe = Stripe("pk_test_YourPublicKeyHere"); // Use your Stripe public key

  document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ /* you can send form data here */ })
    });

    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.sessionId });
  });
</script>
