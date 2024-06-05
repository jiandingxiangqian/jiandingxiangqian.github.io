/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Hexo的一些重要指令.html","90664933b5c564fe8904ff8acaba7a13"],["/My-first-post.html","93f97ce524391f8589db7de0ba79abb4"],["/animation/firework.html","54496abbba527afd164a02a0c539e69f"],["/animation/index.html","80059aef77dc96f335a8e02ed0855cba"],["/animation/pictures.html","127ce95f5a59909b8714c05fc6681a92"],["/archives/2024/05/index.html","911100b3f005eaefa1b86c2ee5b342eb"],["/archives/2024/06/index.html","4e924e54678a471606fc2e95c970ab19"],["/archives/2024/index.html","20b95dc90c2b1af6c2ba16e64e7026a4"],["/archives/index.html","1b50408a024b3971d1790037a969913f"],["/assets/qq.png","50e551675f7914d4f90c85d4227badd3"],["/assets/weixin.png","5b9bfac39a90aaa6067f5426e2708f65"],["/css/custom.css","bdaf88489caa380eb311f57866d0f1cc"],["/css/font.css","472c2c987647e03e8c30fe51ca990a30"],["/css/index.css","c0fb5b84fc12c02d4b0887d21a5e064b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","32bab75db7324e4207d1bb5d2ad4de03"],["/gallery/pictures/index.html","97ca5ecf69cd5e597c37c58b11205307"],["/gallery/travel/index.html","d2348c9392fcecec0987be064bc3ec9a"],["/hello-world.html","6934c111cfdc922efdb3a83a555fce7e"],["/hexo-butterfly，如何换上彩色社交图标.html","fd85c8c6eae6cbb7c73e45fcfa154704"],["/hexo-butterfly，如何更改博客字体.html","42f33075e47f954978312ad185a90cc4"],["/images/1-min.jpg","366b4748be3484a9de2d36373756d972"],["/images/101516.png","0f68e59854c07142d5c1b1002de4812c"],["/images/1715833123916_temp_qrcode_share_9993.png","50e551675f7914d4f90c85d4227badd3"],["/images/2-min.jpg","f60691067daab3df4bf5f28a6813722e"],["/images/20240509222033.png","e82fa28db90a43b737c0e35fc3c791f4"],["/images/221218.png","7267f99d392465a67f3970f319e28408"],["/images/222502.png","acff0fd086eab833e76d31929bd858b2"],["/images/3-min.jpg","a6b97ba68f276179cd1f4f4e0c805f1d"],["/images/4-min.jpg","d1c802717f72b2951929d9e3e1fdfbf8"],["/images/5-min.jpg","8667f5a070defdd6f1591ee6a3bc0872"],["/images/6-min.jpg","c407f4760bc078c3a1b5d4752088d964"],["/images/7-min.jpg","9eff080f652ff1a2eb69e3e149348080"],["/images/8-min.jpg","05b461621c6fdbb716489b23fee72f5e"],["/images/9-min.jpg","ff8ab7eb9c7b4ac920d2427ad3305f1f"],["/images/9ITA1slMJEbfeHK.jpg","c603ff52bf13aebe8c406462d3204834"],["/images/IMG_20240126_165019-min.jpg","c7322bc7eda4ce79dc3e2613e6218af9"],["/images/Screenshot_20240525_210246_hello.litiaotiao.app.jpg","403131cc721f5139dfafd98433dd3915"],["/images/Screenshot_20240525_210251_hello.litiaotiao.app.jpg","d9a4a98d5e873fc23abcf7c1e060d301"],["/images/Screenshot_20240525_210423_com.tencent.mm.jpg","963f7bc82c7fcb8a4089762136c5fbfb"],["/images/Screenshot_20240525_211922_hello.litiaotiao.app.jpg","deb03763d430536ee6f52b63a591e684"],["/images/Snipaste_2024-06-03_13-09-26.png","864677ebfa0a4f0214af92ad20741219"],["/images/Snipaste_2024-06-03_13-11-26.png","d72a16da7f73c3d5109fb21d42851eaf"],["/images/Snipaste_2024-06-03_13-13-38.png","54e12291a79a954ea71fb85afad5e07f"],["/images/Snipaste_2024-06-03_13-15-48.png","9aa5b5d2d7702dfe1a96c79d24511a5b"],["/images/Snipaste_2024-06-03_13-16-42.png","da7d76c2fd38cc189bdff0136a1ab647"],["/images/Snipaste_2024-06-03_13-18-36.png","3f6e82f3b830c623d626eb0dfd12b2fb"],["/images/Snipaste_2024-06-03_13-20-01.png","afe0fc592cae7b083ec1893c2d71eca5"],["/images/Snipaste_2024-06-03_13-22-04.png","811448ee8f4ee869abf0debe7a8aa9e5"],["/images/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/images/hexo.jpg","e3e8fd4ef04f5f5d55f78277190a3553"],["/images/image-20240509220949864.png","a95cfcbd02ce410d2ed8c76b957c112f"],["/images/image-20240509223050719.png","6444382a98da0b3a9df556bbe255c313"],["/images/mmqrcode1715833176996.png","5b9bfac39a90aaa6067f5426e2708f65"],["/images/qq.png","30301474e7558e3846ed1c69fc2667ea"],["/images/下载.png","717868abde8ec43fd9ded6bb36280318"],["/images/屏幕截图 2024-05-29 191624.png","dd4b300f0a2758372a076e03b1388bf3"],["/images/屏幕截图 2024-05-29 191819.png","901e19487c05b17696bcfd814774c4a4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","88172eb529b853c963ad79e8f9392f66"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/litiaotiao.html","3330c5e830661d65d4100f2e5b87257f"],["/sw-register.js","12b8bd6c46ff840dad7de395e3b50825"],["/博客修改备忘录.html","8574106a420b3e2bfb17dca60b271138"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
