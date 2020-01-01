hexo.extend.helper.register('after_post_render', function(data) {
    var gitalkConfig = hexo.config.gitalk;
    if (gitalkConfig) {
        data = data + '\n<div id="gitalk-container"></div>\n<script src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"></script><link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css"><script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>';
        var str = `
		<script>
		var gitalkConfig = ${JSON.stringify(gitalkConfig)};
        const gitalk = new Gitalk ({
            clientID: "7323a9f0c3a328009c16",
            clientSecret: "b957ef886749759d6328eb140ea2c1cdd7e5ea26",
            repo: "hexo-sorentryde-blog",
            owner: "Soren234",
            admin: ["Soren234"],
            id: md5(location.pathname),       // Ensure uniqueness and length less than 50
            distractionFreeMode: false   // Facebook-like distraction free mode
        });
        gitalk.render('gitalk-container')
        </script>`;

        data = data + '\n' + str;


    }

    return data;
});