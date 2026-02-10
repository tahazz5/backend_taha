#pragma once

#include <vector>

#include "engine/Math.hpp"

namespace engine {

class Mesh {
public:
    static Mesh cube(float size = 1.0F);

    [[nodiscard]] const std::vector<Vec3>& vertices() const;

private:
    explicit Mesh(std::vector<Vec3> vertices);

    std::vector<Vec3> vertices_;
};

} // namespace engine
