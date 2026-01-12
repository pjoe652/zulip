  window.addEventListener("message", async (event) => {
    console.log("Received message for JWT login:", event.data);
    const data = event.data;
    if (!data || data.type !== "ZULIP_JWT_LOGIN") return;

    const token = data.token;
    if (!token) return;

    // POST to Zulip JWT login endpoint
    const formData = new FormData();
    formData.append("token", token);

    try {
      const res = await fetch("{% url 'zerver.views.accounts.login_jwt' %}", {
        method: "POST",
        body: formData,
        credentials: "same-origin",
      });

      if (res.ok) {
        window.location.reload();
      } else {
        console.error("JWT login failed");
      }
    } catch (err) {
      console.error("JWT login error", err);
    }
  });