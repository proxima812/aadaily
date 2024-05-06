import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"предлагаемые-шаги\">ПРЕДЛАГАЕМЫЕ ШАГИ</h2>\n<p><strong>Наш последний Шаг провозглашает, что, освоив Программу всех Шагов, мы\nобретаем нечто, называемое духовным пробуждением… Для члена АА подготовка к\nполучению этого дара означает выполнение Двенадцати Шагов.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 120-121<br>\nTwelve Steps and Twelve Traditions, pp. 106-107</em></strong></p>\n<p>Помню ответ наставника на мое замечание, что Шаги всего-навсего\n«предлагаются». Он ответил, что они «предлагаются» точно так же, как мне\n«предлагается», прыгая с парашютом из самолета, выдернуть кольцо вытяжного\nустройства, чтобы спасти свою жизнь. Он подчеркнул, что для моего спасения мне\n«предлагается» работать по Двенадцати Шагам. И я стараюсь постоянно помнить,\nчто существует целая Программа выздоровления, основанная на Двенадцати\n«предлагаемых» Шагах.</p>";

				const frontmatter = {"title":"1 декабря","description":"Размышления АА на сегодня - 1 декабря","id":"336","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_01-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРЕДЛАГАЕМЫЕ ШАГИ\n\n**Наш последний Шаг провозглашает, что, освоив Программу всех Шагов, мы\nобретаем нечто, называемое духовным пробуждением… Для члена АА подготовка к\nполучению этого дара означает выполнение Двенадцати Шагов.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 120-121  \nTwelve Steps and Twelve Traditions, pp. 106-107_**\n\nПомню ответ наставника на мое замечание, что Шаги всего-навсего\n«предлагаются». Он ответил, что они «предлагаются» точно так же, как мне\n«предлагается», прыгая с парашютом из самолета, выдернуть кольцо вытяжного\nустройства, чтобы спасти свою жизнь. Он подчеркнул, что для моего спасения мне\n«предлагается» работать по Двенадцати Шагам. И я стараюсь постоянно помнить,\nчто существует целая Программа выздоровления, основанная на Двенадцати\n«предлагаемых» Шагах.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"предлагаемые-шаги","text":"ПРЕДЛАГАЕМЫЕ ШАГИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
