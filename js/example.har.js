let example = {
    "log": {
        "version": "1.2",
        "creator": {
            "name": "shun.zheng",
            "version": "1.1.8"
        },
        "pages": [
            {
                "startedDateTime": "2015-09-06T10:02:41.663Z", // 页面开始加载的时间（格式：ISO 8601）
                "id": "http://www.ihorve.com/", // 页面唯一标示符，即页面url
                "title": "Horve后花园", // 页面标题
                "pageTimings": { // 关于页面加载时间的详细信息
                    "onContentLoad": 1720, // 可选，页面开始加载到页面内容加载完毕之间的毫秒数
                    "onLoad": 2500, // 可选，页面开始加载到页面onload之间的毫秒数
                    "comment": "" // 可选，由用户或应用程序提供的注释
                }
            }
        ],
        "entries": [ // 包含全部请求的数组，数组的每一项是一条请求的数据构成的对象，根据startedDateTime排序
            {
                "startedDateTime": "2015-09-06T10:02:41.645Z", // 请求发出的时间(ISO 8601)
                "time": 1221, // 该条请求花费的总的毫秒数
                "request": { // 请求的详细情况
                    "method": "GET", // 请求方式
                    "url": "http://www.ihorve.com/", // 请求的url
                    "httpVersion": "HTTP/1.1", // http协议版本号
                    "cookies": [], // cookie对象列表
                    "headers": [ // header信息
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34"
                        },
                        {
                            "name": "Accept",
                            "value": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
                        }
                    ],
                    "queryString": [], // 查询参数对象的列表
                    "headersSize": -1, // 从HTTP请求消息的开始，直到（且包括）的主体之前的双CRLF的总字节数，不可用设置为-1
                    "bodySize": -1 // 消息体的粽子节数，不可用设置为-1
                },
                "response": { // 响应的详细情况
                    "status": 200, // 状态码
                    "statusText": "OK",
                    "httpVersion": "HTTP/1.1",
                    "cookies": [], // cookie对象列表
                    "headers": [ // 响应头信息列表
                        {
                            "name": "Server",
                            "value": "nginx"
                        },
                        {
                            "name": "Date",
                            "value": "Sun, 06 Sep 2015 09:59:22 GMT"
                        },
                        {
                            "name": "Content-Type",
                            "value": "text/html; charset=UTF-8"
                        },
                        {
                            "name": "Transfer-Encoding",
                            "value": "chunked"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Keep-Alive",
                            "value": "timeout=60"
                        },
                        {
                            "name": "X-Pingback",
                            "value": "http://www.ihorve.com/xmlrpc.php"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        }
                    ],
                    "redirectURL": "", // 从响应头位置重定向目标URL
                    "headersSize": -1, // 从HTTP响应消息的开始，直到（且包括）的主体之前的双CRLF的总字节数，不可用设置为-1
                    "bodySize": 65047, // 响应体的字节数
                    "content": { // 响应体的详细信息
                        "size": 65047, // 响应体的字节数
                        "mimeType": "text/html; charset=UTF-8" // 响应体的mimeType
                    }
                },
                "cache": { // 请求从浏览器缓存的信息
                    "beforeRequest": {}, // 可选，请求前缓存条目的状态
                    "afterRequest": {}, // 可选，请求后缓存条目的状态
                    "comment": ""
                },
                "timings": { // 发送请求到收到响应各阶段的时间，单位均为毫秒
                    "blocked": 0, // 可选，等待网络连接的时间
                    "dns": -1, // 可选，dns解析时间，不可用设置为-1
                    "connect": -1, // 可选，创建TCP连接的时间，不可用设置为-1
                    "send": 0, // 发送HTTP请求到服务器的时间
                    "wait": 1126, // 等待响应的时间
                    "receive": 95, // 从服务器接收或从缓存读取的时间
                    "ssl": -1 // 可选，SSL/TLS协商需要的时间，不可用设置为-1
                },
                "pageref": "http://www.ihorve.com/" // 可选，唯一，参照的父页面，如果应用不支持页面分组，可忽略此项配置
            }
        ]
    }
}