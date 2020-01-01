hexo.extend.helper.register('after_post_render', function(data) {
    var gitalkConfig = hexo.config.gitalk;
    if (gitalkConfig) {
        data = data + '\n<div id="gitalk-container"></div>\n<script src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"></script><link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css"><script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>';
        var str = `
		<script>
		var gitalkConfig = ${JSON.stringify(gitalkConfig)};
        const gitalk = new Gitalk ({
            clientID: gitalkConfig.clientID,
            clientSecret: gitalkConfig.clientSecret,
            repo: gitalkConfig.repo,
            owner: gitalkConfig.owner,
            admin: gitalkConfig.admin,
            id: md5(location.pathname),       // Ensure uniqueness and length less than 50
            distractionFreeMode: false   // Facebook-like distraction free mode
        });
        gitalk.render('gitalk-container')
        </script>`;

        data = data + '\n' + str;


    }

    return data;
});