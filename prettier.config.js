// prettier.config.js
module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    overrides: [
        {
            files: ["*.html"],
            options: {
                parser: "go-template",
            },
        },
    ],
}
