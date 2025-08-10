import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import '@picocss/pico/css/pico.min.css'

export default function App() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/view/:id', element: <ViewCreator /> },
    { path: '/new', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
  ])
  return <div className="app">{routes}</div>
}
