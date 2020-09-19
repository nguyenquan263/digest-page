import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/admin-site/vendor/fontawesome-free/css/all.min.css';
import './assets/admin-site/fonts/font1.css';
import './assets/admin-site/css/sb-admin-2.min.css';
import './assets/commons/jquery.dataTables.min.css';
import './assets/commons/toastr.min.css';
import './assets/commons/jquery-confirm.min.css';
import './assets/commons/summernote.min.css';
import './assets/commons/JQueryDateTimePicker/lib/themes/classic.css';
import './assets/commons/JQueryDateTimePicker/lib/themes/classic.date.css';
import './assets/commons/JQueryDateTimePicker/lib/themes/classic.time.css';




import './assets/commons/jquery-global';
import './assets/commons/datatable-global';
import './assets/commons/toastr-global';
import './assets/commons/summernote-global';
import './assets/admin-site/vendor/bootstrap/js/bootstrap.bundle';
import './assets/admin-site/vendor/jquery-easing/jquery.easing';
import './assets/commons/jquery-confirm.min.js';
import './assets/commons/JQueryDateTimePicker/lib/picker';
import './assets/commons/JQueryDateTimePicker/lib/picker.date';
import './assets/commons/JQueryDateTimePicker/lib/picker.time';


createApp(App).use(store).use(router).mount('#app')
