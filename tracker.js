(async function () {
  const WORKER_URL = "https://my-web-site.sasha88543.workers.dev";

  if (sessionStorage.getItem("tracked")) return;
  sessionStorage.setItem("tracked", "1");

  console.log("[tracker] Скрипт запущен");

  const payload = {
    region: "—", city: "—", isp: "—",
    ua:   navigator.userAgent,
    lang: navigator.language || "—",
    page: location.href,
  };

  try {
    const resp = await fetch(`${WORKER_URL}/track`, {
      method:    "POST",
      headers:   { "Content-Type": "application/json" },
      body:      JSON.stringify(payload),
      keepalive: true,
    });
    const data = await resp.json();
    console.log("[tracker] Ответ Worker'а:", data);
  } catch (err) {
    console.error("[tracker] Ошибка:", err);
  }
})();
