"use strict";(self.webpackChunkketonetic=self.webpackChunkketonetic||[]).push([[556],{3452:function(e,n,a){a.r(n),a.d(n,{previewQuery:function(){return u}});var t=a(7294),r=a(3677),i=a(262),l=a(9690),g=a(4022),c=a(8740),s=a(7306),u="\n    query($slug: String, $previewToken: String) {\n        categoryPages(slug: $slug, previewToken: $previewToken) {\n            title\n            pageTitle\n            breadcrumbs {\n                menuTitle\n                linkUrl\n            }\n            searchDescription\n            searchImage {\n                ...fullImage\n            }\n            slug\n            specificPageType\n            pageUrl\n            intro\n            body {\n                ..bodyFields\n            }\n            numPerPage\n            landingPages {\n                title\n                pageTitle\n                searchDescription\n                firstPublishedAt\n                lastPublishedAt\n                slug\n                specificPageType\n                pageUrl\n                author {\n                    fullName\n                }\n                intro\n                searchImage {\n                    id\n                    src\n                    alt\n                    credit\n                }\n            }\n        }\n    }\n";n.default=function(e){var n=e.data.wagtail.categoryPages[0];return t.createElement(r.Z,{pageInfo:{backgroundImage:!1}},t.createElement(i.Z,{title:n.pageTitle,description:n.searchDescription,feedImage:n.searchImage}),n.body.length>0?t.createElement(l.Z,{streamField:n.body,pageData:n}):t.createElement(s.Z,{pageData:n}),t.createElement(g.Z,{columnLayout:1},t.createElement(c.Z,{pages:n.landingPages})))}}}]);
//# sourceMappingURL=component---src-templates-core-category-page-js-08f6867945877e0439b6.js.map