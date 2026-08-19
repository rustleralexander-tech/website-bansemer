'use server'

import { Resend } from 'resend'
import { siteConfig } from '@/config/site'

const resend = new Resend(process.env.RESEND_API_KEY)

// Hinweis: Solange keine eigene Domain in Resend verifiziert ist, kann die
// Test-Absenderadresse onboarding@resend.dev nur an die Resend-Konto-Adresse
// senden. Empfänger und Absender werden in config/site.ts gepflegt.
const CONTACT_RECIPIENT = siteConfig.mail.recipient
const SENDER_ADDRESS = siteConfig.mail.sender

export type ContactFormResult = {
  success: boolean
  error?: string
}

export async function sendContactMessage(formData: {
  name: string
  email: string
  phone: string
  message: string
  privacy: boolean
}): Promise<ContactFormResult> {
  const { name, email, phone, message, privacy } = formData

  if (!name?.trim() || !email?.trim() || !message?.trim() || !privacy) {
    return { success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.trim())) {
    return { success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }
  }

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.mail.senderName} <${SENDER_ADDRESS}>`,
      to: CONTACT_RECIPIENT,
      replyTo: email.trim(),
      subject: `Website-Anfrage von ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `E-Mail: ${email.trim()}`,
        `Telefon: ${phone?.trim() || '–'}`,
        '',
        'Situation:',
        message.trim(),
      ].join('\n'),
    })

    if (error) {
      console.error('Resend konnte die Kontaktanfrage nicht senden:', error)
      return { success: false, error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Unerwarteter Fehler beim Senden der Kontaktanfrage:', err)
    return { success: false, error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' }
  }
}
