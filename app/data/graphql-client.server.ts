import { API } from "../constants.server";

export function sendRequest<T>(
  request: ({ query: string } | { mutation: string }) &
    Partial<{ variables: Record<string, string | number> }>,
  headers: Record<string, string> = {},
): Promise<T> {
  const finalHeaders = {
    /* eslint-disable @typescript-eslint/naming-convention */
    "Content-Type": "application/json",
    Accept: "application/json",
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    ...headers,
  };
  return fetch(API, {
    method: "POST",
    headers: finalHeaders,
    body: JSON.stringify(request),
  }).then((response) => {
    const status = response.status;
    if (status >= 400) {
      throw new Error(`Got status ${status} for ${JSON.stringify(request)}`);
    }
    return response.json() as Promise<T>;
  });
}
