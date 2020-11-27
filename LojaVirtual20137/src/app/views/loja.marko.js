// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/lojavirtual20137$1.0.0/src/app/views/loja.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Info Store</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css><style>\r\n\r\nbody{\r\n   background-image: url(\"https://i.imgur.com/GbBYTxS.png\") ;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\n#top{\r\n   text-align:center;\r\n}\r\n\r\n#logo{\r\n   margin-top: 40px;\r\n   margin-bottom: 40px;\r\n   border-style: solid;\r\n   border-width: 5px;\r\n   border-color: black;\r\n   border-radius: 10px;\r\n}\r\n\r\n#imgProduto{\r\n   width:200px\r\n}\r\n\r\n.aa{\r\n   margin: 0 auto;\r\n   border-style: solid;\r\n   border-width: 2px;\r\n   border-color: black;\r\n   border-radius: 5px;\r\n   background-color: white;\r\n   width: 75%;\r\n   margin-bottom: 50px;\r\n   font-size: 25px;\r\n   text-align: top;\r\n}\r\n\r\n#barra{\r\nbackground-color: black;\r\nwidth:100%;\r\nheight: 30px;\r\nborder-top: 3px solid white;\r\nborder-bottom: 3px solid white;\r\nmargin-bottom: 20px;\r\n}\r\n\r\n#btn {\r\n            background-color: greenyellow;\r\n            border: 2px solid green;\r\n            border-radius: 10px;\r\n            font-size: 15px;\r\n            height: 30px;\r\n            outline: none;\r\n        }\r\n\r\n</style></head><body><div id=top><img src=https://i.pinimg.com/originals/e5/f9/f5/e5f9f538d9f7c3a273ccb7d34f49c785.png id=logo></div><div id=barra></div>");

  if (data.sessao) {
    out.w("<div><h3>Seja Bem vindo, " +
      marko_escapeXml(data.sessao) +
      " </h3></div>");
  }

  out.w("<div><tbody>");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(produto) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=aa><img" +
      marko_attr("src", produto.fotoProduto) +
      " id=imgProduto><b>" +
      marko_escapeXml(produto.nomeProduto) +
      "</b> R$" +
      marko_escapeXml(produto.precoProduto) +
      "<button type=submit id=btn" +
      marko_attr("value", produto.idProduto) +
      "><b>Adicionar ao carrinho</b></button></div>");
  });

  out.w("</tbody></div><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/lojavirtual20137$1.0.0/src/app/views/loja.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
