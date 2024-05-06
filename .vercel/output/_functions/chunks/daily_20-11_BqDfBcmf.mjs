import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"твоя-воля-а-не-моя\">«ТВОЯ ВОЛЯ, А НЕ МОЯ»</h2>\n<p><strong>Даже прося о чем-то вполне конкретном, хорошо добавить: «Если на то есть\nволя Твоя».</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 116<br>\nTwelve Steps and Twelve Traditions, p. 102</em></strong></p>\n<p>Я просто прошу, чтобы в течение дня Бог давал мне возможность лучше понимать\nЕго волю на этот день и благословил меня на ее исполнение. По ходу дня,\nсталкиваясь с ситуациями, которые мне надо разрешить, я могу остановиться и\nснова просто сказать: «Да будет воля Твоя, а не моя».</p>\n<p>Я должен постоянно помнить, что в любой обстановке я отвечаю за прилагаемые\nусилия, результат же я оставляю Богу. Я могу «отпустить и положиться на Бога»,\nсмиренно повторяя: «Да исполнится воля Твоя, а не моя». Терпение и\nнастойчивость в поиске Его воли избавят меня от боли эгоистических ожиданий.</p>";

				const frontmatter = {"title":"20 ноября","description":"Размышления АА на сегодня - 20 ноября","id":"325","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_20-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## «ТВОЯ ВОЛЯ, А НЕ МОЯ»\n\n**Даже прося о чем-то вполне конкретном, хорошо добавить: «Если на то есть\nволя Твоя».**\n\n**_Двенадцать шагов и двенадцать традиций, с. 116  \nTwelve Steps and Twelve Traditions, p. 102_**\n\nЯ просто прошу, чтобы в течение дня Бог давал мне возможность лучше понимать\nЕго волю на этот день и благословил меня на ее исполнение. По ходу дня,\nсталкиваясь с ситуациями, которые мне надо разрешить, я могу остановиться и\nснова просто сказать: «Да будет воля Твоя, а не моя».\n\nЯ должен постоянно помнить, что в любой обстановке я отвечаю за прилагаемые\nусилия, результат же я оставляю Богу. Я могу «отпустить и положиться на Бога»,\nсмиренно повторяя: «Да исполнится воля Твоя, а не моя». Терпение и\nнастойчивость в поиске Его воли избавят меня от боли эгоистических ожиданий.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"твоя-воля-а-не-моя","text":"«ТВОЯ ВОЛЯ, А НЕ МОЯ»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
