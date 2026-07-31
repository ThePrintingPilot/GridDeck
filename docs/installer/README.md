# GridDeck browser installer

This folder is ready to publish through GitHub Pages.

The installer uses ESP Web Tools and flashes one merged image:

- `GridDeck.factory.bin` at flash offset `0`

The file is downloaded from the GitHub Release tagged `v0.7.0`.

## Required release asset

Run the updated release tool from the inner `GridDeck` folder:

```powershell
npm run release
```

The updated release tool creates and uploads:

- `GridDeck.bin` — normal OTA firmware
- `GridDeck.sha256` — OTA checksum
- `GridDeck.factory.bin` — complete first-install image for the browser installer
- `GridDeck.factory.sha256` — factory-image checksum

## GitHub Pages

Publish the repository `/docs` folder through GitHub Pages. The installer URL will be:

```text
https://theprintingpilot.github.io/GridDeck/installer/
```

## User instructions

1. Use Chrome or Edge on desktop.
2. Connect GridDeck with a USB data cable.
3. If it is not detected, hold BOOT while pressing RESET, then try again.
4. Click Connect Device, select the ESP32-S3 serial port, and choose Install / Flash.
5. Do not disconnect the USB cable until installation is complete.
