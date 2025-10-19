export interface SafeFetchResult {
  ok: boolean;
  text: string;
  data?: any;
}

export async function fetchTextSafe(
  url: string,
  allowed: string[] = ["text/markdown", "text/mdx", "application/json", "text/plain"]
): Promise<SafeFetchResult> {
  try {
    const res = await fetch(url, { 
      credentials: "include",
      headers: {
        "Accept": allowed.join(", "),
      }
    });

    if (!res.ok) {
      console.warn(`fetchTextSafe: HTTP ${res.status} for ${url}`);
      return { ok: false, text: "" };
    }

    const contentType = res.headers.get("content-type") || "";
    const isAllowed = allowed.some((type) => contentType.toLowerCase().includes(type.toLowerCase()));

    if (!isAllowed) {
      console.warn(`fetchTextSafe: Unexpected content-type "${contentType}" for ${url}, expected one of: ${allowed.join(", ")}`);
      return { ok: false, text: "" };
    }

    const text = await res.text();
    return { ok: true, text };
  } catch (error) {
    console.error(`fetchTextSafe: Network error for ${url}:`, error);
    return { ok: false, text: "" };
  }
}

export async function fetchJsonSafe<T = any>(url: string): Promise<SafeFetchResult> {
  try {
    const res = await fetch(url, {
      credentials: "include",
      headers: {
        "Accept": "application/json",
      }
    });

    if (!res.ok) {
      console.warn(`fetchJsonSafe: HTTP ${res.status} for ${url}`);
      return { ok: false, text: "", data: null };
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      console.warn(`fetchJsonSafe: Unexpected content-type "${contentType}" for ${url}, expected application/json`);
      return { ok: false, text: "", data: null };
    }

    const data = await res.json();
    return { ok: true, text: JSON.stringify(data), data };
  } catch (error) {
    console.error(`fetchJsonSafe: Error for ${url}:`, error);
    return { ok: false, text: "", data: null };
  }
}
