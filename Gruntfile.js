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
            'saber-lang': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-lang'
                },
                src: [ '<%= meta.src.main %>/saber-lang/src/*.js' ]
            },
            'saber-string': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-string'
                },
                src: [ '<%= meta.src.main %>/saber-string/src/*.js' ]
            },
            'saber-emitter': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-emitter'
                },
                src: [ '<%= meta.src.main %>/saber-emitter/src/*.js' ]
            },
            'saber-dom': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-dom'
                },
                src: [ '<%= meta.src.main %>/saber-dom/src/*.js' ]
            },
            'saber-ui': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-ui'
                },
                src: [ '<%= meta.src.main %>/saber-ui/src/*.js' ]
            },
            'saber-control': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-control'
                },
                src: [ '<%= meta.src.main %>/saber-control/src/*.js' ]
            },
            'saber-button': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-button'
                },
                src: [ '<%= meta.src.main %>/saber-button/src/*.js' ]
            },
            'saber-tab': {
                options: {
                    configure: '.jsdocrc',
                    destination: 'doc/saber-tab'
                },
                src: [
                    '<%= meta.src.main %>/saber-tab/src/*.js',
                    '<%= meta.src.main %>/saber-tab/src/plugin/*.js'
                ]
            }
        }

    });


    grunt.loadNpmTasks( 'grunt-jsdoc' );

    grunt.registerTask( 'doc', ['jsdoc']);

};
