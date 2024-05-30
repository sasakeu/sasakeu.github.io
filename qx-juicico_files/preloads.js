
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.1006945fa850d83a93b1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8947.latest.en.9a2924796141b1ccd69c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6655.latest.en.2e66baebe20bc5ed0fe5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.latest.en.03c0b36e91bf756d5735.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.b4945a3ae1133ca7eed2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.latest.en.7c8f677325d8263eb161.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8383.latest.en.68213c11b0a115555fa3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.latest.en.eddf96d2cfec72a2522c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4412.latest.en.f8cb70bf97d6da7ec51e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2764.latest.en.99908a855a64bda11ba5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1243.latest.en.21b84814bbe64dc65688.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/256.latest.en.bb27545c02830b91026f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6589.latest.en.11a853d99f2738ddbc79.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.95b68b0e500710bae3e6.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8947.latest.en.096d8760f5c7f7f3c176.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.2e0eaac22a5cb50aa5d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.5db1188dcbc274fa0d7c.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0641/7747/1651/files/logo_x320.png?v=1707711154"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  