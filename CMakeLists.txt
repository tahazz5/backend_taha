cmake_minimum_required(VERSION 3.16)
project(engine VERSION 0.1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_library(engine3d
    src/Camera.cpp
    src/Mesh.cpp
    src/Renderer.cpp
    src/Transform.cpp
)

target_include_directories(engine3d
    PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/include
)

add_executable(engine_demo src/main.cpp)
target_link_libraries(engine_demo PRIVATE engine3d)

enable_testing()
add_executable(engine_tests tests/engine_tests.cpp)
target_link_libraries(engine_tests PRIVATE engine3d)
add_test(NAME engine_tests COMMAND engine_tests)
