module.exports = {
  outputDir: 'docs',
  lintOnSave: false,
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [{
        loader: 'vue-markdown-loader',
        options: {
          preprocess: function(MarkdownIt, Source) {
            MarkdownIt.renderer.rules.table_open = function() {
              return '<div class="table-container"><table class="table">';
            };
            MarkdownIt.renderer.rules.table_close = function() {
              return '</table></div>';
            };
            return Source;
          },
        },
      }]
    });
  },
};
