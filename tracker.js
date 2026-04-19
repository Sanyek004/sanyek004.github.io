(async function () {
  const WORKER_URL = "https://my-web-site.sasha88543.workers.dev";

  if (sessionStorage.getItem("tracked")) return;
  sessionStorage.setItem("tracked", "1");

  const payload = {
    ua:   navigator.userAgent,
    lang: navigator.language || "—",
    page: location.href,
  };

  navigator.sendBeacon(
    `${WORKER_URL}/track`,
    new Blob([JSON.stringify(payload)], { type: "application/json" })
  );
})();
