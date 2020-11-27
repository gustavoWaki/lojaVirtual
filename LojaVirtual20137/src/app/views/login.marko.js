// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/lojavirtual20137$1.0.0/src/app/views/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><style>\r\n        \r\n        body {\r\n            text-align: center;\r\n            background-image: url(\"https://i.imgur.com/GbBYTxS.png\");\r\n            background-position: center;\r\n            background-repeat: no-repeat;\r\n            background-size: cover;\r\n        }\r\n        \r\n        #caixa {\r\n            margin-top: 200px;\r\n            margin: 0 auto;\r\n            border-radius: 3px;\r\n            background-color: white;\r\n            width: 290px;\r\n            height: 400px;\r\n        }\r\n        \r\n        form {\r\n            border: 3px solid #f1f1f1;\r\n        }\r\n        /* Full-width inputs */\r\n        \r\n        input[type=text],\r\n        input[type=password] {\r\n            width: 100%;\r\n            padding: 12px 20px;\r\n            margin: 8px 0;\r\n            display: inline-block;\r\n            border: 1px solid #ccc;\r\n            box-sizing: border-box;\r\n        }\r\n        \r\n        button {\r\n            background-color: #4CAF50;\r\n            color: white;\r\n            padding: 14px 20px;\r\n            margin: 8px 0;\r\n            border: none;\r\n            cursor: pointer;\r\n            width: 100%;\r\n        }\r\n        \r\n        button:hover {\r\n            opacity: 0.8;\r\n        }\r\n        \r\n        .cancelbtn {\r\n            width: auto;\r\n            padding: 10px 18px;\r\n            background-color: #f44336;\r\n        }\r\n        \r\n        .imgcontainer {\r\n            text-align: center;\r\n            margin: 24px 0 12px 0;\r\n        }\r\n        \r\n        img.avatar {\r\n            width: 40%;\r\n            border-radius: 50%;\r\n        }\r\n        \r\n        .container {\r\n            padding: 16px;\r\n        }\r\n        \r\n        label {\r\n            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n        }\r\n\r\n        #logo{\r\n            margin-top: 60px;\r\n            margin-bottom: 60px;\r\n            border-style: solid;\r\n            border-width: 5px;\r\n            border-color: black;\r\n            border-radius: 10px;\r\n        }\r\n\r\n        #link{\r\n            text-decoration: none;\r\n        }\r\n    </style></head><body><img src=https://i.pinimg.com/originals/e5/f9/f5/e5f9f538d9f7c3a273ccb7d34f49c785.png id=logo><div id=caixa><form action=/validaBDCliente method=post><div class=imgcontainer><img src=https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640 alt=Avatar class=avatar></div><div class=container><label for=login><b>CPF</b></label><input type=text placeholder=\"Digite seu CPF\" name=login id=login required><label for=senha><b>Senha</b></label><input type=password placeholder=\"Digite sua senha\" name=senha required id=senha><button type=submit>Login</button></div></form><a href=/inclusaoCliente id=link>Não tem conta?</a></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/lojavirtual20137$1.0.0/src/app/views/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
