import { useEffect, useState } from 'react'
import { supabase } from '../client.js'
import CreatorCard from '../components/CreatorCard.jsx'
import { Link } from 'react-router-dom'

export default function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('id', { ascending: true })
      if (!error) setCreators(data || [])
      setLoading(false)
    }
    fetchCreators()
  }, [])

  if (loading) return <p>Loading…</p>

  return (
    <div style={{ maxWidth: 900, margin: '40px auto' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <h1>Creatorverse</h1>
        <Link to="/new">+ Add Creator</Link>
      </div>

      {creators.length === 0 ? (
        <p>No creators yet. Click “Add Creator”.</p>
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16 }}>
          {creators.map(c => <CreatorCard key={c.id} creator={c} />)}
        </div>
      )}
    </div>
  )
}
