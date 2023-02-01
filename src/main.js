import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu';
import Fieldset from 'primevue/fieldset';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Chip from 'primevue/chip';
import Tree from 'primevue/tree';
import Chart from 'primevue/chart';
import Panel from 'primevue/panel';
import DialogService from 'primevue/dialogservice';
import DynamicDialog from 'primevue/dynamicdialog';
import Rating from 'primevue/rating';
import AutoComplete from 'primevue/autocomplete';
import PanelMenu from 'primevue/panelmenu';
import ScrollPanel from 'primevue/scrollpanel';
import Steps from 'primevue/steps';
import Tooltip from 'primevue/tooltip';
import Textarea from 'primevue/textarea';
import Carousel from 'primevue/carousel';
import VirtualScroller from 'primevue/virtualscroller';
import OverlayPanel from 'primevue/overlaypanel';
import Divider from 'primevue/divider';
import FileUpload from 'primevue/fileupload';
import Message from 'primevue/message';
import InlineMessage from 'primevue/inlinemessage';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Tag from 'primevue/tag';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/lara-light-indigo/theme.css"
import 'primeicons/primeicons.css';


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.use(DialogService);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Card', Card);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Menu', Menu);
app.component('Fieldset', Fieldset);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Chip', Chip);
app.component('Tree', Tree);
app.component('Chart', Chart);
app.component('Panel', Panel);
app.component('DynamicDialog', DynamicDialog);
app.component('Rating', Rating);
app.component("AutoComplete", AutoComplete);
app.component("PanelMenu", PanelMenu);
app.component("ScrollPanel", ScrollPanel);
app.component("Steps", Steps);
app.component("Textarea", Textarea);
app.directive('tooltip', Tooltip);
app.component("Carousel", Carousel);
app.component("VirtualScroller", VirtualScroller);
app.component("OverlayPanel", OverlayPanel);
app.component("Divider", Divider);
app.component("FileUpload", FileUpload);
app.component("Message", Message);
app.component("InlineMessage", InlineMessage);
app.component("Toast", Toast);
app.use(ToastService)
app.component("Tag", Tag);


app.mount("#app");
