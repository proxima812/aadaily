import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"принять-самого-себя\">ПРИНЯТЬ САМОГО СЕБЯ</h2>\n<p><strong>Мы знаем, что Бог с любовью присматривает за нами. Мы знаем, что, когда мы\nобратимся к Нему, все будет у нас хорошо и сегодня, и всегда…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 119<br>\nTwelve Steps and Twelve Traditions, p. 105</em></strong></p>\n<p>Я молюсь за подаренную мне готовность помнить, что я дитя Бога, святая душа в\nчеловеческой оболочке и что моя основная и насущная задача — принимать,\nпознавать, любить и воспитывать самого себя. Принимая себя, я принимаю Божью\nволю. Познавая и любя себя, я познаю и люблю Бога. Воспитывая себя, я действую\nпо воле Божьей.</p>\n<p>Я молюсь о желании избавиться от высокомерной самокритики, чтобы славить Бога,\nпри этом смиренно принимая себя и заботясь о себе.</p>";

				const frontmatter = {"title":"11 ноября","description":"Размышления АА на сегодня - 11 ноября","id":"316","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_11-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРИНЯТЬ САМОГО СЕБЯ\n\n**Мы знаем, что Бог с любовью присматривает за нами. Мы знаем, что, когда мы\nобратимся к Нему, все будет у нас хорошо и сегодня, и всегда…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 119  \nTwelve Steps and Twelve Traditions, p. 105_**\n\nЯ молюсь за подаренную мне готовность помнить, что я дитя Бога, святая душа в\nчеловеческой оболочке и что моя основная и насущная задача — принимать,\nпознавать, любить и воспитывать самого себя. Принимая себя, я принимаю Божью\nволю. Познавая и любя себя, я познаю и люблю Бога. Воспитывая себя, я действую\nпо воле Божьей.\n\nЯ молюсь о желании избавиться от высокомерной самокритики, чтобы славить Бога,\nпри этом смиренно принимая себя и заботясь о себе.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"принять-самого-себя","text":"ПРИНЯТЬ САМОГО СЕБЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
