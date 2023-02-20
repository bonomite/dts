import { defineNuxtPlugin } from '#app'
// import Divider from 'primevue/divider/divider.esm.js'
// import Button from 'primevue/button/button.esm.js'
// import Checkbox from 'primevue/checkbox/checkbox.esm.js'
// import Dialog from 'primevue/dialog/dialog.esm.js'
// import DialogService from 'primevue/dialogservice/dialogservice.esm.js'
// import InputText from 'primevue/inputtext/inputtext.esm.js'
// import Image from 'primevue/image/image.esm.js'
// import InputSwitch from 'primevue/inputswitch/inputswitch.esm.js'
import Menubar from 'primevue/menubar/menubar.esm.js'
// import Menu from 'primevue/menu/menu.esm.js'
import PrimeVue from 'primevue/config/config.esm.js'
// import MegaMenu from 'primevue/megamenu/megamenu.esm.js'
// import Dropdown from 'primevue/dropdown/dropdown.esm.js'
// import Sidebar from 'primevue/sidebar/sidebar.esm.js'
// import Paginator from 'primevue/paginator/paginator.esm.js'
// import ProgressSpinner from 'primevue/progressspinner/progressspinner.esm.js'
// import Skeleton from 'primevue/skeleton/skeleton.esm.js'
// import Tag from 'primevue/tag/tag.esm.js'
// import Carousel from 'primevue/carousel/carousel.esm.js'
//import ScrollTop from 'primevue/scrolltop/scrolltop.esm.js'
//import Toast from 'primevue/toast'
//import ToastService from 'primevue/toastservice'
// import Tag from "primevue/tag"
// import InputText from 'primevue/inputText';
// import Breadcrumb from 'primevue/breadcrumb';
// import MegaMenu from 'primevue/megamenu';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    //nuxtApp.vueApp.use(ToastService)
    // nuxtApp.vueApp.use(DialogService)
    // nuxtApp.vueApp.component('Dialog', Dialog)
    // nuxtApp.vueApp.component('Divider', Divider)
    // nuxtApp.vueApp.component('Checkbox', Checkbox)
    // nuxtApp.vueApp.component('InputText', InputText)
    // nuxtApp.vueApp.component('Button', Button)
    // nuxtApp.vueApp.component('Image', Image)
    // nuxtApp.vueApp.component('InputSwitch', InputSwitch)
    nuxtApp.vueApp.component('Menubar', Menubar)
    // nuxtApp.vueApp.component('Menu', Menu)
    // nuxtApp.vueApp.component('MegaMenu', MegaMenu)
    // nuxtApp.vueApp.component('Dropdown', Dropdown)
    // nuxtApp.vueApp.component('Sidebar', Sidebar)
    // nuxtApp.vueApp.component('Paginator', Paginator)
    // nuxtApp.vueApp.component('ProgressSpinner ', ProgressSpinner)
    // nuxtApp.vueApp.component('Skeleton', Skeleton)
    // nuxtApp.vueApp.component('Tag', Tag)
    // nuxtApp.vueApp.component('Carousel', Carousel)
    //nuxtApp.vueApp.component('ScrollTop', ScrollTop)
    //nuxtApp.vueApp.component('Toast', Toast)

    // nuxtApp.vueApp.component('Tag', Tag)
    // nuxtApp.vueApp.component('Menubar', Menubar)
    // nuxtApp.vueApp.component('InputText', InputText)
    // nuxtApp.vueApp.component('Breadcrumb', Breadcrumb)
    //other components that you need
})