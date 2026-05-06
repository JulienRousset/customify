// WhatsApp deep-link helper. wa.me/{number}?text={url-encoded message}
// renders the chat with the message pre-filled in the visitor's WhatsApp.

export const WA_NUMBER_RAW = '6285785065652'
export const WA_NUMBER_DISPLAY = '+62 857-8506-5652'

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER_RAW}?text=${encodeURIComponent(message.trim())}`
}
