import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faSearch,
  faHeart,
  faSignInAlt,
  faSignOutAlt,
  faPlay,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faHome, faSearch, faHeart, faSignInAlt, faSignOutAlt, faPlay)
