---
title: 'Descargar y configurar Firefox Developer Edition para Ubuntu'
description: 'Cómo descargar y configurar el navegador Firefox Developer Edition para Ubuntu 22.04.3.'
pubDate: '2023-12-03'
tags:
  - ubuntu
  - firefox
  - tutorial
previus:
  {
    'link': 'las-matematicas-no-son-una-ciencia',
    'text': 'Las matemáticas no son una ciencia'
  }
next:
  {
    'link': 'crear-shortcut-de-pico-8-en-linux.md',
    'text': 'Crear shortcut de Pico 8 en Linux'
  }
---

Descargar y configurar **Firefox Developer Edition** para Ubuntu 20 o superiores no es una tarea complicada, pero si es la primera vez que se hace uno puede toparse con problemas inesperados si lo hace mal. Este es un breve tutorial para poder descargar y configurar Firefox Developer Edition sin complicaciones.

Para empezar, instale el `.tar` de la web oficial: https://www.mozilla.org/en-US/firefox/developer/.

Mueva el archivo descargado a la carpeta `/opt`.

```
sudo mv firefox*.tar.bz2 /opt
```

Muevase a `/opt`, descomprima el archivo y elimínelo.

```
cd /opt
sudo tar xjf firefox*.tar.bz2
rm firefox*.tar.bz2
```

Cambie la propiedad del directorio `firefox`.

```
sudo chown -R $USER firefox
```

Cree el _shortcut_ de Firefox Developer Edition.

```
vim ~/.local/share/applications/firefox_dev_edition.desktop
```

> Si no tiene instalado vim puede ejecutar el comando `sudo apt update -y && sudo apt install vim -y` o usar **nano** o **vi**, que ya vienen instalados en el sistema.

Escriba lo siguiente en `firefox_dev_edition.desktop`.

```
[Desktop Entry]
Name=Firefox Developer Edition
GenericName=Firefox Developer Edition
Exec=/opt/firefox/firefox %u
Terminal=false
Icon=/opt/firefox/browser/chrome/icons/default/default128.png
Type=Application
Categories=Application;Network;X-Developer;
Comment=Firefox Developer Edition Web Browser.
StartupWMClass=firefox-aurora
```

> Si quiere saber más sobre los archivos `.desktop`, puede ir al siguiente [link](https://help.ubuntu.com/community/UnityLaunchersAndDesktopFiles).

Por último, ceda permisos de ejecución al _shortcut_.

```
chmod +x ~/.local/share/applications/firefox_dev_edition.desktop
```
