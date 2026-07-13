import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+918248589694"
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 82485 89694"
export const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "918248589694"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20Rupeevalcore%20programs.`
export const EMAIL = process.env.CONTACT_EMAIL || "contactrupeevalcore@gmail.com"
export const INSTAGRAM = "https://www.instagram.com/rupeevalcore_"

