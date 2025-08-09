import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client.js' 

export default function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single()
      if (!error) setCreator(data)
    }
    fetchOne()
  }, [id])

  if (!creator) return <p>Loading…</p>

  return (
    <div style={{ maxWidth: 680, margin: '40px auto' }}>
      <h1>{creator.name}</h1>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} style={{ width:'100%', borderRadius:12 }}/>}
      <p>{creator.description}</p>
      <p><a href={creator.url} target="_blank" rel="noreferrer">Visit channel</a></p>
      <Link to={`/edit/${creator.id}`}>Edit</Link>
    </div>
  )
}
