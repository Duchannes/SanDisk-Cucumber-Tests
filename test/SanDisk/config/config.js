const path = require('path')
const yargs = require('yargs')

exports.config = {
    allScriptsTimeout: 20000,
    getPageTimeout: 20000,
    specs: [path.resolve('./test/SanDisk/features/*.feature')],
    framework: 'custom',
    frameworkPath : require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },
    disableChecks: true,
    cucumberOpts: {
        require: [path.resolve('./test/SanDisk/steps/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: 'json:./reports/report.json',
        tags: yargs.tag || '@sandisk'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.manage().window().maximize();
    }
}