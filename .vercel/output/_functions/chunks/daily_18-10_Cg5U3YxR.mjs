import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"непредвзятое-отношение\">НЕПРЕДВЗЯТОЕ ОТНОШЕНИЕ</h2>\n<p><strong>Подлинное смирение и непредвзятое отношение могут привести нас к вере…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, стр. 40<br>\nTwelve Steps and Twelve Traditions, p. 33</em></strong></p>\n<p>Мое алкогольное мышление убеждало меня, что я могу контролировать потребление\nспиртного. Но я не мог. Когда я пришел в АА, то понял, что через группу со\nмной говорит Бог. Мой разум был открыт достаточно, чтобы понять, что я\nнуждаюсь в Его помощи. Больше времени заняло истинное, чест-ное принятие АА,\nно с ним пришло и сми-рение. Сейчас я знаю, насколько был без-умен, и\nбесконечно благодарен за возвращенное мне здравомыслие и за возможность быть\nтрезвым алкоголиком. С АА, обновленный и трезвый, я сегодня гораздо лучше, чем\nбыл когда-либо без АА.</p>";

				const frontmatter = {"title":"18 октября","description":"Размышления АА на сегодня - 18 октября","id":"292","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_18-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## НЕПРЕДВЗЯТОЕ ОТНОШЕНИЕ\n\n**Подлинное смирение и непредвзятое отношение могут привести нас к вере…**\n\n**_Двенадцать шагов и двенадцать традиций, стр. 40  \nTwelve Steps and Twelve Traditions, p. 33_**\n\nМое алкогольное мышление убеждало меня, что я могу контролировать потребление\nспиртного. Но я не мог. Когда я пришел в АА, то понял, что через группу со\nмной говорит Бог. Мой разум был открыт достаточно, чтобы понять, что я\nнуждаюсь в Его помощи. Больше времени заняло истинное, чест-ное принятие АА,\nно с ним пришло и сми-рение. Сейчас я знаю, насколько был без-умен, и\nбесконечно благодарен за возвращенное мне здравомыслие и за возможность быть\nтрезвым алкоголиком. С АА, обновленный и трезвый, я сегодня гораздо лучше, чем\nбыл когда-либо без АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"непредвзятое-отношение","text":"НЕПРЕДВЗЯТОЕ ОТНОШЕНИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
