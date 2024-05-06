import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"абсолютно-одинаковые\">АБСОЛЮТНО ОДИНАКОВЫЕ</h2>\n<p><strong>Частые контакты с новичками и друг с другом стали яркими событиями нашей\nжизни.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 86<br>\nAlcoholics Anonymous, p. 89</em></strong></p>\n<p>На собрание пришел пьяный, прервал выступавшего, встал и снял рубашку, шумя и\nшатаясь взял кофе, потребовал слова и, в конце концов, обозвав секретаря\nгруппы нецензурным словом, ушел. Я был рад его появлению, так как снова увидел\nсебя прежнего. Но еще я увидел, кто я сейчас и каким бы мог быть. Вовсе не\nобязательно напиться, чтобы стать исключительным и оказаться в центре\nвнимания. Я часто чувствовал себя оскорб-ленным и отвечал оскорблением, если\nко мне относились как к обычному человеку. Чем больше тот пьяный старался\nказаться особенным, тем острее я осознавал, что мы с ним абсолютно одинаковы.</p>";

				const frontmatter = {"title":"29 сентября","description":"Размышления АА на сегодня - 29 сентября","id":"273","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_29-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## АБСОЛЮТНО ОДИНАКОВЫЕ\n\n**Частые контакты с новичками и друг с другом стали яркими событиями нашей\nжизни.**\n\n**_Анонимные Алкоголики, с. 86  \nAlcoholics Anonymous, p. 89_**\n\nНа собрание пришел пьяный, прервал выступавшего, встал и снял рубашку, шумя и\nшатаясь взял кофе, потребовал слова и, в конце концов, обозвав секретаря\nгруппы нецензурным словом, ушел. Я был рад его появлению, так как снова увидел\nсебя прежнего. Но еще я увидел, кто я сейчас и каким бы мог быть. Вовсе не\nобязательно напиться, чтобы стать исключительным и оказаться в центре\nвнимания. Я часто чувствовал себя оскорб-ленным и отвечал оскорблением, если\nко мне относились как к обычному человеку. Чем больше тот пьяный старался\nказаться особенным, тем острее я осознавал, что мы с ним абсолютно одинаковы.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"абсолютно-одинаковые","text":"АБСОЛЮТНО ОДИНАКОВЫЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
