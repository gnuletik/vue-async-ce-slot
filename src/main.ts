import { defineCustomElement, defineAsyncComponent } from 'vue'

/*
import MyComponent from './MyComponent.ce.vue'

customElements.define('my-component', defineCustomElement(MyComponent))
*/

customElements.define('my-component', defineCustomElement(
  defineAsyncComponent(() => import('./MyComponent.ce.vue'))
))
