import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"обязательство\">ОБЯЗАТЕЛЬСТВО</h2>\n<p><strong>Понимание есть ключ к правильным принципам и отношениям, а правильные\nпоступки — к счастливой жизни…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 141<br>\nTwelve Steps and Twelve Traditions, p. 125</em></strong></p>\n<p>В моей Программе выздоровления наступил момент, когда третье положение Молитвы\nо Душевном покое — «…мудрость отличить одно от другого» — навечно\nзапечатлелось в моем сознании. С этого момента мне все время приходится\nраспознавать, соответствует ли каждое мое слово, действие или мысль Принципам\nПрограммы. Я больше не могу спрятаться за безумие своей болезни или за другие\nсамооправдания. Обрести светлую жизнь для себя и для тех, кого люблю, я могу\nна единственном пути, который возлагает на меня обязательства, требует от меня\nдисциплины и ответственности.</p>";

				const frontmatter = {"title":"16 февраля","description":"Размышления АА на сегодня - 16 февраля","id":"47","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_16-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОБЯЗАТЕЛЬСТВО\n\n**Понимание есть ключ к правильным принципам и отношениям, а правильные\nпоступки — к счастливой жизни…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 141  \nTwelve Steps and Twelve Traditions, p. 125_**\n\nВ моей Программе выздоровления наступил момент, когда третье положение Молитвы\nо Душевном покое — «…мудрость отличить одно от другого» — навечно\nзапечатлелось в моем сознании. С этого момента мне все время приходится\nраспознавать, соответствует ли каждое мое слово, действие или мысль Принципам\nПрограммы. Я больше не могу спрятаться за безумие своей болезни или за другие\nсамооправдания. Обрести светлую жизнь для себя и для тех, кого люблю, я могу\nна единственном пути, который возлагает на меня обязательства, требует от меня\nдисциплины и ответственности.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"обязательство","text":"ОБЯЗАТЕЛЬСТВО"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
