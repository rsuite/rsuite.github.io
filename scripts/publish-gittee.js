const ghpages = require('gh-pages');
const { resolve } = require('path');
const { format } = require('date-fns');
console.log('Publishing to gitee...');
ghpages.publish(
  resolve(__dirname, '../dist'),
  {
    add: true,
    dotfiles: true,
    message: `Update in ${format(new Date(), 'YYYY-MM-DD HH:mm:ss')}.`,
    repo: 'git@gitee.com:rsuite/rsuite.git',
    silent: true
  },
  function(err) {
    console.log(
      err ? `Publish to gitee failure: ${err}!` : 'Publish to gitee succeed!'
    );
  }
);
