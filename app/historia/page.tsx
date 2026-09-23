import { DomarcoSubpage, SubpageCta } from '@/components/domarco-subpage'

const milestones = [
  ['1964', 'El oficio', 'Alberto comienza a trabajar en Adabor, fábrica de prensas hidráulicas en Bernal Oeste. Allí se forma en torno, fresa, rectificadora y las herramientas que marcarían su oficio.'],
  ['1977', 'El primer taller', 'Decide emprender su propio camino. Con una camioneta, un teléfono fijo y un garaje como punto de partida, comienza a realizar service y reparaciones.'],
  ['A.C. DOMARCO', 'Las primeras prensas', 'En un galpón chico de la calle Centenario, Quilmes, nacen las primeras prensas hidráulicas diseñadas alrededor de las necesidades concretas de cada empresario.'],
  ['Hoy', 'Una empresa familiar', 'DOMARCO incorpora nuevas líneas de productos y un equipo humano que se capacita permanentemente para ofrecer una solución integral y cercana.'],
]

export default function HistoriaPage() {
  return (
    <DomarcoSubpage
      eyebrow="Historia de DOMARCO"
      title="Nuestra"
      accent="historia."
      intro="Conocé el recorrido de DOMARCO, desde sus primeros trabajos hasta la fabricación, reacondicionamiento y asistencia técnica de hoy."
    >
      <section className="history-section">
        <div className="mx-auto max-w-[1480px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="history-intro">
            <p className="blue-kicker">Nuestra historia</p>
            <h2 className="section-title">El recorrido<br /><span>de DOMARCO.</span></h2>
            <p>Estos son algunos momentos importantes de la empresa: el aprendizaje inicial, la apertura del taller, la fabricación de las primeras prensas y la ampliación de los servicios.</p>
          </div>
          <div className="history-timeline">
            {milestones.map(([date, title, text]) => (
              <article key={date} className="history-milestone">
                <span>{date}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SubpageCta />
    </DomarcoSubpage>
  )
}
