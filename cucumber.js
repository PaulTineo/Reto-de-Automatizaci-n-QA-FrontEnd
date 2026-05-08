module.exports = {
  default: {

    require: [
      'src/steps/*.js',
      'src/hooks/*.js'
    ],

    format: [
      'progress',
      'html:reports/report.html'
    ],

    paths: [
      'src/features/*.feature'
    ]
  }
}