"use client";

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../lib/utils'

export default function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end group">
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
