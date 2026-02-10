#include "engine/Renderer.hpp"

#include <iostream>

namespace engine {

void Renderer::draw(const Mesh& mesh, const Transform& transform, const Camera& camera) const {
    const Mat4 model = transform.modelMatrix();
    const Mat4 projection = camera.projectionMatrix();

    std::cout << "[engine] draw call" << '\n';
    std::cout << "  vertices: " << mesh.vertices().size() << '\n';
    std::cout << "  estimated triangles: " << triangleEstimate(mesh.vertices().size()) << '\n';
    printMatrixSummary(model, "model");
    printMatrixSummary(projection, "projection");
}

void Renderer::printMatrixSummary(const Mat4& matrix, const char* label) {
    std::cout << "  " << label << " m00=" << matrix.elements[0]
              << " m11=" << matrix.elements[5]
              << " m22=" << matrix.elements[10]
              << " m33=" << matrix.elements[15]
              << '\n';
}

std::size_t Renderer::triangleEstimate(std::size_t vertexCount) {
    return vertexCount / 3;
}

} // namespace engine
