export const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cartelitos-3UmUfrToUd1qfG0EN7sH61Z77WIJHh.png'

export const serviceLayouts: Record<string, string> = {
  '01': 'layout-split',
  '02': 'layout-before-after',
  '03': 'layout-stock',
  '04': 'layout-main-strip',
  '05': 'layout-mosaic',
  '06': 'layout-wide-detail',
}

export const serviceImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/encolumna2-ZsHD8UGVyu5UTGEGJb4cSlKpCYajur.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ipVPxI4lVnfJiYHV72mQTwDdFfhu89.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reacondicionamiento3-dJwqqhCN1cnpAMBe4PO9l8XVRvuO0k.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-18%20at%206.37-NksExEU3sMqCvD2pevrLhLT2BsVXSe.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prensa%20de%20equipo-Ik0uY0GNYBEJwPB0DvVSgTwMx965Hh.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/encolumna2-ZsHD8UGVyu5UTGEGJb4cSlKpCYajur.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eOBtJKz0uZzumrRk5yAi3BhXQoH6KO.png',
]

export const services = [
  { no: '01', title: 'Fabricación de prensas', label: 'Diseño y fabricación', description: 'Diseñamos equipos para moldeo de caucho, embutido de chapa, fabricación de cerámica, estampado, punzonado y corte, forjado, acuñado, laminado, plegado de chapa y otras aplicaciones industriales.', types: 'De columna · De garganta · Otras configuraciones' },
  { no: '02', title: 'Reacondicionamiento', label: 'Refreshing de equipos', description: 'Reacondicionamos prensas hidráulicas usadas, recuperando y actualizando sus componentes para devolverlas a condiciones óptimas de trabajo.', types: 'Evaluación · Recuperación · Actualización' },
  { no: '03', title: 'Prensas usadas', label: 'Equipos listos para producir', description: 'Contamos con prensas usadas reacondicionadas disponibles para la venta, revisadas para volver a integrarse a una operación industrial.', types: 'Stock disponible · Equipos revisados' },
  { no: '04', title: 'Servicio técnico', label: 'Respaldo para tu operación', description: 'Brindamos servicio técnico especializado en prensas hidráulicas: diagnóstico, reparación, mantenimiento y puesta a punto.', types: 'En nuestro taller · Asistencia en planta' },
  { no: '05', title: 'Prensas para mangueras', label: 'Armado de mangueras y terminales', description: 'Prensas hidráulicas para el armado de mangueras y terminales, disponibles en distintos modelos y capacidades según el diámetro y tipo de aplicación.', types: 'Taller · Servicio móvil · Producción' },
  { no: '06', title: 'Equipos hidráulicos', label: 'Componentes y soluciones', description: 'Equipos y componentes hidráulicos para aplicaciones industriales: centrales hidráulicas, cilindros, bombas y soluciones adaptadas a las necesidades de cada trabajo.', types: 'Centrales · Cilindros · Bombas' },
]

export const processSteps = [
  { no: '01', title: 'Escuchamos', text: 'Entendemos tu necesidad, el material, la aplicación y las condiciones reales de trabajo.' },
  { no: '02', title: 'Definimos', text: 'Proponemos la configuración, capacidad y alcance técnico que mejor responde al proceso.' },
  { no: '03', title: 'Resolvemos', text: 'Fabricamos, reacondicionamos o intervenimos el equipo con seguimiento especializado.' },
  { no: '04', title: 'Acompañamos', text: 'Ponemos la solución en marcha y seguimos disponibles para el mantenimiento y soporte.' },
]

export const faqs = [
  { question: '¿Fabrican prensas a medida?', answer: 'Sí. Diseñamos y fabricamos prensas hidráulicas según la aplicación, capacidad, recorrido y espacio disponible.' },
  { question: '¿Puedo reacondicionar una prensa usada?', answer: 'Evaluamos el equipo, sus componentes y el estado general para definir el alcance de recuperación y actualización.' },
  { question: '¿Trabajan con asistencia en planta?', answer: 'Sí. Nuestro servicio técnico puede realizar diagnóstico, mantenimiento y puesta a punto en nuestro taller o en planta.' },
  { question: '¿Qué información necesitan para asesorarme?', answer: 'Con una descripción del proceso, medidas, material y capacidad buscada podemos empezar a orientar la solución.' },
]

export type Service = (typeof services)[number]
export type ServiceSelectionHandler = (serviceNo: string) => void
