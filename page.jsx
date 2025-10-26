export default async function GalleryPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/flowers.json`, { cache: 'no-store' })
  const flowers = await res.json()
  return (<div className="gallery-page"><h2>Flower Gallery</h2><a href="/" className="back">← Back to Garden</a><div className="cards">{flowers.map(f => (<div className="card" key={f.id}><img src={f.thumb} alt={f.name} width={72} height={72}/><div className="meta"><h3>{f.name}</h3><p>{f.description}</p></div></div>))}</div></div>)
}