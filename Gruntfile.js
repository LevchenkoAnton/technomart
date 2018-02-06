module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);
	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": ["less/style.less"]
				}

			}
		},

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 10']
            },
            style: {
                src: "css/style.css"
            }
        },
        watch: {
            files: "less/**/*.less",
            tasks: ["less"]
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'js/*.js',
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    grunt.registerTask("build", [
        "less",
        "autoprefixer",
        "browserSync",
        "watch"
    ]);

};