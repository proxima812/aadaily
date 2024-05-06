import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"действовать\">ДЕЙСТВОВАТЬ</h2>\n<p><strong>Не слишком ли это звучит многообещающе? Нет. Все это произошло со многими из\nнас, с одними раньше, с другими позже. Все это становится явью, если приложить\nусилия.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 81<br>\nAlcoholics Anonymous, p. 84</em></strong></p>\n<p>Кроме свободы от пьянства, АА дало мне еще одну замечательную вещь —\nспособность совершать «правильные действия». Сказано, что Обещания АА\n<em>обязательно</em> сбудутся, если я буду <em>работать</em> над ними. Рассуждения о них,\nспоры и восхваления ни к чему не приведут. Я останусь несчастным лицемерным\n«сухим» пьяницей. Действуя по Двенадцати Шагам, я обрету жизнь, о которой\nникогда не мог даже мечтать.</p>";

				const frontmatter = {"title":"15 февраля","description":"Размышления АА на сегодня - 15 февраля","id":"46","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_15-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ДЕЙСТВОВАТЬ\n\n**Не слишком ли это звучит многообещающе? Нет. Все это произошло со многими из\nнас, с одними раньше, с другими позже. Все это становится явью, если приложить\nусилия.**\n\n**_Анонимные Алкоголики, с. 81  \nAlcoholics Anonymous, p. 84_**\n\nКроме свободы от пьянства, АА дало мне еще одну замечательную вещь —\nспособность совершать «правильные действия». Сказано, что Обещания АА\n_обязательно_ сбудутся, если я буду _работать_ над ними. Рассуждения о них,\nспоры и восхваления ни к чему не приведут. Я останусь несчастным лицемерным\n«сухим» пьяницей. Действуя по Двенадцати Шагам, я обрету жизнь, о которой\nникогда не мог даже мечтать.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"действовать","text":"ДЕЙСТВОВАТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
