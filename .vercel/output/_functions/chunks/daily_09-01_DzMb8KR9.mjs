import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"промысел-божий\">ПРОМЫСЕЛ БОЖИЙ</h2>\n<p><strong>Держа в руках стакан, страшно признаваться, что разрушительное пристрастие к\nалкоголю настолько овладело нашим сознанием, что только вмешательство\nПровидения способно избавить нас от него.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 26<br>\nTwelve Steps and Twelve Traditions, p. 21</em></strong></p>\n<p>В моей жизни действие Промысла Божьего (проявления заботы Бога обо мне и Его\nволи в отношении меня) произошло тогда, когда я дошел со своим пьянством до\nполного развала: все, что когда-то имело значение в моей жизни, ушло. Я\nпозвонил в АА, и именно с этого момента моя жизнь в корне изменилась. Когда я\nразмышляю об этой, совершенно особенной, поворотной минуте, я понимаю, что Бог\nзаботился обо мне и до того, как я обрел способность признавать и принимать\nдуховные ценности. Стакан был отставлен в сторону единственно через это\nдействие Промысла Божьего, и я отправился в путь по дороге трезвости. Моя\nжизнь продолжает раскрываться попечением и заботой Бога обо мне и в указанном\nИм направлении. Первый Шаг, когда я признал, что бессилен перед алкоголем и\nчто моя жизнь стала неуправляемой, приобретает для меня еще большее значение —\nдень за днем — в спасающем наши жизни, дающем нам новую жизнь Содружестве\nАнонимных Алкоголиков.</p>";

				const frontmatter = {"title":"9 января","description":"Размышления АА на сегодня - 9 января","id":"9","datePublished":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/yanvar/daily_09-01.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРОМЫСЕЛ БОЖИЙ\n\n**Держа в руках стакан, страшно признаваться, что разрушительное пристрастие к\nалкоголю настолько овладело нашим сознанием, что только вмешательство\nПровидения способно избавить нас от него.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 26  \nTwelve Steps and Twelve Traditions, p. 21_**\n\nВ моей жизни действие Промысла Божьего (проявления заботы Бога обо мне и Его\nволи в отношении меня) произошло тогда, когда я дошел со своим пьянством до\nполного развала: все, что когда-то имело значение в моей жизни, ушло. Я\nпозвонил в АА, и именно с этого момента моя жизнь в корне изменилась. Когда я\nразмышляю об этой, совершенно особенной, поворотной минуте, я понимаю, что Бог\nзаботился обо мне и до того, как я обрел способность признавать и принимать\nдуховные ценности. Стакан был отставлен в сторону единственно через это\nдействие Промысла Божьего, и я отправился в путь по дороге трезвости. Моя\nжизнь продолжает раскрываться попечением и заботой Бога обо мне и в указанном\nИм направлении. Первый Шаг, когда я признал, что бессилен перед алкоголем и\nчто моя жизнь стала неуправляемой, приобретает для меня еще большее значение —\nдень за днем — в спасающем наши жизни, дающем нам новую жизнь Содружестве\nАнонимных Алкоголиков.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"промысел-божий","text":"ПРОМЫСЕЛ БОЖИЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };