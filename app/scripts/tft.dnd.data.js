/* global namespace */
(function () {
  'use strict';
  (function (ns) {
    ns.data = {
      skills: [
        {
          id: 1
          , title: 'HTML'
          , description: 'Internet主要由从服务器通过HTTP协议向浏览器发送的HTML文档组成。' +
        'HTML被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。'
          , rankDescriptions: [
          '理解如何创建和浏览一个基本的网页'
          , '理解网页间是如何链接的、如何设计多列布局，可以处理表单字段和媒体元素'
        ]
          , links: [
          {
            label: '无处不在的html'
            , url: 'http://www.phodal.com/blog/be-a-geek-chapter-1-anywhere-html/'
          }
        ]
          , books: [
          {
            book_name: 'Head First HTML与CSS'
            , url: 'http://www.amazon.cn/Head-First-HTML%E4%B8%8ECSS-%E7%BD%97%E5%B8%83%E6%A3%AE/dp/B00FF3P8FY/ref=sr_1_1?ie=UTF8&qid=1424182950&sr=8-1&keywords=html'
          },
          {
            book_name: '图灵程序设计丛书:HTML5权威指南',
            url: 'http://www.amazon.cn/%E5%9B%BE%E7%81%B5%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E4%B8%9B%E4%B9%A6-HTML5%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97-%E5%BC%97%E9%87%8C%E6%9B%BC/dp/B00H706BIG/ref=sr_1_4?ie=UTF8&qid=1424220765&sr=8-4&keywords=html'
          }
        ]
          , maxPoints: 2
          , stats: [
          {
            title: 'Intellect'
            , value: 1
          }
          , {
            title: 'Charisma'
            , value: 1
          },
          {
            title: 'Strength'
            , value: 1
          }
        ]
        },

        {
          id: 2,
          title: 'CSS',
          dependsOn: [1],
          links: [
            {
              label: '无处不在的css'
              , url: 'http://www.phodal.com/blog/be-a-geek-chapter-6-anywhere-css/'
            }, {
              label: 'Can I use... (browser support)'
              , url: 'http://caniuse.com/#cats=CSS'
            }
          ], books: [
          {
            book_name: 'Head First HTML与CSS',
            url: 'http://www.amazon.cn/Head-First-HTML%E4%B8%8ECSS-%E7%BD%97%E5%B8%83%E6%A3%AE/dp/B00FF3P8FY/ref=sr_1_1?ie=UTF8&qid=1424182950&sr=8-1&keywords=html'
          },
          {
            book_name: 'CSS权威指南',
            url: 'http://www.amazon.cn/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97-%E8%BF%88%E8%80%B6/dp/B0011F5SIC/ref=sr_1_1?ie=UTF8&qid=1424220922&sr=8-1&keywords=css'
          },
          {
            book_name: 'CSS禅意花园',
            url: 'http://www.amazon.cn/CSS%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD-%E8%B0%A2%E4%BC%8A/dp/B008HN791U/ref=sr_1_3?ie=UTF8&qid=1424220922&sr=8-3&keywords=css'
          }
        ]
          ,
          maxPoints: 2
          ,
          stats: [
            {
              title: 'Charisma'
              , value: 3
            }
          ]
          ,
          rankDescriptions: [
            '熟悉基础CSS的格式和CSS盒模式'
            , '熟悉媒体查询和响应式设计，使得设计有适配不同的移动'
          ]
          ,
          description: 'CSS能够对网页中的对象的位置排版进行像素级的精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力，并能够进行初步交互设计。'
          ,
          talents: ['时尚']
        },
        {
          id: 3
          ,
          title: 'CSS 工具'
          ,
          dependsOn: [2]
          ,
          links: [
            {
              label: 'Sass vs. LESS'
              , url: 'http://css-tricks.com/sass-vs-less/'
            }
            , {
              label: 'LESS'
              , url: 'http://lesscss.org/'
            }
            , {
              label: 'Sass'
              , url: 'http://sass-lang.com/'
            }
            , {
              label: 'Stylus'
              , url: 'http://learnboost.github.io/stylus/'
            }
          ]
          , books: [
          {
            name: 'Sass与Compass实战',
            url: 'http://www.amazon.cn/Sass%E4%B8%8ECompass%E5%AE%9E%E6%88%98-%E5%B0%BC%E5%BE%B7%E5%85%B0/dp/B00K5KNZSE/ref=sr_1_1?ie=UTF8&qid=1424221572&sr=8-1&keywords=SASS'
          }
        ]
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            '熟悉变量和嵌套'
            , '可以使用高级工具写你自己的代码，如mix-ins'
          ]
          ,
          description: 'LESS与SASS可以帮助你用变量、函数和嵌套编写更加结构化和高效的CSS'
          ,
          stats: [
            {
              title: 'Charisma'
              , value: 2
            }
            , {
              title: 'Dexterity'
              , value: 1
            }
          ]
        },
        {
          id: 4
          ,
          title: 'Web Design Mastery'
          ,
          dependsOn: [2]
          ,
          description: 'You can bring design ideas to life by translating them into the requisite HTML document with CSS styles.'
          ,
          stats: [
            {
              title: 'Charisma'
              , value: 10
            }
          ]
        },
        {
          id: 5
          , title: 'jQuery Effects'
          , dependsOn: [4]
          , links: [
          {
            label: 'Codecademy jQuery'
            , url: 'http://www.codecademy.com/tracks/jquery'
          }
          , {
            label: 'jQuery Category: Manipulation'
            , url: 'http://api.jquery.com/category/manipulation/'
          }
          , {
            label: 'jQuery Category: Effects'
            , url: 'http://api.jquery.com/category/effects/'
          }
        ]
          , maxPoints: 3
          , rankDescriptions: [
          'You are familiar with manipulating the document object model (DOM) - modifying values, content, properties, entire elements, etc.'
          , 'You are familiar with adding standard animation to a web page.'
          , 'You are familiar with creating and adding custom effects to a web page.'
        ]
          , description: 'jQuery provides techniques and methods for client-side manipulation of the web page elements.'
          , talents: ['Sizzlin']
          , stats: [
          {
            title: 'Charisma'
            , value: 2
          }
          , {
            title: 'Dexterity'
            , value: 1
          }
        ]
        },

        {
          id: 6
          ,
          title: '搜索引擎优化'
          ,
          dependsOn: [1]
          ,
          links: [
            {
              label: '每个程序员必知之SEO'
              , url: 'http://www.phodal.com/blog/every-programmer-should-know-how-seo/'
            }
            , {
              label: 'Webmaster Tools (Google)'
              , url: 'http://www.google.com/webmasters/tools/'
            }
            , {
              label: 'Bing - Webmaster Tools'
              , url: 'http://www.bing.com/toolbox/webmaster'
            }
          ],
          books: [
            {
              name: 'SEO艺术',
              url: 'http://www.amazon.cn/SEO%E8%89%BA%E6%9C%AF-%E5%9F%83%E9%87%8C%E5%85%8B%E2%80%A2%E6%81%A9%E5%90%89/dp/B007VEF454/ref=sr_1_5?ie=UTF8&qid=1424223774&sr=8-5&keywords=SEO'
            },
            {
              name: 'SEO深度解析:全面挖掘搜索引擎优化的核心秘密',
              url: 'http://www.amazon.cn/SEO%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90-%E5%85%A8%E9%9D%A2%E6%8C%96%E6%8E%98%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E4%BC%98%E5%8C%96%E7%9A%84%E6%A0%B8%E5%BF%83%E7%A7%98%E5%AF%86-%E7%97%9E%E5%AD%90%E7%91%9E/dp/B00IRQVFSU/ref=sr_1_2?ie=UTF8&qid=1424223774&sr=8-2&keywords=SEO'
            }
          ]
          ,
          description: 'SEO是指从自然搜索结果获得网站流量的技术和过程。'
          ,
          stats: [
            {
              title: 'Intellect'
              , value: 2
            }
            , {
              title: 'Wisdom'
              , value: 1
            }
          ]
        },
        {
          id: 7
          ,
          title: '分析'
          ,
          dependsOn: [6]
          ,
          links: [
            {
              label: '10 SEO Analysis Tools You Should Be Using'
              , url: 'http://www.webgnomes.org/blog/10-seo-analysis-tools/'
            }
            , {
              label: 'Configuring SEO data in Analytics (Google)'
              , url: 'https://support.google.com/analytics/answer/1308621?hl=en'
            }
            , {
              label: 'Using the SEO Reports (Google)'
              , url: 'http://www.bing.com/toolbox/webmaster'
            }
            , {
              label: 'Bing - SEO Analyzer'
              , url: 'http://www.bing.com/toolbox/seo-analyzer'
            }
          ]
          ,
          description: 'Analytics provide performance data about a website as well as information that is usable to measure the success of SEO.'
          ,
          stats: [
            {
              title: 'Intellect'
              , value: 1
            }
            , {
              title: 'Wisdom'
              , value: 2
            }
          ]
          ,
          talents: ['Crafty']
        },

        {
          id: 8
          ,
          title: 'Javascript'
          ,
          dependsOn: [1]
          ,
          links: [
            {
              label: 'JavaScript Tutorial'
              , url: 'http://www.htmldog.com/guides/javascript/'
            }
            , {
              label: '无处不在的javascript'
              , url: 'http://www.phodal.com/blog/be-a-geek-chapter-2-anywhere-javascript-1/'
            }
            , {
              label: 'List of Videos for Beginner JavaScript'
              , url: 'http://thenewboston.org/list.php?cat=10'
            }
            , {
              label: 'Douglas Crockford on Javascript'
              , url: 'http://javascript.crockford.com/'
            }
          ]
          ,
          description: 'JavaScript is the dominant language for client-side programming.  It executes in the user&rsquo;s browser to manipulate the HTML document after it has loaded.  This may be as simple as showing hidden elements, or more advanced like contacting the server to load more data.'
          ,
          stats: [
            {
              title: 'Dexterity'
              , value: 3
            }
          ]
        },
        {
          id: 9
          ,
          title: 'JS 库和框架'
          ,
          dependsOn: [8]
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You tap into libraries like jQuery, MooTools, Prototype, Dojo, and YUI to streamline your work.'
            , 'You use frameworks like KnockoutJS, Ember.js, AngularJS, and Backbone.js to structure complex frontend functionality.'
          ]
          ,
          description: 'Once you&rsquo;re comfortable with the JavaScript language, there&rsquo;s a multitude of libraries and frameworks to accomplish common tasks and enhance your development.'
          ,
          stats: [
            {
              title: 'Dexterity'
              , value: 2
            }
            , {
              title: 'Wisdom'
              , value: 1
            }
          ]
          ,
          talents: ['Nimble']
        },
        {
          id: 10
          , title: '前端 Development Mastery'
          , dependsOn: [9]
          , stats: [
          {
            title: 'Dexterity'
            , value: 10
          }
        ]
        },

        {
          id: 11
          ,
          title: '服务端编程'
          ,
          dependsOn: [1]
          ,
          links: [
            {
              label: 'Server-side scripting Wiki'
              , url: 'http://en.wikipedia.org/wiki/Server-side_scripting'
            }
          ]
          ,
          description: 'Developing items (code) that executes on the server (server-side) instead of the user&raquo;s (client&raquo;s) machine.'
          ,
          stats: [
            {
              title: 'Strength'
              , value: 3
            }
          ]
        },
        {
          id: 12
          ,
          title: '服务端框架'
          ,
          dependsOn: [11]
          ,
          links: [
            {
              label: 'Comparison of web application frameworks'
              , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks'
            }
            , {
              label: 'Web development - server side coding'
              , url: 'http://en.wikipedia.org/wiki/Web_development#Server_side_coding'
            }
          ]
          ,
          description: 'These are software frameworks and collection of packages or modules that allow developers to write applications or services without having to handle the overhead of common activities and lower level details, such as session management, database access, etc.'
          ,
          stats: [
            {
              title: 'Strength'
              , value: 2
            }
            , {
              title: 'Wisdom'
              , value: 1
            }
          ]
          ,
          talents: ['Beefcake']
        },

        {
          id: 13
          ,
          title: 'Database Authoring'
          ,
          links: [
            {
              label: 'w3schools.com SQL Tutorial'
              , url: 'http://www.w3schools.com/sql/'
            }
            , {
              label: 'SQLZOO Interactive SQL Tutorial'
              , url: 'http://sqlzoo.net/wiki/'
            }
            , {
              label: 'Database Normalization Wiki'
              , url: 'https://en.wikipedia.org/wiki/Database_normalization'
            }
          ]
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You understand how to setup tables.'
            , 'You understand how relational databases organize data.'
          ]
          ,
          description: 'Databases are powerful engines for storing, organizing, and retrieving data.  There is a wide variety of database platforms to choose from.  The most widely used database language is Structured Query Language (SQL).  Properly architecting your data will facilitate your site&rsquo;s server-side programming.'
          ,
          stats: [
            {
              title: 'Strength'
              , value: 3
            }
          ]
        },
        {
          id: 14
          ,
          title: 'Advanced DB Management'
          ,
          dependsOn: [13]
          ,
          links: [
            {
              label: 'Stored Procedure - Wiki'
              , url: 'http://en.wikipedia.org/wiki/Stored_procedure'
            }
            , {
              label: 'User-defined function Wiki'
              , url: 'http://en.wikipedia.org/wiki/User_defined_function'
            }
            , {
              label: 'Database Tuning Wiki'
              , url: 'http://en.wikipedia.org/wiki/Database_tuning'
            }
            , {
              label: 'Performance Monitoring and Tuning How-to Topics (SQL Server)'
              , url: 'http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx'
            }
            , {
              label: 'Sql Server Performance Tuning Tips'
              , url: 'http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/'
            }
            , {
              label: 'Oracle database Performance Tuning FAQ'
              , url: 'http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ'
            }
          ]
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You write stored procedures and user-defined functions for more efficient querying.'
            , 'You can detect causes of performance deficiencies and fine tune a database like a rock star.'
          ]
          ,
          description: 'Besides creating basic tables and relating data, databases allow for the creation of stored procedures, sets of SQL statements that are stored in the database, and user-defined functions (UDFs) , functions that can be used in SQL statements.  Just architecting the database is not enough.  The database also needs to be optimized or tuned to increase performance.'
          ,
          stats: [
            {
              title: 'Strength'
              , value: 2
            }
            , {
              title: 'Dexterity'
              , value: 1
            }
          ]
          ,
          talents: ['XXL Knapsack']
        },

        {
          id: 15
          ,
          title: '服务端 Development Mastery'
          ,
          dependsOn: [12, 14]
          ,
          description: 'You are capable of architecting and building an application\'s backend to efficiently store and retrieve data.'
          ,
          stats: [
            {
              title: 'Strength'
              , value: 10
            }
          ]
        },
        {
          id: 16
          ,
          title: '用户授权和认证'
          ,
          dependsOn: [15]
          ,
          links: [
            {
              label: 'ASP.NET authentication and authorization - CodeProject'
              , url: 'http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization'
            }
            , {
              label: 'OpenID Wiki (authentication)'
              , url: 'http://en.wikipedia.org/wiki/OpenID'
            }
            , {
              label: 'OAuth Community'
              , url: 'http://oauth.net/'
            }
            , {
              label: 'ASP.NET Authorization'
              , url: 'http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx'
            }
          ]
          ,
          description: 'Authentication is the process determining whether someone or something is who or what it is declared to be. Authorization is the process of determining if a user is allowed to perform an action or has access to a resource.'
          ,
          stats: [
            {
              title: 'Fortitude'
              , value: 5
            }
          ]
          ,
          talents: ['Truthseeker']
        },
        {
          id: 17
          ,
          title: 'AJAX & APIs'
          ,
          dependsOn: [10, 15]
          ,
          links: [
            {
              label: 'AJAX (programming) Wiki'
              , url: 'http://en.wikipedia.org/wiki/Ajax_(programming)'
            }
            , {
              label: 'List of Videos for AJAX'
              , url: 'http://thenewboston.org/list.php?cat=61'
            }
            , {
              label: 'Ajax: The Official Microsoft ASP.NET Site'
              , url: 'http://www.asp.net/ajax'
            }
            , {
              label: 'Web Service Wiki'
              , url: 'http://en.wikipedia.org/wiki/Web_service'
            }
            , {
              label: 'Representational state transfer (REST) Wiki'
              , url: 'http://en.wikipedia.org/wiki/Representational_state_transfer'
            }
          ]
          ,
          description: 'Technology exists to allow separate systems to communicate between each other in various ways as well as allowing interfaces to be more intractive.  These include the use of Asynchronous JavaScript and XML (AJAX), usually on the client-side, to communicate with an external system.  Other technologies, such as web services, are used to setup end-points for allowing communication with an external system.'
          ,
          stats: [
            {
              title: 'Strength'
              , value: 1
            }
            , {
              title: 'Dexterity'
              , value: 1
            }
            , {
              title: 'Intellect'
              , value: 1
            }
          ]
          ,
          talents: ['Mindweaver']
        },

        {
          id: 18
          ,
          title: 'User Discovery'
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You know the right questions to ask, and use sketches to confirm your ideas.'
            , 'You use advanced techniques like experience mapping to lead conversations with stakeholders.'
          ]
          ,
          links: [
            {
              label: 'The anatomy of an experience map'
              , url: 'http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map'
            }
          ]
          ,
          description: 'One of the first steps taken before anything is designed is to determine what the client (both the site requestor and the site user) wants and/or needs. Techniques include simple sketching, card-sortting and experience mapping.'
          ,
          stats: [
            {
              title: 'Wisdom'
              , value: 2
            }
            , {
              title: 'Charisma'
              , value: 1
            }
          ]
          ,
          talents: ['Mindreader']
        },
        {
          id: 19
          ,
          title: '图形设计'
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You can create a balanced, complementary layout with a clear message.'
            , 'You understand how to create a strikingly unique design, which supports traditional design values as well as your underlying message.'
          ]
          ,
          dependsOn: [18]
          ,
          links: [
            {
              label: 'Graphic Design Wiki'
              , url: 'http://en.wikipedia.org/wiki/Graphic_design'
            }
            , {
              label: 'Behance'
              , url: 'http://www.behance.net/'
            }
            , {
              label: 'User experience design Wiki'
              , url: 'http://en.wikipedia.org/wiki/User_experience_design'
            }
            , {
              label: 'Awwwards'
              , url: 'http://www.awwwards.com/'
            }
          ]
          ,
          description: 'Graphic design is about aesthetics and usability. Good designs are inviting and easy to understand, by solid use of color, typography, balance, hierarchy and white space.'
          ,
          stats: [
            {
              title: 'Charisma'
              , value: 3
            }
          ]
          ,
          talents: ['Artistic']
        },
        {
          id: 20
          ,
          title: '图形设计工具'
          ,
          dependsOn: [19]
          ,
          links: [
            {
              label: '100 Top Tools for Graphic Designers | Graphic Design Classes'
              , url: 'http://graphicdesignclasses.net/design-tools/'
            }
          ]
          ,
          description: 'Software such as Photoshop and devices like drawing tablets are used to create layouts, work with type, touch-up photos, and other activities to add professional polish to your designs.'
          ,
          stats: [
            {
              title: 'Charisma'
              , value: 2
            }
            , {
              title: 'Intellect'
              , value: 1
            }
          ]
        },
        {
          id: 21
          ,
          title: '原型'
          ,
          dependsOn: [18]
          ,
          links: [
            {
              label: 'Design Better And Faster With Rapid Prototyping'
              , url: 'http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/'
            }
            , {
              label: '16 Design Tools for Prototyping and Wireframing'
              , url: 'http://www.sitepoint.com/tools-prototyping-wireframing/'
            }
          ]
          ,
          description: 'Modeling a new design without building all the underlying functionality is a fast and efficient way to convey ideas, test a new concept, and identify problems you didn\'t anticipate.'
          ,
          stats: [
            {
              title: 'Wisdom'
              , value: 1
            }
            , {
              title: 'Intellect'
              , value: 2
            }
          ]
          ,
          talents: ['Conjurer']
        },
        {
          id: 22
          ,
          title: '用户体验设计 Mastery'
          ,
          dependsOn: [19, 21]
          ,
          description: 'You are capable of converting project requirements to an attractive design that promotes a pleasant user experience.'
          ,
          stats: [
            {
              title: 'Wisdom'
              , value: 1
            }
            , {
              title: 'Charisma'
              , value: 2
            }
          ]
        },
        {
          id: 23
          ,
          title: '用户测试'
          ,
          dependsOn: [22]
          ,
          links: [
            {
              label: 'My big list of 24 Web Site Usability Testing Tools'
              , url: 'http://www.usefulusability.com/24-usability-testing-tools/'
            }
            , {
              label: 'Usability Testing Wiki'
              , url: 'http://en.wikipedia.org/wiki/Usability_testing'
            }
          ]
          ,
          description: 'It is a technique, also known as usability testing, that is used to evaluate a website by testing it on users.'
          ,
          stats: [
            {
              title: 'Charisma'
              , value: 1
            }
            , {
              title: 'Wisdom'
              , value: 2
            }
          ]
          ,
          talents: ['Alchemist']
        },

        {
          id: 24
          ,
          title: '服务器管理'
          ,
          links: [
            {
              label: 'Comparison of web server software Wiki'
              , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_server_software'
            }
            , {
              label: 'Apache mod_rewrite - Apache HTTP Server'
              , url: 'http://httpd.apache.org/docs/2.4/rewrite/'
            }
          ]
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You are capable of setting up your application in a new environment.'
            , 'You are familiar with server-side URL rewriting tools like mod_rewrite.'
          ]
          ,
          description: 'Even the simplest web applications will require a server to run them.  There are several popular and fully-featured web servers to choose from, though your application\'s server-side programming language may limit your options.  Learning to manage and configure your web server will help you keep your site up and running smoothly.'
          ,
          stats: [
            {
              title: 'Fortitude'
              , value: 3
            }
          ]
          ,
          talents: ['Stewardship']
        },
        {
          id: 25
          ,
          title: '部署'
          ,
          dependsOn: [24]
          ,
          links: [
            {
              label: 'SSL Certificate Installation'
              , url: 'http://www.sslshopper.com/ssl-certificate-installation.html'
            }
            , {
              label: 'Minimize payload size - Google Developers'
              , url: 'https://developers.google.com/speed/docs/best-practices/payload'
            }
            , {
              label: 'Parallelize downloads across hostnames - Google Developers'
              , url: 'https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads'
            }
          ]
          ,
          maxPoints: 2
          ,
          rankDescriptions: [
            'You minify your public-facing files and serve compressed files to save bandwidth and improve your site&raquo;s speed.'
            , 'You secure sensitive traffic over HTTPS using an SSL certificate.'
          ]
          ,
          description: 'Before sharing your application with the world, follow the best practices for security and performance on the server.'
          ,
          stats: [
            {
              title: 'Fortitude'
              , value: 2
            }
            , {
              title: 'Dexterity'
              , value: 1
            }
          ]
          ,
          talents: ['Spectral Guide']
        },

        {
          id: 26
          , title: 'Web Development Mastery'
          , dependsOn: [4, 5, 10, 15, 22, 25]
          , links: [
          {
            label: 'Web Development Wiki'
            , url: 'http://en.wikipedia.org/wiki/Web_development'
          }
        ]
          , description: 'This refers to designing, creating, and maintaining a website.'
          , stats: [
          {
            title: 'Charisma'
            , value: 3
          }
          , {
            title: 'Dexterity'
            , value: 3
          }
          , {
            title: 'Fortitude'
            , value: 3
          }
          , {
            title: 'Intellect'
            , value: 3
          }
          , {
            title: 'Strength'
            , value: 3
          }
          , {
            title: 'Wisdom'
            , value: 3
          }
        ]
          , talents: ['Demigod']
        }

      ]
    };
  })(namespace('tft.dnd'));
})();
