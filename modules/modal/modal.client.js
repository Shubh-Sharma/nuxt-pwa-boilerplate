import Vue from 'vue';
import { spawn } from '@/modules/shared/utils';
import GlobalModal from '@/modules/modal/GlobalModal';

export default (ctx, inject) => {
  const modals = document.createElement('div');
  // modals.classList.add()
  modals.setAttribute('id', 'modals');
  document.body.appendChild(modals);
  const ModalProgrammatic = {
    show(props) {
      if (typeof props === 'string') props = { title: props };
      return spawn('modals', props, GlobalModal, Vue);
    },
  };
  inject('modal', ModalProgrammatic);
};
