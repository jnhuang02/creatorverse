import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      if (!error && data) {
        setForm(data)
      }
    }
    fetchCreator()
  }, [id])

  async function onSubmit(e) {
    e.preventDefault()
    const { error } = await supabase
      .from('creators')
      .update(form)
      .eq('id', id)

    if (!error) {
      navigate('/')
    }
  }

  async function onDelete() {
    const ok = window.confirm('Are you sure you want to delete this creator? This cannot be undone.')
    if (!ok) return

    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Error deleting creator: ' + error.message)
    } else {
      navigate('/') // go back to home after delete
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ maxWidth: 680, margin: '40px auto', display: 'grid', gap: 12 }}
    >
      <h1>Edit Creator</h1>
      <label>
        Name:
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
      </label>
      <label>
        URL:
        <input
          placeholder="URL"
          value={form.url}
          onChange={e => setForm({ ...form, url: e.target.value })}
          required
        />
      </label>
      <label>
        Image URL (optional):
        <input
          placeholder="Image URL"
          value={form.imageURL}
          onChange={e => setForm({ ...form, imageURL: e.target.value })}
        />
      </label>
      <label>
        Description:
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </label>
      
      <div style={{ display: 'flex', gap: 10 }}>
        <button type="submit">Save Changes</button>
        <button
          type="button"
          onClick={onDelete}
          style={{ background: '#f44', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6 }}
        >
          Delete
        </button>
      </div>
    </form>
  )
}
