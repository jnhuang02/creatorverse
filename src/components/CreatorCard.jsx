export default function CreatorCard({ creator }) {
  const { id, name, url, description, imageURL } = creator
  return (
    <div style={{ border:'1px solid #ddd', padding:16, borderRadius:12 }}>
      {imageURL ? <img src={imageURL} alt={name} style={{ width: '100%', borderRadius: 12 }} /> : null}
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">Visit</a>
      <div style={{ marginTop: 12 }}>
        <a href={`/view/${id}`}>View</a> &nbsp;|&nbsp;
        <a href={`/edit/${id}`}>Edit</a>
      </div>
    </div>
  )
}
