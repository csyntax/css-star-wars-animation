module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less"],
                    compress: true
                },
                files: {
                    "css/starwars.css": "less/starwars.less"
                }
            }
        },
        watch: {
            less :{
                files: [
                    "less/*.less"
                ],
                tasks: ["less"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
