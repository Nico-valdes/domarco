'use client'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491136912384?text=Hola%20DOMARCO,%20quisiera%20hacer%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 min-[701px]:bottom-7 min-[701px]:right-7 z-[9999] flex items-center justify-center w-[52px] h-[52px] min-[701px]:w-[58px] min-[701px]:h-[58px] rounded-full bg-[#25d366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.42),0_2px_6px_rgba(0,0,0,0.2)] hover:bg-[#20ba5a] hover:-translate-y-[3px] hover:scale-[1.06] hover:shadow-[0_10px_26px_rgba(37,211,102,0.55),0_4px_10px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.96] transition-[transform,box-shadow,background-color] duration-250 ease-out no-underline group"
      aria-label="Contactar a DOMARCO por WhatsApp"
    >
      <span className="hidden min-[701px]:block absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 bg-[#111214] text-[#f4f4f2] font-mono text-[11px] font-bold leading-[1.2] tracking-[0.1em] uppercase py-2 px-3.5 rounded-[4px] whitespace-nowrap pointer-events-none opacity-0 invisible shadow-[0_4px_14px_rgba(0,0,0,0.3)] border border-[#303338] transition-[opacity,transform,visibility] duration-200 ease-out group-hover:opacity-100 group-hover:visible group-hover:-translate-x-1">
        Consultar por WhatsApp
      </span>
      <svg
        className="w-7 h-7 min-[701px]:w-8 min-[701px]:h-8 block"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.01 2.002c-7.72 0-14 6.279-14 14 0 2.47.644 4.877 1.867 7L2 30l7.207-1.85a13.94 13.94 0 006.803 1.764h.006c7.72 0 14-6.279 14-14 0-3.74-1.456-7.257-4.102-9.902A13.916 13.916 0 0016.01 2.002zm0 25.645h-.005a11.584 11.584 0 01-5.91-1.614l-.424-.252-4.39 1.127 1.173-4.22-.276-.44a11.605 11.605 0 01-1.782-6.246c0-6.408 5.215-11.622 11.625-11.622 3.104 0 6.022 1.21 8.216 3.405a11.55 11.55 0 013.403 8.218c0 6.409-5.215 11.624-11.624 11.624zm6.37-8.705c-.349-.175-2.065-1.019-2.385-1.135-.32-.116-.553-.175-.785.175-.233.35-.901 1.135-1.105 1.368-.204.233-.407.262-.756.088-.349-.175-1.474-.544-2.808-1.733-1.038-.925-1.739-2.068-1.943-2.417-.203-.35-.022-.539.153-.713.157-.157.349-.407.523-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.611-.087-.175-.785-1.892-1.076-2.592-.284-.68-.572-.588-.785-.599l-.67-.012c-.232 0-.61.087-.93.437-.32.35-1.22 1.194-1.22 2.912s1.25 3.378 1.424 3.611c.174.233 2.46 3.757 5.96 5.267.832.36 1.482.574 1.989.735.836.265 1.597.228 2.198.138.67-.1 2.065-.844 2.356-1.66.291-.815.291-1.514.204-1.66-.087-.145-.32-.233-.669-.407z" />
      </svg>
    </a>
  )
}
