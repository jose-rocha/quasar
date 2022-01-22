import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';

import preferences from './module-preferences';

export default store(() => {
  const Store = createStore({
    modules: {
      preferences,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
