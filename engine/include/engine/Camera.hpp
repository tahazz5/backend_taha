#pragma once

#include "engine/Math.hpp"

namespace engine {

class Camera {
public:
    Camera(float fovRadians, float aspectRatio, float nearPlane, float farPlane);

    [[nodiscard]] Mat4 projectionMatrix() const;

private:
    float fovRadians_;
    float aspectRatio_;
    float nearPlane_;
    float farPlane_;
};

} // namespace engine
