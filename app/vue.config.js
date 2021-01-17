module.exports = {
    filenameHashing: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/scss/_variables.scss";'
            }
        }
    }
}