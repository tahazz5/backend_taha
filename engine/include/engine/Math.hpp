#pragma once

#include <array>
#include <cmath>

namespace engine {

struct Vec3 {
    float x{0.0F};
    float y{0.0F};
    float z{0.0F};

    Vec3 operator+(const Vec3& other) const {
        return {x + other.x, y + other.y, z + other.z};
    }

    Vec3 operator-(const Vec3& other) const {
        return {x - other.x, y - other.y, z - other.z};
    }

    Vec3 operator*(float scalar) const {
        return {x * scalar, y * scalar, z * scalar};
    }
};

struct Mat4 {
    std::array<float, 16> elements{};

    static Mat4 identity() {
        Mat4 mat{};
        mat.elements = {
            1.0F, 0.0F, 0.0F, 0.0F,
            0.0F, 1.0F, 0.0F, 0.0F,
            0.0F, 0.0F, 1.0F, 0.0F,
            0.0F, 0.0F, 0.0F, 1.0F
        };
        return mat;
    }

    static Mat4 translation(const Vec3& position) {
        Mat4 mat = identity();
        mat.elements[12] = position.x;
        mat.elements[13] = position.y;
        mat.elements[14] = position.z;
        return mat;
    }

    static Mat4 perspective(float fovRadians, float aspectRatio, float nearPlane, float farPlane) {
        Mat4 mat{};
        const float t = 1.0F / std::tan(fovRadians / 2.0F);
        mat.elements[0] = t / aspectRatio;
        mat.elements[5] = t;
        mat.elements[10] = (farPlane + nearPlane) / (nearPlane - farPlane);
        mat.elements[11] = -1.0F;
        mat.elements[14] = (2.0F * farPlane * nearPlane) / (nearPlane - farPlane);
        return mat;
    }
};

} // namespace engine
