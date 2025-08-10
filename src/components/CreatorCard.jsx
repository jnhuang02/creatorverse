export default function CreatorCard({ creator }) {
  const FALLBACK = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="100%" height="100%" fill="%23f0f0f0"/><circle cx="80" cy="64" r="36" fill="%23c7c7c7"/><rect x="32" y="104" width="96" height="36" rx="18" fill="%23d9d9d9"/></svg>';

  function pickSrc(url) {
    if (!url || typeof url !== 'string') return FALLBACK
    const trimmed = url.trim()
    if (/^(https?:)?\/\//i.test(trimmed) || /^data:image\//i.test(trimmed)) return trimmed
    return FALLBACK
  }

  const src = pickSrc(creator.imageURL)

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: 16,
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img
        src={src}
        alt={creator.name}
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = FALLBACK
        }}
        style={{
          width: '100%',
          height: 180,        // fixed height for uniform cards
          objectFit: 'cover', // crop to fit
          borderRadius: 12,
          marginBottom: 12
        }}
      />
      <h2 style={{ textAlign: 'center' }}>{creator.name}</h2>
      <p style={{ textAlign: 'center', flexGrow: 1 }}>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noreferrer">Visit</a>
      <div style={{ marginTop: 12 }}>
        <a href={`/view/${creator.id}`}>View</a> &nbsp;|&nbsp;
        <a href={`/edit/${creator.id}`}>Edit</a>
      </div>
    </div>
  )
}
