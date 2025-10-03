module.exports = {
    mode: "void",
    domain: "js-just.github.io",
    install: {
        typescript_compiler: true,
        dart_sass: true
    },
    compile: {
        ts: true,
        scss: true
    },
    sitemap: {
        generateSitemap: true,
        protocol: 'https:',
    }
}
