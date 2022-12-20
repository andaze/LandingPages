# HugoBase
Base for building HUGO environments used for internal projects
This is a collection of basic codes to start each project, and project-specific codes including themes are not included in this project.

# Guideline for web development that applies to all projects.

- Avoid zero-based coding as much as possible.
- Know and make extensive use of good libraries available in the world.
- If you are asked to implement or create something, search the Internet for something similar first.
- Avoid hard-coding as much as possible, and try to create a structure and code that can be used in other projects.

# How to use this repository

## Initialization
- Fork this project from [andaze/HugoBase](https://github.com/andaze/HugoBase) to create a new repository.
- Clone the forked repository to your local development environment.
- Install Node and HUGO / also update to newer versions
    ```
    choco install -y nodejs hugo hugo-extended
    # choco upgrade -y nodejs hugo hugo-extended
    ```

## Run
- Execute the following command in the cloned directory (project root)

``` shell
hugo mod npm pack && npm install && hugo server
```

## Destroy