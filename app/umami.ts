const UUID_REGEX = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;

function umamiBeforeSend(type: string, payload: { url?: string }) {
  if (payload.url) {
    payload.url = payload.url.replace(UUID_REGEX, ":id");
  }
  return payload;
}

window.umamiBeforeSend = umamiBeforeSend;
