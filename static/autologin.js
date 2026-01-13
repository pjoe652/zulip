  window.addEventListener("message", async (event) => {
    console.log("Received message for JWT login:", event.data);
    const data = event.data;
    if (!data || data.type !== "ZULIP_JWT_LOGIN") return;

    const token = data.token;
    if (!token) return;

    window.top.location.href = "https://zulip.example.com/accounts/login/jwt/?token=…";
  });