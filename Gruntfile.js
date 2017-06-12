module.exports = function(grunt) {

	//grunt configuration
    grunt.initConfig({
        globalVars: {
            exportedWar:'/var/lib/jenkins/export_war/buildResults/exports/deploymentExports/svyMobile.war',
            prodServer:'root@yourtomcatserver.com:/opt/tomcat/webapps',             
            buildName:'com.servoy.mobile',
            buildJson: '/home/tuan/git/server-related/deployment/build.json',
            solution:'svyMobile'
        },
        bump: {
            options: {
                commit: false,
                push: false
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['<%= globalVars.solution %>/medias/**'],
                    dest: 'app/www/medias'
                }],
            },
            bumpAndroidBuild: {
                src: 'app/config.xml',
                dest: 'app/config.xml',
                options: {
                    process: function(content, srcpath) {
                        var locPkg = grunt.file.readJSON('package.json');
                        grunt.log.write('new version ' + locPkg.version);
                        var deVersion = 'versionCode="' + locPkg.version.replace('.', 0).replace('.', 0) + '"';
                        return content.replace(/versionCode="\d+\d+\d+\d+\d+"/, deVersion);
                    }
                }
            },
            bumpVersionBuild: {
                src: 'app/config.xml',
                dest: 'app/config.xml',
                options: {
                    process: function(content, srcpath) {
                        var locPkg = grunt.file.readJSON('package.json');
                        grunt.log.write('new version ' + locPkg.version);
                        var deVersion = 'version="' + locPkg.version + '"';
                        return content.replace(/version="\d+\.\d+\.\d+"/, deVersion);
                    }
                }
            },
            bumpIOSBuild: {
                src: 'app/config.xml',
                dest: 'app/config.xml',
                options: {
                    process: function(content, srcpath) {
                        var locPkg = grunt.file.readJSON('package.json');
                        grunt.log.write('new version ' + locPkg.version);
                        var deVersion = 'CFBundleversion="' + locPkg.version.replace('.', 0).replace('.', 0) + '"';
                        return content.replace(/CFBundleversion="\d+\d+\d+\d+\d+"/, deVersion);
                    }
                }
            },
        },
        exec: {
            setup_phonegap_app: 'phonegap create app <%= globalVars.buildName %>',
            upload_production_build: 'scp <%= globalVars.exportedWar %> <%= globalVars.prodServer %> ',
            open_android_emu: '~/Android/Sdk/tools/emulator -avd EMU &',
            create_android_debug_build: 'cd app && phonegap run android --debug',
            create_android_release_build: 'cd app && phonegap build android --release --buildConfig <%= globalVars.buildJson %>',
            uninstall_android_app: 'adb uninstall <%= globalVars.buildName %>',
            install_android_app_arm: 'adb install apkoutput/android-armv7-debug.apk',
            install_android_app_x86: 'adb install apkoutput/android-x86-debug.apk',
            run_android_app: 'adb shell am start -n <%= globalVars.buildName %>/<%= globalVars.buildName %>.MainActivity',
            delete_ios_build: 'rm -r /app/platforms/ios',
            create_ios_debug_build: 'cd app && phonegap run ios --debug ',
            create_ios_release_build: 'cd app && phonegap build ios --release '
        }
    });

    //extra helpers
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-bump');

    //the task(s).
    grunt.registerTask('default', ['']);
    grunt.registerTask('setupApp', ['exec:setup_phonegap_app']);
    grunt.registerTask('build', ['copy']);
    grunt.registerTask('deploy', ['exec:upload_production_build']);
    grunt.registerTask('runAE', ['exec:open_android_emu']);
    grunt.registerTask('buildDD', ['bump','copy:main', 'exec:create_android_debug_build']);
    grunt.registerTask('buildDR', ['bump','copy:bumpVersionBuild','copy:bumpAndroidBuild', 'copy:main', 'exec:create_android_release_build']);
    grunt.registerTask('buildID', ['bump','copy:main', 'exec:create_ios_debug_build']);
    grunt.registerTask('buildIR', ['bump', 'copy:bumpIOSBuild', 'copy:bumpVersionBuild', 'copy:main', 'exec:create_ios_release_build']);

};