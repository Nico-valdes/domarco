import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Limpieza de parámetros obsoletos heredados de la web anterior (ej: /?b=907823185)
  // Al redirigir con 301 a la URL sin ?b=, Google desindexa el sitelink histórico y consolida la autoridad
  if (url.searchParams.has('b')) {
    url.searchParams.delete('b')
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Se ejecuta en todas las solicitudes excepto recursos estáticos, imágenes y favicon
     */
    '/((?!_next/static|_next/image|favicon.ico|favicon.png|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
