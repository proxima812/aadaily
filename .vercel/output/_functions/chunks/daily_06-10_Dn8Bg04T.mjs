import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"лицом-к-лицу-с-самим-собой\">ЛИЦОМ К ЛИЦУ С САМИМ СОБОЙ</h2>\n<p><strong>…а Страх шепчет: «Ты не посмеешь взглянуть!»</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 58<br>\nTwelve Steps and Twelve Traditions, p. 49</em></strong></p>\n<p>Как часто в дни своего пьянства я уклонялся от решения проблем — они казались\nмне такими огромными! И неудивительно, что даже теперь, оставаясь трезвым, я\nведу себя точно так же, когда сталкиваюсь с громадной работой по тщательной и\nбесстрашной нравственной инвентаризации самого себя. Когда эта работа\nзавершена, я понимаю, что иллюзия была больше, чем сама реальность. Страх\nзаглянуть в себя, истинного, заставлял меня бездействовать — а стало быть,\nосновываясь на неких призрачных иллюзиях, я сам мешал своему духовному росту.\nИ так происходило до тех пор, пока я не ощутил готовность взять бумагу и\nкарандаш.</p>";

				const frontmatter = {"title":"6 октября","description":"Размышления АА на сегодня - 6 октября","id":"280","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_06-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЛИЦОМ К ЛИЦУ С САМИМ СОБОЙ\n\n**…а Страх шепчет: «Ты не посмеешь взглянуть!»**\n\n**_Двенадцать шагов и двенадцать традиций, с. 58  \nTwelve Steps and Twelve Traditions, p. 49_**\n\nКак часто в дни своего пьянства я уклонялся от решения проблем — они казались\nмне такими огромными! И неудивительно, что даже теперь, оставаясь трезвым, я\nведу себя точно так же, когда сталкиваюсь с громадной работой по тщательной и\nбесстрашной нравственной инвентаризации самого себя. Когда эта работа\nзавершена, я понимаю, что иллюзия была больше, чем сама реальность. Страх\nзаглянуть в себя, истинного, заставлял меня бездействовать — а стало быть,\nосновываясь на неких призрачных иллюзиях, я сам мешал своему духовному росту.\nИ так происходило до тех пор, пока я не ощутил готовность взять бумагу и\nкарандаш.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"лицом-к-лицу-с-самим-собой","text":"ЛИЦОМ К ЛИЦУ С САМИМ СОБОЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
