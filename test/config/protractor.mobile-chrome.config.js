exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub/',
  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    deviceName: 'myDevice'
  },
  specs: [
    '../specs/*.js',
  ],
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  }
};
