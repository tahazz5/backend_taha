#include "engine/Transform.hpp"

namespace engine {

Mat4 Transform::modelMatrix() const {
    return Mat4::translation(position);
}

} // namespace engine
