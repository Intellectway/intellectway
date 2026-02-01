const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://intellecatwayfinal.runasp.net";
const defaultHeaders = {
  "Content-Type": "application/json",
};

export async function apiGet<T>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...init,
    headers: {
      ...defaultHeaders,
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function apiPost<T, D = unknown>(
  url: string,
  data?: D,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    body: data ? JSON.stringify(data) : undefined,
    ...init,
    headers: {
      ...defaultHeaders,
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
