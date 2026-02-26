const UUID_REGEX = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;
const OPPLYSNING_ID_REGEX = /\/opplysning\/(:id)/g;

function umamiBeforeSend(type: string, payload: { url?: string }) {
  if (payload.url) {
    const opplysningIds: string[] = [];
    payload.url.replace(/\/opplysning\/([0-9a-f-]{36})/gi, (_, id) => {
      opplysningIds.push(id);
      return "";
    });

    payload.url = payload.url.replace(UUID_REGEX, ":id");

    let i = 0;
    payload.url = payload.url.replace(
      OPPLYSNING_ID_REGEX,
      () => `/opplysning/${opplysningIds[i++]}`,
    );
  }
  return payload;
}

window.umamiBeforeSend = umamiBeforeSend;
