window.payloadReady = fetch('./payload.bin')
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to load payload.bin (" + res.status + ")");
    }
    return res.arrayBuffer();
  })
  .then(arr => {
    window.pld = new Uint32Array(arr);
    const statusEl = document.getElementById("payload-status");
    if (statusEl) {
      statusEl.textContent = "Payload ready";
    }
    return window.pld;
  })
  .catch(err => {
    const statusEl = document.getElementById("payload-status");
    if (statusEl) {
      statusEl.textContent = "Payload error";
    }
    console.error(err);
  });
