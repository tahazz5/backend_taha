#include <cmath>
#include <iostream>

#include "engine/Camera.hpp"
#include "engine/Mesh.hpp"
#include "engine/Transform.hpp"

namespace {

bool approx(float a, float b, float eps = 1e-4F) {
    return std::fabs(a - b) < eps;
}

} // namespace

int main() {
    const auto cube = engine::Mesh::cube(2.0F);
    if (cube.vertices().size() != 8) {
        std::cerr << "expected 8 cube vertices\n";
        return 1;
    }

    engine::Transform transform;
    transform.position = {1.0F, 2.0F, 3.0F};
    const auto model = transform.modelMatrix();
    if (!approx(model.elements[12], 1.0F) || !approx(model.elements[13], 2.0F) || !approx(model.elements[14], 3.0F)) {
        std::cerr << "model matrix translation mismatch\n";
        return 1;
    }

    engine::Camera camera(1.0F, 16.0F / 9.0F, 0.1F, 100.0F);
    const auto projection = camera.projectionMatrix();
    if (!approx(projection.elements[11], -1.0F)) {
        std::cerr << "projection matrix mismatch\n";
        return 1;
    }

    std::cout << "all engine tests passed\n";
    return 0;
}
