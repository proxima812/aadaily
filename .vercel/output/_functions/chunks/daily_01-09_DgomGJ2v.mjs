import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"готовность-к-росту\">ГОТОВНОСТЬ К РОСТУ</h2>\n<p><strong>Чтобы мы могли получать больше даров, должно продолжаться наше\nпробуждение.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 8</em></strong></p>\n<p>Трезвость заполняет болезненную «пу-стоту в моей душе», которую создал\nалкоголизм. Иногда я чувствую себя так хорошо, что начинаю думать, что работа\nокончена. Однако радость — это не только отсутствие страданий, это дар\nпродолжающегося духовного пробуждения. Радость приходит с непрерывным и\nактивным изучением и применением в повседневной жизни принципов выздоровления,\nа также с передачей своего опыта другим. Моя Высшая Сила предоставляет мне\nмножество возможностей для более глубокого духовного пробуждения. Мне же нужно\nлишь быть готовым к этому росту. Сегодня я готов духовно расти.</p>";

				const frontmatter = {"title":"1 сентября","description":"Размышления АА на сегодня - 1 сентября","id":"245","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_01-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ГОТОВНОСТЬ К РОСТУ\n\n**Чтобы мы могли получать больше даров, должно продолжаться наше\nпробуждение.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 8_**\n\nТрезвость заполняет болезненную «пу-стоту в моей душе», которую создал\nалкоголизм. Иногда я чувствую себя так хорошо, что начинаю думать, что работа\nокончена. Однако радость — это не только отсутствие страданий, это дар\nпродолжающегося духовного пробуждения. Радость приходит с непрерывным и\nактивным изучением и применением в повседневной жизни принципов выздоровления,\nа также с передачей своего опыта другим. Моя Высшая Сила предоставляет мне\nмножество возможностей для более глубокого духовного пробуждения. Мне же нужно\nлишь быть готовым к этому росту. Сегодня я готов духовно расти.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"готовность-к-росту","text":"ГОТОВНОСТЬ К РОСТУ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
