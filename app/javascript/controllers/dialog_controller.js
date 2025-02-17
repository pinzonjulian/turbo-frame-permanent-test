import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dialog"
export default class extends Controller {
  connect() {
    this.showModal();
  }
  disconnect() {
    this.remove();
  }

  showModal() {
    this.element.showModal();
  }

  close() {
    this.element.close();
    this.remove();
  }

  remove() {
    this.element.remove();
  }
}
