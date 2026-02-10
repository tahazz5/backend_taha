#pragma once

#include <cstddef>

#include "engine/Camera.hpp"
#include "engine/Mesh.hpp"
#include "engine/Transform.hpp"

namespace engine {

class Renderer {
public:
    void draw(const Mesh& mesh, const Transform& transform, const Camera& camera) const;

private:
    static void printMatrixSummary(const Mat4& matrix, const char* label);
    static std::size_t triangleEstimate(std::size_t vertexCount);
};

} // namespace engine
