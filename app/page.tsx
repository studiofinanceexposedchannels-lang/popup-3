const checkoutUrl = 'https://go.centerpag.com/PPU38CQG93D'
const declineUrl = 'https://pop-bk1-5.vercel.app'

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-1 sm:bg-black/75 sm:p-6">
      <section
        aria-label="Oferta especial"
        className="relative w-full max-w-[690px] overflow-hidden rounded-[24px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
      >
        <div className="relative bg-[#fff5f8] p-1.5 sm:p-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sAst2X6SBxfEmlc3p9TeYPOY0ORrr3.png"
            alt="Oferta em espanhol para aliviar a neuropatia com pimenta e bônus exclusivos"
            className="block h-auto w-full rounded-[17px]"
          />
          <a
            href={declineUrl}
            aria-label="Fechar oferta"
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/75 text-2xl font-light leading-none text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 sm:right-3 sm:top-3 sm:h-12 sm:w-12 sm:text-4xl"
          >
            ×
          </a>
        </div>

        <div className="flex flex-col gap-2 bg-white px-2 py-2.5 sm:gap-4 sm:px-4 sm:py-5">
          <a
            href={declineUrl}
            className="flex h-11 w-full items-center justify-center rounded-full border border-[#cbd3df] bg-[#f1f4f8] px-3 text-center text-sm font-extrabold uppercase tracking-tight text-[#27344b] shadow-[0_2px_5px_rgba(25,35,50,0.12)] transition-colors hover:bg-[#e7ebf1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ec0864]/25 sm:h-[76px] sm:text-[28px]"
          >
            No quiero
          </a>
          <a
            href={checkoutUrl}
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#dc2626] px-3 text-center text-sm font-extrabold uppercase leading-tight tracking-tight text-white shadow-[0_3px_0_#991b1b] transition-all hover:bg-[#b91c1c] hover:shadow-[0_2px_0_#7f1d1d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#dc2626]/50 sm:h-[84px] sm:px-4 sm:text-[28px] sm:shadow-[0_5px_0_#991b1b]"
          >
            Sí, quiero mi acceso ahora
          </a>
        </div>
      </section>
    </main>
  )
}

