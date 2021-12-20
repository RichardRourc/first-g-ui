/* Automatically generated by './build/bin/build-entry.js' */
import './styles/index.scss'

import { getCompName } from './utils/component'

import Button from './packages/button'
import Notice from './packages/notice'
import SearchItem from './packages/search-item'
import MButtonBack from './packages/m-button-back'
import MSearchBar from './packages/m-search-bar'

const components = [Button, SearchItem, MButtonBack, MSearchBar]

const install = function (Vue: any) {
  components.forEach((component: any) => {
    const name = getCompName(component)
    Vue.component(name, component)
  })

  Vue.prototype.$notice = Notice
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default install
