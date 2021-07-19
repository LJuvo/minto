import BaseLayout from './layout/baseLayout.vue'
 
const minto = {
    "layout": BaseLayout
}

const install = function(Vue) {
    if (install.installed) return;
    
    Object.keys(minto).forEach(key => {
        Vue.component(minto[key].name, minto[key]);
    });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default minto;