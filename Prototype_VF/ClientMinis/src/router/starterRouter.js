import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue';
import Starter from '../pages/Dashboard.vue';
import Fournitures from '../pages/Fournitures.vue';
import Notification from '../pages/Notifications.vue'
import Profile from '../pages/Profile.vue';
import Maps from '../pages/Maps.vue';
import volontaires from '../pages/Volontaires.vue' ;
import vd from '../pages/VolontaireRecherche.vue' ;
import vr from '../pages/VolontaireReserver.vue' ;
import v1 from '../pages/VolentaireDemande.vue';
import v2 from '../pages/Confirmer.vue';
import v3 from '../pages/Conf.vue';
import vfe from '../pages/FournituresEtab';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          components: { default: Starter }
        },
        {
          path: 'fournitures',
          name: 'Fournitures',
          component: Fournitures
        },
        {
          path: "notifications",
          name: "notifications",
          component: Notification
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "maps",
          name: "maps",
          component: Maps
        },
        {
          path: "volontaires",
          name: "volontaires",
          component: volontaires
        },
        {
          path: "vd",
          name: "volontairesrecherche",
          component: vd
        },
        {
          path: "v1",
          name: "VolentaireDemande.vue",
          component: v1
        },
        {
          path: "v2",
          name: "Confirmer.vue",
          component: v2
        },
        {
          path: "v3",
          name: "Conf.vue",
          component: v3
        },
        {
          path: "vr",
          name: "volontaireservation",
          component: vr
        },
        {
          path: "vfe",
          name: "FournituresEtab.vue",
          component: vfe
        },
      ]
    }
  ]
});
