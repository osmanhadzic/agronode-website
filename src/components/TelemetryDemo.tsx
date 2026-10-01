import { useEffect, useMemo, useState } from 'react'

type TelemetryState = {
  temperature: number
  humidity: number
  soil: number
  battery: number
  signal: number
  lastSeen: string
  status: 'online' | 'degraded'
}

const historyLength = 18

const formatLastSeen = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })

const randomRange = (min: number, max: number) => min + Math.random() * (max - min)

function TelemetryDemo() {
  const [telemetry, setTelemetry] = useState<TelemetryState>({
    temperature: 24.2,
    humidity: 58.4,
    soil: 43,
    battery: 81,
    signal: -62,
    lastSeen: formatLastSeen(),
    status: 'online',
  })

  const [series, setSeries] = useState<number[]>(() =>
    Array.from({ length: historyLength }, () => Number(randomRange(22.5, 25.2).toFixed(1))),
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTelemetry((prev) => {
        const temperature = Number((prev.temperature + randomRange(-0.4, 0.45)).toFixed(1))
        const humidity = Number((prev.humidity + randomRange(-1.2, 1.2)).toFixed(1))
        const soil = Math.max(30, Math.min(65, Math.round(prev.soil + randomRange(-2, 2))))
        const battery = Math.max(70, Math.min(100, Math.round(prev.battery + randomRange(-1, 0.2))))
        const signal = Math.max(-85, Math.min(-50, Math.round(prev.signal + randomRange(-2, 2))))

        return {
          temperature,
          humidity,
          soil,
          battery,
          signal,
          lastSeen: formatLastSeen(),
          status: signal < -78 ? 'degraded' : 'online',
        }
      })

      setSeries((prev) => [...prev.slice(1), Number(randomRange(22.1, 25.8).toFixed(1))])
    }, 1800)

    return () => window.clearInterval(timer)
  }, [])

  const points = useMemo(() => {
    return series
      .map((value, index) => {
        const x = (index / (series.length - 1)) * 100
        const y = 100 - ((value - 20) / 8) * 100
        return `${x},${Math.max(8, Math.min(95, y))}`
      })
      .join(' ')
  }, [series])

  return (
    <section id="live-demo" className="section" aria-labelledby="demo-title">
      <h2 id="demo-title">Live telemetry demo</h2>
      <p className="section-copy">
        Simulated dashboard values for demonstration only. <span className="tag">DEMO DATA</span>
      </p>

      <article className="card telemetry-card" aria-live="polite">
        <div className="metrics-grid">
          <p><span>Temperature</span><strong>{telemetry.temperature}°C</strong></p>
          <p><span>Humidity</span><strong>{telemetry.humidity}%</strong></p>
          <p><span>Soil moisture</span><strong>{telemetry.soil}%</strong></p>
          <p><span>Battery</span><strong>{telemetry.battery}%</strong></p>
          <p><span>Signal strength</span><strong>{telemetry.signal} dBm</strong></p>
          <p>
            <span>Device status</span>
            <strong className={telemetry.status === 'online' ? 'ok' : 'warn'}>{telemetry.status}</strong>
          </p>
          <p><span>Last seen</span><strong>{telemetry.lastSeen}</strong></p>
        </div>

        <div className="chart-wrap" role="img" aria-label="Telemetry trend chart">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points={points} />
          </svg>
        </div>
      </article>
    </section>
  )
}

export default TelemetryDemo
