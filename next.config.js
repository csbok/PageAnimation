module.exports = {
//  assetPrefix: 'http://fin.woobi.co.kr/out/',
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/main': { page: '/main'},
        '/list': { page: '/list'},
        '/con': { page: '/con'}
      };
    }
  };