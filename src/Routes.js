// Routes
import Home from './routes/Home'
import Matches from './routes/Matches'
import Connections from './routes/Connections'
import Groups from './routes/Groups'
import Profile from './routes/Profile'
import NotFound from './routes/NotFound'
import Login from './routes/Login'
import Logout from './routes/Logout'

// Nav bars
import TopNav from './components/TopNav'

// Router
export default [
  { name: 'home', path: '/', components: { default: Home, nav: TopNav } },
  { name: 'login', path: '/login', components: { default: Login, nav: TopNav } },
  { name: 'logout', path: '/logout', components: { default: Logout } },
  { name: 'matches', path: '/matches', components: { default: Matches, nav: TopNav } },
  { name: 'connections', path: '/connections', components: { default: Connections, nav: TopNav } },
  { name: 'groups', path: '/groups', components: { default: Groups, nav: TopNav } },
  { name: 'profile', path: '/profile', components: { default: Profile, nav: TopNav } },
  { name: '404', path: '*', components: { default: NotFound, nav: TopNav } }
]
