rm -rvf "HorizonSim-789/build"
mkdir -p "HorizonSim-789/src/models/build"
cp -rva HorizonSim-789/src/base/. HorizonSim-789/build
cp -rva Scripts/replace.py HorizonSim-789/src/models/build/