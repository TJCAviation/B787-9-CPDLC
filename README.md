![HS-Logo](./branding/Horizon_Simulations.png)

# Horizon Simulations 787-9
![GPLv3](https://img.shields.io/badge/License-GPLv3-blue) [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa] 

We want to welcome you to the Horizon Simulations 787-9, this is a modified version of the default 787-10 that asobo offers with the premium deluxe version, as such you **MUST** own the premium deluxe version of Microsoft Flight Simulator in order to use this aircraft. We have also expanded upon this aircraft to ensure a better simulation of the aircraft.

### Boeing 787-9

```
Model  B787-9
Engine Rolls Royce Trent 1000
APU    APS5000
```
```
Model  B787-9
Engine GEnx-1B70
APU    APS5000
```

## Developer Section
### Requirements
    WSL2 
    Python 3
    NodeJS v18 LTS
### How to build
To set up your enviroment run: 
run:
```shell
npm i --save-dev
```

Build the project:
```
npm run prep-hs789:copy-base-package-linux
npm run build-hs789:copy-model-linux
npm run build-hs789:metadata
npm run build-hs789:manifest
```

DONE!

## License Information

This repository and it's contents are dual-licensed (GPLv3 and CC BY-NC-SA 4.0), with a unique set of terms applied to the original textural-form source code and the artistic assets, respectively.

### Game Content User

The Horizon Simulations 787-9 was created under the Microsoft's "Game Content Usage RUles" using assets from Microsoft Flight Simulator 2020. It is not affiliated, associated, authorized, ednorsed by with Mictosoft

### Disclamer

We are not affiliated, associated, authorized, ednorsed by, or in any way officially conected to the Boeing brand or any of it's subsidiaries

### Overall

Content within distribution packages built from the soures in this repository are licensed as follows:
- Original source code or complicated artifacts from Horizon Simulatons: GNU GPLv3.
- Original assets from Horizon Simulations, Qbit Simulations & [Kuro](https://github.com/Kurorin-fs): [CC BY-NC-SA 4.0][cc-by-nc-sa].
- Assets covered by the "Game Content Usage Rules": Under the license granted by those rules.

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

