import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="debugger"
export default class extends Controller {
  connect() {
  }

  triggerMorphRefresh(){
    // Create a new turbo-stream element
    const turboStream = document.createElement('turbo-stream');

    // Set the action attribute to "refresh"
    turboStream.setAttribute('action', 'refresh');
    turboStream.setAttribute('method', 'morph');

    // Optionally, set other attributes or content
    // turboStream.setAttribute('target', 'some-target-id');

    // Append the turbo-stream element to the body
    document.body.appendChild(turboStream);
  }
}
