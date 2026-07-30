const connectTrigger = document.getElementById('connect-trigger');
const instructionsTrigger = document.getElementById('instructions-trigger');
const modal = document.getElementById('instructions-modal');
const installButton = document.getElementById('install-button');
const statusTitle = document.getElementById('status-title');
const statusCopy = document.getElementById('status-copy');

instructionsTrigger?.addEventListener('click', () => {
  modal?.showModal();
});

connectTrigger?.addEventListener('click', () => {
  statusTitle.textContent = 'Choose your ESP32 device';
  statusCopy.textContent = 'When the browser prompt appears, select the ESP32-S3 serial device.';
  installButton?.shadowRoot?.querySelector('button')?.click?.();

  // Fallback in case the shadow button is not available yet.
  setTimeout(() => {
    const fallbackButton = installButton?.querySelector('button[slot="activate"]');
    fallbackButton?.click?.();
  }, 50);
});

installButton?.addEventListener('state-changed', (event) => {
  const state = event.detail?.state || '';

  if (state === 'ERASE' || state === 'INSTALL') {
    statusTitle.textContent = 'Installing firmware';
    statusCopy.textContent = 'Do not disconnect the device until the installation finishes.';
  } else if (state === 'PREPARE' || state === 'CHECKING') {
    statusTitle.textContent = 'Preparing installer';
    statusCopy.textContent = 'Checking your browser support and installer requirements.';
  } else if (state === 'CONFIRM') {
    statusTitle.textContent = 'Confirm installation';
    statusCopy.textContent = 'Approve the browser prompt and continue with the install.';
  } else if (state === 'FINISH') {
    statusTitle.textContent = 'Install complete';
    statusCopy.textContent = 'GridDeck was flashed successfully. You can now reboot the device.';
  }
});
