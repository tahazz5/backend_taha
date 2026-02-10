#include "engine/Camera.hpp"

namespace engine {

Camera::Camera(float fovRadians, float aspectRatio, float nearPlane, float farPlane)
    : fovRadians_(fovRadians),
      aspectRatio_(aspectRatio),
      nearPlane_(nearPlane),
      farPlane_(farPlane) {}

Mat4 Camera::projectionMatrix() const {
    return Mat4::perspective(fovRadians_, aspectRatio_, nearPlane_, farPlane_);
}

} // namespace engine
