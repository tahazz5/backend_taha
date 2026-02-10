# engine

Squelette d'un petit moteur 3D en C++ (prototype) avec :

- Types mathématiques de base (`Vec3`, `Mat4`)
- `Transform`, `Camera`, `Mesh`
- `Renderer` minimal qui simule un draw call
- Un exécutable de démonstration et un binaire de tests

## Build

```bash
cmake -S . -B build
cmake --build build
```

## Exécuter

```bash
./build/engine_demo
ctest --test-dir build --output-on-failure
```
