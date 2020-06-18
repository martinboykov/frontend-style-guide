function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{dCtr:function(e,n,t){"use strict";t.r(n),t.d(n,"CodeGuideModule",(function(){return p}));var o,c,i,a=t("ofXK"),r=t("tyNb"),b=t("fXoL"),s=t("NgME"),l=[{path:"",component:(o=function(){function e(n){_classCallCheck(this,e),this.prismService=n,this.html={syntax:'\n<!doctype html>\n<html>\n  <head>\n    <title>Page title</title>\n  </head>\n  <body>\n    <img src="images/company-logo.png" alt="Company">\n    <h1 class="hello-world">Hello, world!</h1>\n  </body>\n</html>\n',reducing:'\n\x3c!-- Not so great --\x3e\n<span class="avatar">\n  <img src="...">\n</span>\n\n\x3c!-- Better --\x3e\n<img class="avatar" src="...">\n',order:'\n<a class="..." id="..." data-toggle="modal" href="#">\n  Example link\n</a>\n\n<input class="form-control" type="text">\n\n<img src="..." alt="...">\n'}}return _createClass(e,[{key:"ngOnInit",value:function(){for(var e in this.html)this.html.hasOwnProperty(e)&&(this.html[e]=this.prismService.highlight(this.html[e]))}},{key:"ngAfterViewInit",value:function(){this.prismService.highlightAll()}}]),e}(),o.\u0275fac=function(e){return new(e||o)(b.Lb(s.a))},o.\u0275cmp=b.Fb({type:o,selectors:[["app-code-guide"]],decls:221,vars:9,consts:[[1,"container"],[1,"inner-page-heading"],["href","https://codeguide.co/"],["href","https://primer.style/css/"],[1,"b-b"],[1,"content-wrapper","code-guide"],[1,"g-span-2"],[1,"g-span","text"],[1,"g-span","highlight"],[1,"language-markup",3,"innerHTML"],[1,"g-span"],[1,"language-css"],["href","https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js"]],template:function(e,n){1&e&&(b.Rb(0,"div",0),b.Rb(1,"h1",1),b.xc(2,"Code Guide"),b.Qb(),b.Rb(3,"p"),b.xc(4,"This Code Guide is largely based on "),b.Rb(5,"a",2),b.xc(6,"codeguide.co."),b.Qb(),b.xc(7," and "),b.Rb(8,"a",3),b.xc(9,"primer.style"),b.Qb(),b.Qb(),b.Qb(),b.Rb(10,"main",0),b.Rb(11,"h2",4),b.xc(12,"HTML"),b.Qb(),b.Rb(13,"div",5),b.Rb(14,"div",6),b.Rb(15,"h3"),b.xc(16,"Practicality over purity"),b.Qb(),b.Rb(17,"p"),b.xc(18,"Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible."),b.Qb(),b.Qb(),b.Qb(),b.Rb(19,"div",5),b.Rb(20,"div",7),b.Rb(21,"h3"),b.xc(22,"Media query placement"),b.Qb(),b.Rb(23,"p"),b.xc(24,"Place media queries as close to their relevant rule sets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document. Doing so only makes it easier for folks to miss them in the future. Here's a typical setup."),b.Qb(),b.Qb(),b.Rb(25,"div",8),b.Rb(26,"pre"),b.xc(27,"        "),b.Rb(28,"code",9),b.xc(29,"\n        "),b.Qb(),b.xc(30,"\n      "),b.Qb(),b.Qb(),b.Qb(),b.Rb(31,"div",5),b.Rb(32,"div",7),b.Rb(33,"h3"),b.xc(34,"Attribute order"),b.Qb(),b.Rb(35,"p"),b.xc(36,"HTML attributes should come in this particular order for easier reading of code."),b.Qb(),b.Rb(37,"ul"),b.Rb(38,"li"),b.Rb(39,"code"),b.xc(40,"class"),b.Qb(),b.Qb(),b.Rb(41,"li"),b.Rb(42,"code"),b.xc(43,"id"),b.Qb(),b.xc(44,", "),b.Rb(45,"code"),b.xc(46,"name"),b.Qb(),b.Qb(),b.Rb(47,"li"),b.Rb(48,"code"),b.xc(49,"data-*"),b.Qb(),b.Qb(),b.Rb(50,"li"),b.Rb(51,"code"),b.xc(52,"src"),b.Qb(),b.xc(53,", "),b.Rb(54,"code"),b.xc(55,"for"),b.Qb(),b.xc(56,", "),b.Rb(57,"code"),b.xc(58,"type"),b.Qb(),b.xc(59,", "),b.Rb(60,"code"),b.xc(61,"href"),b.Qb(),b.xc(62,", "),b.Rb(63,"code"),b.xc(64,"value"),b.Qb(),b.Qb(),b.Rb(65,"li"),b.Rb(66,"code"),b.xc(67,"title"),b.Qb(),b.xc(68,", "),b.Rb(69,"code"),b.xc(70,"alt"),b.Qb(),b.Qb(),b.Rb(71,"li"),b.Rb(72,"code"),b.xc(73,"role"),b.Qb(),b.xc(74,", "),b.Rb(75,"code"),b.xc(76,"aria-*"),b.Qb(),b.Qb(),b.Qb(),b.Rb(77,"p"),b.xc(78,"Classes make for great reusable components, so they come first. Ids are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second."),b.Qb(),b.Qb(),b.Rb(79,"div",8),b.Rb(80,"pre"),b.xc(81,"        "),b.Rb(82,"code",9),b.xc(83,"\n        "),b.Qb(),b.xc(84,"\n      "),b.Qb(),b.Qb(),b.Qb(),b.Rb(85,"div",5),b.Rb(86,"div",10),b.Rb(87,"h3"),b.xc(88,"Reducing markup"),b.Qb(),b.Rb(89,"p"),b.xc(90,"Whenever possible, avoid superfluous parent elements when writing HTML. Many times this requires iteration and refactoring, but produces less HTML. Take the following example:"),b.Qb(),b.Qb(),b.Rb(91,"div",8),b.Rb(92,"pre"),b.xc(93,"        "),b.Rb(94,"code",9),b.xc(95,"\n        "),b.Qb(),b.xc(96,"\n      "),b.Qb(),b.Qb(),b.Qb(),b.Rb(97,"div",5),b.Rb(98,"div",6),b.Rb(99,"h3"),b.xc(100,"JavaScript generated markup"),b.Qb(),b.Rb(101,"p"),b.xc(102,"Writing markup in a JavaScript file makes the content harder to find, harder to edit, and less performant. Avoid it whenever possible"),b.Qb(),b.Qb(),b.Qb(),b.Rb(103,"h2",4),b.xc(104,"CSS"),b.Qb(),b.Rb(105,"div",5),b.Rb(106,"div",7),b.Rb(107,"h3"),b.xc(108,"Syntax"),b.Qb(),b.Rb(109,"ul"),b.Rb(110,"li"),b.xc(111,"Use soft tabs with two spaces\u2014they're the only way to guarantee code renders the same in any environment."),b.Qb(),b.Rb(112,"li"),b.xc(113,"When grouping selectors, keep individual selectors to a single line."),b.Qb(),b.Rb(114,"li"),b.xc(115,"Include one space after "),b.Rb(116,"code"),b.xc(117,":"),b.Qb(),b.xc(118," for each declaration."),b.Qb(),b.Rb(119,"li"),b.xc(120,"Each declaration should appear on its own line for more accurate error reporting."),b.Qb(),b.Rb(121,"li"),b.xc(122,"Comma-separated property values should include a space after each comma (e.g., "),b.Rb(123,"code"),b.xc(124,"box-shadow"),b.Qb(),b.xc(125,")."),b.Qb(),b.Rb(126,"li"),b.xc(127,"Don't include spaces after commas "),b.Rb(128,"em"),b.xc(129,"within"),b.Qb(),b.Rb(130,"code"),b.xc(131,"rgb()"),b.Qb(),b.xc(132,", "),b.Rb(133,"code"),b.xc(134,"rgba()"),b.Qb(),b.xc(135,", "),b.Rb(136,"code"),b.xc(137,"hsl()"),b.Qb(),b.xc(138,", "),b.Rb(139,"code"),b.xc(140,"hsla()"),b.Qb(),b.xc(141,", or "),b.Rb(142,"code"),b.xc(143,"rect()"),b.Qb(),b.xc(144," values. This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space)."),b.Qb(),b.Rb(145,"li"),b.xc(146,"Don't prefix property values or color parameters with a leading zero (e.g., "),b.Rb(147,"code"),b.xc(148,".5"),b.Qb(),b.xc(149," instead of "),b.Rb(150,"code"),b.xc(151,"0.5"),b.Qb(),b.xc(152," and "),b.Rb(153,"code"),b.xc(154,"-.5px"),b.Qb(),b.xc(155," instead of "),b.Rb(156,"code"),b.xc(157,"-0.5px"),b.Qb(),b.xc(158,")."),b.Qb(),b.Rb(159,"li"),b.xc(160,"Lowercase all hex values, e.g., "),b.Rb(161,"code"),b.xc(162,"#fff"),b.Qb(),b.xc(163,". Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes."),b.Qb(),b.Rb(164,"li"),b.xc(165,"Use shorthand hex values where available, e.g., "),b.Rb(166,"code"),b.xc(167,"#fff"),b.Qb(),b.xc(168," instead of "),b.Rb(169,"code"),b.xc(170,"#ffffff"),b.Qb(),b.xc(171,"."),b.Qb(),b.Rb(172,"li"),b.xc(173,"Avoid specifying units for zero values, e.g., "),b.Rb(174,"code"),b.xc(175,"margin: 0;"),b.Qb(),b.xc(176," instead of "),b.Rb(177,"code"),b.xc(178,"margin: 0px;"),b.Qb(),b.xc(179,"."),b.Qb(),b.Qb(),b.Qb(),b.Rb(180,"div",8),b.Rb(181,"pre"),b.xc(182,"        "),b.Rb(183,"code",11),b.xc(184),b.Qb(),b.xc(185,"\n      "),b.Qb(),b.Qb(),b.Qb(),b.Rb(186,"div",5),b.Rb(187,"div",7),b.Rb(188,"h3"),b.xc(189,"Declaration order"),b.Qb(),b.Rb(190,"p"),b.xc(191,"Related property declarations should be grouped together following the order:"),b.Qb(),b.Rb(192,"ol"),b.Rb(193,"li"),b.xc(194,"Positioning"),b.Qb(),b.Rb(195,"li"),b.xc(196,"Box model"),b.Qb(),b.Rb(197,"li"),b.xc(198,"Typographic"),b.Qb(),b.Rb(199,"li"),b.xc(200,"Visual"),b.Qb(),b.Rb(201,"li"),b.xc(202,"Misc"),b.Qb(),b.Qb(),b.Rb(203,"p"),b.xc(204,"Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement."),b.Qb(),b.Rb(205,"p"),b.xc(206,"Everything else takes place "),b.Rb(207,"em"),b.xc(208,"inside"),b.Qb(),b.xc(209," the component or without impacting the previous two sections, and thus they come last."),b.Qb(),b.Rb(210,"p"),b.xc(211,"For a complete list of properties and their order, please see the "),b.Rb(212,"a",12),b.xc(213,"Bootstrap property order for Stylelint"),b.Qb(),b.xc(214,"."),b.Qb(),b.Qb(),b.Rb(215,"div",8),b.Rb(216,"pre"),b.xc(217,"        "),b.Rb(218,"code",11),b.xc(219),b.Qb(),b.xc(220,"\n      "),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&e&&(b.Ab(28),b.gc("innerHTML",n.html.syntax,b.rc),b.Ab(54),b.gc("innerHTML",n.html.order,b.rc),b.Ab(12),b.gc("innerHTML",n.html.reducing,b.rc),b.Ab(90),b.Ac("\n/* Bad CSS */\n.selector, .selector-secondary, .selector[type=text] ","{","\n  padding:15px;\n  margin:0px 0px 15px;\n  background-color:rgba(0, 0, 0, 0.5);\n  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF\n","}",'\n\n/* Good CSS */\n.selector,\n.selector-secondary,\n.selector[type="text"] ',"{","\n  padding: 15px;\n  margin-bottom: 15px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;\n","}","\n        "),b.Ab(35),b.zc("\n.declaration-order ","{",'\n  /* Positioning */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n\n  /* Box-model */\n  display: block;\n  float: right;\n  width: 100px;\n  height: 100px;\n\n  /* Typography */\n  font: normal 13px "Helvetica Neue", sans-serif;\n  line-height: 1.5;\n  color: #333;\n  text-align: center;\n\n  /* Visual */\n  background-color: #f5f5f5;\n  border: 1px solid #e5e5e5;\n  border-radius: 3px;\n\n  /* Misc */\n  opacity: 1;\n',"}","\n        "))},styles:["ol[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:.2rem .4rem;color:#d44950;background-color:#f7f7f9}"]}),o),data:{showSidebar:!1}}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:i}),i.\u0275inj=b.Ib({factory:function(e){return new(e||i)},imports:[[r.g.forChild(l)],r.g]}),i),p=((c=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:c}),c.\u0275inj=b.Ib({factory:function(e){return new(e||c)},imports:[[a.b,d]]}),c)}}]);