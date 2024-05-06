import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"награда-за-бескорыстие\">НАГРАДА ЗА БЕСКОРЫСТИЕ</h2>\n<p><strong>Это дары такого рода, когда ничто не требуется взамен. Никто не ждет никакой\nоплаты от страдающего алкоголизмом и даже никакой любви. Оказывается, что\nподобная самоотдача содержит в себе вознаграждение независимо от того, оказали\nмы реальную помощь другому алкоголику или нет.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 124<br>\nTwelve Steps and Twelve Traditions, p. 109</em></strong></p>\n<p>Из опыта работы по Двенадцатому Шагу я понял, какие награды мы получаем,\nотдавая что-либо бескорыстно. Поначалу я ожидал, что все другие люди тоже\nбудут выздоравливать, но вскоре увидел, что этого не происходит. Когда я\nсмирился и признал, что не всегда работа по Двенадцатому Шагу -успешна, я стал\nоткрытым для наград за то, что отдаю бескорыстно.</p>";

				const frontmatter = {"title":"20 декабря","description":"Размышления АА на сегодня - 20 декабря","id":"355","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_20-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## НАГРАДА ЗА БЕСКОРЫСТИЕ\n\n**Это дары такого рода, когда ничто не требуется взамен. Никто не ждет никакой\nоплаты от страдающего алкоголизмом и даже никакой любви. Оказывается, что\nподобная самоотдача содержит в себе вознаграждение независимо от того, оказали\nмы реальную помощь другому алкоголику или нет.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 124  \nTwelve Steps and Twelve Traditions, p. 109_**\n\nИз опыта работы по Двенадцатому Шагу я понял, какие награды мы получаем,\nотдавая что-либо бескорыстно. Поначалу я ожидал, что все другие люди тоже\nбудут выздоравливать, но вскоре увидел, что этого не происходит. Когда я\nсмирился и признал, что не всегда работа по Двенадцатому Шагу -успешна, я стал\nоткрытым для наград за то, что отдаю бескорыстно.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"награда-за-бескорыстие","text":"НАГРАДА ЗА БЕСКОРЫСТИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
