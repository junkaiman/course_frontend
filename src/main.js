import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Fieldset from 'primevue/fieldset';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Chip from 'primevue/chip';
import Tree from 'primevue/tree';
import Chart from 'primevue/chart';
import Panel from 'primevue/panel';


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/lara-light-indigo/theme.css"
import 'primeicons/primeicons.css';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Card', Card);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Fieldset', Fieldset);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Chip', Chip);
app.component('Tree', Tree);
app.component('Chart', Chart);
app.component('Panel', Panel);

app.mount("#app");
