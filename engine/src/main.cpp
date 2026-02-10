#include <numbers>

#include "engine/Camera.hpp"
#include "engine/Mesh.hpp"
#include "engine/Renderer.hpp"
#include "engine/Transform.hpp"

int main() {
    engine::Camera camera(std::numbers::pi_v<float> / 3.0F, 16.0F / 9.0F, 0.1F, 100.0F);
    engine::Mesh cube = engine::Mesh::cube(2.0F);

    engine::Transform transform;
    transform.position = {0.0F, 0.0F, -5.0F};

    engine::Renderer renderer;
    renderer.draw(cube, transform, camera);

    return 0;
}
