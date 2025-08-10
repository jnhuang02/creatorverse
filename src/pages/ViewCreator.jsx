import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client.js'

const FALLBACK = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="100%" height="100%" fill="%23f0f0f0"/><circle cx="80" cy="64" r="36" fill="%23c7c7c7"/><rect x="32" y="104" width="96" height="36" rx="18" fill="%23d9d9d9"/></svg>';

function pickSrc(url) {
  if (!url || typeof url !== 'string') return FALLBACK
  const trimmed = url.trim()
  // allow http(s) and data URIs; everything else falls back
  if (/^(https?:)?\/\//i.test(trimmed) || /^data:image\//i.test(trimmed)) return trimmed
  return FALLBACK
}

export default function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      if (!error) setCreator(data)
      setLoading(false)
    })()
  }, [id])

  if (loading) return <p>Loading…</p>
  if (!creator) return <p>Creator not found.</p>

  const src = pickSrc(creator.imageURL)

  return (
    <div style={{ maxWidth: 680, margin: '40px auto' }}>
      <img
        src={src}
        alt={creator.name}
        onError={(e) => {
          // final safety: if the remote URL fails, show fallback
          e.currentTarget.onerror = null
          e.currentTarget.src = FALLBACK
        }}
        style={{
          display: 'block',
          margin: '0 auto',
          width: '100%',
          maxWidth: 320,
          maxHeight: 320,
          objectFit: 'cover',
          borderRadius: 12
        }}
      />

      <h1 style={{ textAlign: 'center', marginTop: 20 }}>{creator.name}</h1>
      <p style={{ textAlign: 'center' }}>{creator.description}</p>
      <a
        href={creator.url}
        target="_blank"
        rel="noreferrer"
        style={{ display: 'block', textAlign: 'center', marginTop: 10 }}
      >
        Visit Creator
      </a>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    </div>
  )
}
