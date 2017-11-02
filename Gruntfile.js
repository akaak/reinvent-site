// example from https://robmorgan.id.au/posts/publishing-simple-static-sites-with-npm-grunt-s3/

module.exports = function(grunt) {

  // Load S3 plugin
  grunt.loadNpmTasks('grunt-aws');

  // Static Webserver
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.aws.json'),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.bucket %>"
      },
      build: {
        cwd: "build",
        src: "**"
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: "build",
          keepalive: true
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask("default", ["connect"]);

};

