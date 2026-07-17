export function downloadFile(filename, text, mime) {
  const blob = new Blob([text], {
    type: mime
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

// ─── API Config ───────────────────────────────────────────────────────────────

export // Strip anything users paste around a username: @, leading slashes, full
// reddit URLs, and u/ /u/ user/ prefixes. Returns the bare username.
function normalizeUsername(input) {
  let s = String(input || "").trim();
  // Full URL → keep only the path after the domain
  s = s.replace(/^https?:\/\/(www\.|old\.|new\.)?reddit\.com/i, "");
  // Leading slashes, then optional u/ /user/ prefix, then a leading @
  s = s.replace(/^\/+/, "").replace(/^(u|user)\//i, "").replace(/^@/, "");
  // Drop any trailing slash / query / whitespace
  s = s.replace(/[/?#].*$/, "").trim();
  return s;
}