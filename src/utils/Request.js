export function isGoodStatus(status) {
    if (typeof status !== "number") return null;
    return status >= 200 && status <= 299;
}

export const fetchTimeout = (url, ms, { signal, ...options } = {}) => {
    const controller = new AbortController();
    const promise = fetch(url, { signal: controller.signal, ...options });
    if (signal) signal.addEventListener("abort", () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    return promise.finally(() => clearTimeout(timeout));
};
