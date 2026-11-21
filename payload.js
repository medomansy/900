window.payloadReady = fetch('./payload.bin')
  .then(res => {
    if (!res.ok) {
      throw new Error("فشل تحميل payload.bin (" + res.status + ")");
    }
    return res.arrayBuffer();
  })
  .then(arr => {
    window.pld = new Uint32Array(arr);
    const statusEl = document.getElementById("payload-status");
    if (statusEl) {
      statusEl.textContent = "البيلود جاهز";
    }
    return window.pld;
  })
  .catch(err => {
    const statusEl = document.getElementById("payload-status");
    if (statusEl) {
      statusEl.textContent = "خطأ في تحميل البيلود";
    }
    console.error(err);
  });
