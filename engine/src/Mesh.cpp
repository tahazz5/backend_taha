#include "engine/Mesh.hpp"

namespace engine {

Mesh::Mesh(std::vector<Vec3> vertices)
    : vertices_(std::move(vertices)) {}

Mesh Mesh::cube(float size) {
    const float h = size * 0.5F;
    return Mesh({
        {-h, -h, -h}, {h, -h, -h}, {h, h, -h}, {-h, h, -h},
        {-h, -h, h},  {h, -h, h},  {h, h, h},  {-h, h, h}
    });
}

const std::vector<Vec3>& Mesh::vertices() const {
    return vertices_;
}

} // namespace engine
