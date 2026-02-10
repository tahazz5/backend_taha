#pragma once

#include "engine/Math.hpp"

namespace engine {

class Transform {
public:
    Vec3 position{0.0F, 0.0F, 0.0F};
    Vec3 rotation{0.0F, 0.0F, 0.0F};
    Vec3 scale{1.0F, 1.0F, 1.0F};

    [[nodiscard]] Mat4 modelMatrix() const;
};

} // namespace engine
