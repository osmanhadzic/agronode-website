export const navLinks = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Demo', href: '#live-demo' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Roadmap', href: '#roadmap' },
]

export const useCases = [
  {
    title: 'Greenhouse',
    summary: 'Temperature, humidity and soil monitoring.',
    implemented: ['Temperature telemetry', 'Humidity telemetry', 'Soil moisture telemetry'],
    planned: ['Automated control loops', 'Predictive environmental alerts'],
  },
  {
    title: 'Orchard',
    summary: 'Environmental monitoring across an orchard.',
    implemented: ['Distributed environmental telemetry', 'Device health and signal tracking'],
    planned: ['Expanded remote node coverage', 'Irrigation integration workflows'],
  },
  {
    title: 'Bee monitoring',
    summary: 'Environmental and audio telemetry with future machine-learning analysis.',
    implemented: ['Environmental telemetry pipeline'],
    planned: ['INMP441 audio ingestion', 'Machine-learning assisted hive analysis'],
  },
]

export const hardwareGroups = [
  { category: 'Environmental', items: ['ESP32', 'SHT31'] },
  { category: 'Soil', items: ['Soil moisture sensors'] },
  { category: 'Weight', items: ['HX711 + load cell'] },
  { category: 'Audio', items: ['INMP441'] },
  { category: 'Edge/Gateway', items: ['Raspberry Pi'] },
]

export const techStack = [
  'ESP32',
  'MQTT',
  'VerneMQ',
  'Go',
  'Gin',
  'PostgreSQL',
  'TimescaleDB',
  'React',
  'TypeScript',
  'Vite',
  'Docker',
  'mTLS',
]

export const openSourceLinks = [
  { label: 'GitHub', href: 'https://github.com/osmanhadzic/agronode' },
  { label: 'Issues', href: 'https://github.com/osmanhadzic/agronode/issues' },
  { label: 'Documentation', href: 'https://github.com/osmanhadzic/agronode' },
  { label: 'Roadmap', href: 'https://github.com/osmanhadzic/agronode' },
  { label: 'Contributing', href: 'https://github.com/osmanhadzic/agronode' },
]

export const roadmap = {
  '2026': [
    'Device Registry',
    'Secure device provisioning',
    'VerneMQ integration',
    'TimescaleDB',
    'Greenhouse deployment',
    'Orchard deployment',
  ],
  '2027': [
    'Bee monitoring',
    'Edge AI',
    'Automated irrigation',
    'Device fleet management',
    'Additional hardware integrations',
    'Community contributions',
  ],
}
