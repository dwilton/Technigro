'use strict';

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Build Config
	var buildConfig = {
		app: 'app',
		dist: 'dist/technigro/www',
		test: 'test',
		report: 'report',
		port: 9000,
		hostname: 'localhost'
	};

	// Project configuration
	grunt.initConfig({

		// Pass build config to grunt
		config: buildConfig,


		/**
		 * Optimize Images
		 */

		// SVG Minification
		svgmin: {
			app: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= config.app %>/images'
				}]
			}
		},

		// Image Minification
		imagemin: {
			app: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= config.app %>/images'
				}]
			}
		},


		/**
		 * CSS Preprocessing
		 */

		// Compile LESS files to CSS
		less: {
			app: {
				expand: true,
				cwd: '<%= config.app %>/less/',
				src: '*.less',
				dest: '<%= config.app %>/css/',
				ext: '.css'
			}
		},

		// Auto-prefix CSS
		autoprefixer: {
			app: {
				options: {
					browsers: ['last 1 version', '> 1%', 'ie 8', 'ie 7', 'ios 6.1']
				},
				expand: true,
				cwd: '<%= config.app %>/css/',
				src: '*.css',
				dest: '<%= config.app %>/css/'
			}
		},

		// Base64 CSS
		imageEmbed: {
			app: {
				expand: true,
				cwd: '<%= config.app %>/css/',
				src: '*.css',
				dest: '<%= config.app %>/css/',
				options: {
					deleteAfterEncoding: false
				}
			}
		},


		/**
		 * Linting & Unit Testing
		 */

		// Lint CSS
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ['<%= config.app %>/css/*.css']
			}
		},

		// Lint Javascript
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: [
				'<%= config.app %>/scripts/*.js',
				'<%= config.app %>/scripts/**/*.js',
				'<%= config.test %>/spec/*.js',
				'<%= config.test %>/spec/**/*.js'
			]
		},

		// Karma: JavaScript Test Runner
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			},
			coverage: {
				configFile: 'karma.conf.js',
				preprocessors: {
					'app/scripts/**/*.js': 'coverage'
				},
				reporters: [
					'progress',
					'coverage'
				],
				coverageReporter: {
					type: 'html',
					dir: 'report/coverage/'
				}
			}
		},


		/**
		 * Server
		 */

		// Live reload
		connect: {
			options: {
				port: buildConfig.port,
				// change this to '0.0.0.0' to access the server from outside
				hostname: buildConfig.hostname
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, buildConfig.app)
						];
					}
				}
			},
			dist: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, buildConfig.dist)
						];
					}
				}
			}
		},

		// Open URL
		open: {
			app: {
				path: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>'
			}
		},

		// Watch tasks
		regarde: {
			/*scripts: {
				files: '<%= jshint.files %>',
				tasks: ['jshint', 'karma:unit']
			},*/
			html: {
				files: [
					'<%= config.app %>/*.html',
					'<%= config.app %>/css/*.css'
				],
				tasks: 'livereload'
			},
			less: {
				files: [
					'<%= config.app %>/less/*.less',
					'<%= config.app %>/less/**/*.less'
				],
				tasks: ['less:app', 'autoprefixer:app', 'imageEmbed:app']
			},
		},


		/**
		 * Dist
		 */

		// Clean dist and icon fonts
		clean: {
			dist: ['<%= config.dist %>'],
			webfont: ['<%= config.app %>/fonts/icon']
		},

		// Copy required files from src to dist
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>',
					src: [
						'*',
						'!css',
						'fonts/*',
						'!icons',
						'!images',
						'!less',
						'res/**/*',
						'!scripts',
						'!vendor'
					],
					dest: '<%= config.dist %>/'
				}]
			}
		},

		// Concat Cardinal, Ladda, Animo and Appliction CSS
		concat: {
			css: {
				src: [
					'<%= config.app %>/vendor/cardinal/css/main.min.css',
					'<%= config.app %>/vendor/ladda/dist/ladda-themeless.min.css',
					'<%= config.app %>/vendor/animo.js/animate+animo.css',
					'<%= config.app %>/css/style.css'
				],
				dest: '<%= config.dist %>/css/style.min.css',
			},
			lawnchair: {
				src: [
					'<%= config.app %>/vendor/lawnchair/src/Lawnchair.js',
					'<%= config.app %>/vendor/lawnchair/src/adapters/webkit-sqlite.js'
				],
				dest: '<%= config.dist %>/scripts/lawnchair.min.js'
			}
		},

		// Minify CSS
		cssmin: {
			minify: {
				expand: true,
				cwd: '<%= config.dist %>/css/',
				src: ['*.css'],
				dest: '<%= config.dist %>/css/',
			}
		},

		// RequireJS build and replace with almond
		requirejs: {
			compile: {
				options: {
					baseUrl: '<%= config.app %>/scripts',
					name: '../vendor/almond/almond',
					mainConfigFile: '<%= config.app %>/scripts/main.js',
					include: ['main'],
					insertRequire: ['main'],
					out: '<%= config.dist %>/scripts/main.min.js',
					wrap: true,
					findNestedDependencies: true
				}
			}
		},

		// Minify Modernizr
		uglify: {
			options: {
				mangle: false
			},
			modernizr: {
				files: {
					'<%= config.dist %>/scripts/modernizr.min.js': ['<%= config.app %>/vendor/modernizr/modernizr.js']
				}
			}
		},

		// Replace references to non-optimized script / stylesheets
		usemin: {
			html: ['<%= config.dist %>/**/*.html']
		},

		// Cache bust
		rev: {
			files: {
				src: ['<%= config.dist %>/**/*.min.*']
			}
		},


		/**
		 * Icon Font
		 */

		// Create Icon-Font (OSX Only)
		// Installation Instructions [https://github.com/sapegin/grunt-webfont#installation]
		webfont: {
			icons: {
				src: '<%= config.app %>/icons/*.svg',
				dest: '<%= config.app %>/fonts',
				destCss: '<%= config.app %>/less/icon',
				options: {
					font: 'icon',
					hashes: false,
					stylesheet: 'less',
					bem: true,
					relativeFontPath: '../fonts',
					htmlDemo: false
				}
			}
		},


		/**
		 * Reporting
		 */

		// Plato: JavaScript source code visualization, static analysis, and complexity tool
		plato: {
			app: {
				options: {
					jshint: grunt.file.readJSON('.jshintrc')
				},
				files: {
					'<%= config.report %>/plato': ['<%= config.app %>/scripts/**/*.js', '<%= config.test %>/spec/**/*.js'],
				}
			}
		},

		// Dependo: Visualize CommonJS or AMD module dependencies in a force directed graph report
		dependo: {
			targetPath: '<%= config.app %>/scripts',
			outputPath: '<%= config.report %>/dependo',
			format: 'amd'
		}

	});


	/**
	 * Grunt Tasks
	 */

	// Optimize Images
	grunt.registerTask('imgmin', [
		'svgmin',
		'imagemin',
	]);

	// Preprocess
	grunt.registerTask('preprocess', [
		'less',
		'autoprefixer',
		'imageEmbed'
	]);

	// Test
	// Disable unit tests
	grunt.registerTask('test', [
		'jshint',
		//'karma:unit'
	]);

	// Server
	grunt.registerTask('server', [
		'livereload-start',
		'connect:livereload',
		'open',
		'regarde'
	]);

	// Server Dist
	grunt.registerTask('server:dist', [
		'open',
		'connect:dist:keepalive'
	]);

	// Package
	grunt.registerTask('dist', [
		'clean:dist',
		'copy',
		'concat',
		'cssmin',
		'requirejs',
		'uglify',
		'rev',
		'usemin'
	]);

	// Default
	grunt.registerTask('default', function() {
		grunt.task.run('preprocess');
		grunt.task.run('test');
	});

	// Create icon font
	grunt.registerTask('iconfont', [
		'clean:webfont',
		'webfont'
	]);

	// Create Reports
	grunt.registerTask('report', [
		'karma:coverage',
		'plato',
		'dependo'
	]);

};