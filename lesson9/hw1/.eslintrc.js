module.export = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'import/prevent-default-export': 0
    },
    env: {
        browser: true,
    },
}