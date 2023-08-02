# Horizon Simulations 787-9

We want to welcome you to the Horizon Simulations 787-900, this is a modified version of the default 787-10 that asobo offers with the premium delux version, as such you **MUST** own the premium deluxe version of Microsoft Flight Simulator in order to use this aircraft. We have also expanded upon this aircraft to ensure a better simulation of the aircraft.

### Boeing 787-9

```
Model  B787-9
Engine Rolls Royce Trent 1000
APU    APS5000
FMS
```
## Insert credits or whatever

## Developer Section
### Requirements
    WSL2 
    python
    NodeJs v16
### How to build
To set up your enviroment run: 
```shell
npm i
```
#### Models
1. First you will need to run:
```shell
npm run build-HS780:models
```
2. Then you will need to navigate to the folder: HorizonSim-789/src/models/build
3. Find the B787_lod1.gltf and open it in VS code
4. Press Alt+Shift+F and save it once it has finished refatoring
5. run:
```shell
cd HorizonSim-789/src/models/build
python replace.py
```
DONE!

#### Plane
run:
```shell
npx igniter
```
DONE!

## License Information

This repository and it's contents are dual-licensed, with a unique set of terms applied to the original textural-form source code and the artistic assets, respectively.

### GNU General Pulic License version 3 (GNU GPLv3)

Insert License here

### Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License(CC BY-NC 4.0)

Insert License here

### Game Content User

The Horizon Simulations 787-9 was created under the Microsoft's "Game Content Usage RUles" using assets from Microsoft Flight Simulator 2020. It is not affiliated, associated, authorized, ednorsed by with Mictosoft

### Disclamer

We are not affiliated, associated, authorized, ednorsed by, or in any way officially conected to the Boeing brand or any of it's subsidiaries

### Overall

Content within distribution packages built from the soures in this repository are licensed as follows:
- Original source code or complicated artifacts from Horizon simulatons: GNU GPLv3.
- Original assets from Horizon simulations or Qbit simulations: CC BY-NC 4.0.
- Assets covered by the "Game Content Usage RUles": Under the license granted by those rules.

