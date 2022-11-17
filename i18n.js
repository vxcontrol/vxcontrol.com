module.exports = {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: false,
    domains: [
        {
            domain: 'vxcontrol.ru',
            defaultLocale: 'ru',
            // an optional http field can also be used to test
            // locale domains locally with http instead of https
            http: true
        },
        {
            domain: 'vxcontrol.com',
            defaultLocale: 'en'
        }
    ],
    pages: {
        '*': ['common'],
        '/': ['home'],
        '/cookie-policy': ['cookies-notice']
    },
    interpolation: {
        prefix: '${',
        suffix: '}'
    },
    loadLocaleFrom: (locale, namespace) => require(`./public/locales/${locale}/${namespace}`)
};
