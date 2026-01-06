import { Signal } from "lucide-react";

interface Options extends RequestInit {
  timeout?: number;
}

export default async function fetchHandler(url: string, options: Options = {}) {

  const { timeout = 5000, headers: customHeaders, ...restOpts } = options;

  const controller = new AbortController();

  const id = setTimeout(() => controller.abort(), timeout)

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json"
  }

  const headers = {
    ...defaultHeaders,
    ...customHeaders
  }

  const config = {
    headers,
    Signal: controller.signal,
    ...restOpts
  }

  try {
    const resp = await fetch(url, config);
    clearTimeout(id);
    if (!resp.ok) {
      throw new Error("Something went wrong :(")
    }
    return await resp.json();
  } catch (error: unknown) {
    console.log(error)
  }
}