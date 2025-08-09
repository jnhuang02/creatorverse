import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export default function AddCreator() {
  const [form, setForm] = useState({ name:'', url:'', description:'', imageURL:'' })
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    await supabase.from('creators').insert([form])
    navigate('/')
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 680, margin:'40px auto', display:'grid', gap:12 }}>
      <h1>Add Creator</h1>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} required />
      <input placeholder="URL" value={form.url} onChange={e=>setForm({ ...form, url:e.target.value })} required />
      <input placeholder="Image URL (optional)" value={form.imageURL} onChange={e=>setForm({ ...form, imageURL:e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={e=>setForm({ ...form, description:e.target.value })} />
      <button type="submit">Save</button>
    </form>
  )
}
