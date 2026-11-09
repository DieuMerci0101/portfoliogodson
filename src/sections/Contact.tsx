import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { profile, socials } from '../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative px-3 py-3 md:px-5 md:py-4">
      <div className="grain relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] bg-ink px-5 pb-7 pt-16 text-paper md:rounded-[2.25rem] md:px-12 md:pb-9 md:pt-24 lg:px-16">
        <div className="pointer-events-none absolute -right-24 top-0 size-[560px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 size-[500px] rounded-full bg-olive/20 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.045]" />

        <div className="relative">
          <SectionLabel index="04" label="Contact" dark />

          <div className="mt-8 md:mt-10">
            <Reveal>
              <p className="font-hand text-3xl text-accent md:text-4xl">Un projet en tête ?</p>
            </Reveal>
            <h2 className="mt-2 select-none font-display text-[clamp(3rem,10.7vw,9.4rem)] font-bold leading-[0.83] tracking-[-0.06em]">
              <span className="block text-outline-paper">TRAVAILLONS</span>
              <span className="block">
                ENSEMBLE<span className="text-accent">.</span>
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <p className="max-w-md text-sm leading-relaxed text-paper/55 md:text-base">
                  Une idée, un projet ou une simple question ? Écrivez-moi, je vous répondrai
                  avec plaisir.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8">
                  <div className="group flex items-center justify-between gap-4 border-b border-paper/15 py-4">
                    <a
                      href={`mailto:${profile.email}`}
                      data-cursor="hover"
                      className="min-w-0 flex-1"
                    >
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/35">
                        Email
                      </span>
                      <span className="mt-1 block truncate font-display text-lg font-medium tracking-[-0.02em] transition-colors group-hover:text-accent md:text-2xl">
                        {profile.email}
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? 'Email copié' : "Copier l'adresse email"}
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] transition ${
                        copied
                          ? 'border-accent bg-accent text-paper'
                          : 'border-paper/20 text-paper/55 hover:border-paper/50 hover:text-paper'
                      }`}
                    >
                      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                      {copied ? 'Copié' : 'Copier'}
                    </button>
                  </div>

                  <a
                    href={`tel:${profile.phoneRaw}`}
                    data-cursor="hover"
                    className="group flex items-center justify-between gap-4 border-b border-paper/15 py-4"
                  >
                    <span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/35">
                        Téléphone
                      </span>
                      <span className="mt-1 block font-display text-lg font-medium tracking-[-0.02em] transition-colors group-hover:text-accent md:text-2xl">
                        {profile.phone}
                      </span>
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-paper/15 text-paper/45 transition group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                      <Phone className="size-3.5" />
                    </span>
                  </a>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/35">
                        Localisation
                      </span>
                      <span className="mt-1 block font-display text-lg font-medium tracking-[-0.02em] md:text-2xl">
                        {profile.location}
                      </span>
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-paper/15 text-paper/45">
                      <MapPin className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:${profile.email}`}
                    data-cursor="hover"
                    className="btn-sheen inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
                  >
                    Envoyer un email
                    <Mail className="size-4" />
                  </a>
                  <a
                    href={`tel:${profile.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-3 text-sm font-medium text-paper/75 transition hover:border-paper/50 hover:text-paper"
                  >
                    Appeler
                  </a>
                  <a
                    href="/CV_Esso-wazam_Godson_PATAM.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-3 text-sm font-medium text-paper/75 transition hover:border-paper/50 hover:text-paper"
                  >
                    Mon CV
                    <Download className="size-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.12}>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-paper/35">
                  Retrouvez-moi
                </p>
              </Reveal>

              <div className="mt-4 grid gap-1.5 sm:grid-cols-2">
                {socials.map((social, index) => (
                  <Reveal key={social.name} delay={0.16 + index * 0.04}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="hover"
                      className="group flex items-center justify-between gap-3 rounded-xl border border-paper/10 px-3.5 py-3 transition-colors duration-300 hover:border-paper/25 hover:bg-paper/[0.04]"
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span
                          className="size-2 shrink-0 rounded-full"
                          style={{ backgroundColor: social.color }}
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-paper/80">
                            {social.name}
                          </span>
                          <span className="block truncate font-mono text-[8px] tracking-[0.04em] text-paper/30">
                            {social.handle}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-paper/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-paper/10 pt-5 font-mono text-[8px] uppercase tracking-[0.15em] text-paper/30 sm:flex-row sm:items-center sm:justify-between">
            <span>{profile.fullName}</span>
            <span>Lomé · Togo · GMT</span>
            <span className="flex items-center gap-1.5">
              Fait avec <span className="text-accent">♥</span> et du café
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
