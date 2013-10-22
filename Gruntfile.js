/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({
    
        meta: {
            pkg: grunt.file.readJSON('package.json'),
            src: {
                main: '../../ecomfe'
            }
        },

        jsdoc: {
            options: {
                configure: '.jsdocrc',
                destination: 'doc'
            },
            files: [
                '<%= meta.src.main %>/saber-lang/src/*.js',
                '<%= meta.src.main %>/saber-emitter/src/*.js',
                '<%= meta.src.main %>/saber-dom/src/*.js',
                '<%= meta.src.main %>/saber-ui/src/*.js',
                '<%= meta.src.main %>/saber-control/src/*.js',
                '<%= meta.src.main %>/saber-button/src/*.js'
            ]
        }

    });


    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('doc', ['jsdoc']);

};
