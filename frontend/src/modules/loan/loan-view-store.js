import { LoanService } from '@/modules/loan/loan-service';
import Errors from '@/shared/error/errors';
import { router} from '@/app-module';

export default {
  namespaced: true,

  state: {
    loading: false,
    record: null,
  },

  getters: {
    record: (state) => state.record,
    loading: (state) => !!state.loading,
  },

  mutations: {
    FIND_STARTED(state) {
      state.record = null;
      state.loading = true;
    },

    FIND_SUCCESS(state, payload) {
      state.record = payload;
      state.loading = false;
    },

    FIND_ERROR(state) {
      state.record = null;
      state.loading = false;
    },
  },

  actions: {
    async doFind({ commit }, id) {
      try {
        commit('FIND_STARTED');
        const record = await LoanService.find(id);
        commit('FIND_SUCCESS', record);
      } catch (error) {
        Errors.handle(error);
        commit('FIND_ERROR');
        router.push('/loan');
      }
    },
  },
};
