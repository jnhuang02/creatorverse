import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name:'', url:'', description:'', imageURL:'' })

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      if (data) setForm(data)
    })()
  }, [id])

  async function onSave(e) {
    e.preventDefault()
    await supabase.from('creators')
      .update({ name: form.name, url: form.url, description: form.description, imageURL: form.imageURL })
      .eq('id', id)
    navigate(`/view/${id}`)
  }

  async function onDelete() {
    await supabase.from('creators').delete().eq('id', id)
    navigate('/')
  }

  return (
    <form onSubmit={onSave} style={{ maxWidth: 680, margin:'40px auto', display:'grid', gap:12 }}>
      <h1>Edit Creator</h1>
      <input value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} required />
      <input value={form.url} onChange={e=>setForm({ ...form, url:e.target.value })} required />
      <input value={form.imageURL} onChange={e=>setForm({ ...form, imageURL:e.target.value })} />
      <textarea value={form.description} onChange={e=>setForm({ ...form, description:e.target.value })} />
      <div style={{ display:'flex', gap:12 }}>
        <button type="submit">Save</button>
        <button type="button" onClick={onDelete} style={{ background:'#f44', color:'#fff' }}>Delete</button>
      </div>
    </form>
  )
}
