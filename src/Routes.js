// Routes
import Home from './routes/Home'
import Matches from './routes/Matches'
import Connections from './routes/Connections'
import Groups from './routes/Groups'
import Profile from './routes/Profile'
import NotFound from './routes/NotFound'
import Login from './routes/Login'
import ForgotPassword from './routes/ForgotPassword'
import Logout from './routes/Logout'

// Nav bars
import TopNav from './components/TopNav'
import HomePageNav from './components/HomePageNav'

// Router
export default [
  { name: 'Home', path: '/', components: { default: Home, nav: HomePageNav } },
  { name: 'Login', path: '/login', components: { default: Login} },
  { name: 'Signup', path: '/login/:tab', components: { default: Login} },
  { name: 'Forgot Password', path: '/forgot_password', components: { default: ForgotPassword} },
  { name: 'Logout', path: '/logout', components: { default: Logout } },
  { name: 'Matches', path: '/matches', components: { default: Matches, nav: TopNav } },
  { name: 'Connections', path: '/connections', components: { default: Connections, nav: TopNav } },
  { name: 'Groups', path: '/groups', components: { default: Groups, nav: TopNav } },
  { name: 'Profile', path: '/profile', components: { default: Profile, nav: TopNav } },
  { name: '404', path: '*', components: { default: NotFound, nav: TopNav } }
]
