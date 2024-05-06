import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"духовный-рост\">ДУХОВНЫЙ РОСТ</h2>\n<p><strong>Сущность любого духовного роста заключается в желании меняться к лучшему, а\nзатем в готовности взять на себя возникающую в связи с этим ответственность.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 115</em></strong></p>\n<p>Порой, когда у меня появляется желание сделать то, что мне следует делать\nвсегда, я жажду похвал и признания моих заслуг. Я не осознаю, что, чем больше\nя готов действовать по-иному, тем интереснее моя жизнь. Чем больше я готов\nпомогать людям, тем больше получаю наград. Именно так я понимаю все эти\nпринципы. Радость и польза для меня — в готовности действовать, а не в\nдостижении сиюминутных результатов. Быть немного добрее, немного медленнее\nподдаваться гневу, любить чуть больше — вот что делает мою жизнь лучше день за\nднем.</p>";

				const frontmatter = {"title":"10 апреля","description":"Размышления АА на сегодня - 10 апреля","id":"101","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_10-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## ДУХОВНЫЙ РОСТ\n\n**Сущность любого духовного роста заключается в желании меняться к лучшему, а\nзатем в готовности взять на себя возникающую в связи с этим ответственность.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 115_**\n\nПорой, когда у меня появляется желание сделать то, что мне следует делать\nвсегда, я жажду похвал и признания моих заслуг. Я не осознаю, что, чем больше\nя готов действовать по-иному, тем интереснее моя жизнь. Чем больше я готов\nпомогать людям, тем больше получаю наград. Именно так я понимаю все эти\nпринципы. Радость и польза для меня — в готовности действовать, а не в\nдостижении сиюминутных результатов. Быть немного добрее, немного медленнее\nподдаваться гневу, любить чуть больше — вот что делает мою жизнь лучше день за\nднем.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"духовный-рост","text":"ДУХОВНЫЙ РОСТ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
