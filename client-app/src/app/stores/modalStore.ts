import { RootStore } from './rootStore';
import { observable, action, runInAction } from 'mobx';

export default class ModalStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable.shallow modal = {
    open: false,
    body: null,
  };
  @action openModal = (content: any) => {
    runInAction('Modal Opening', () => {
      this.modal.open = true;
      this.modal.body = content;
    });
  };
  @action closeModal = () => {
    runInAction('Modal Closing', () => {
      this.modal.open = false;
      this.modal.body = null;
    });
  };
}
