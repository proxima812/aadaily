import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"мы-прощаем\">МЫ ПРОЩАЕМ…</h2>\n<p><strong>Часто, работая именно по этому Шагу с наставником или духовником, мы впервые\nпочувствовали, что способны простить других, как бы сильно они нас ни обидели.\nНаша моральная оценка собственного «я» убедила нас в том, что желательно\nвсегда прощать. Но только всерьез взявшись за работу по Пятому Шагу, мы\nвнутренне осознаём возможность того, что мы будем прощены, и собственную\nспособность даровать прощение.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 67<br>\nTwelve Steps and Twelve Traditions, p. 58</em></strong></p>\n<p>Какое же это великое чувство — прощение! Сколько нового открывается в моей\nэмоциональной, психологической и духовной природе! А всего-то и требуется для\nэтого — готовности простить, все остальное сделает Бог.</p>";

				const frontmatter = {"title":"16 мая","description":"Размышления АА на сегодня - 16 мая","id":"137","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_16-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## МЫ ПРОЩАЕМ…\n\n**Часто, работая именно по этому Шагу с наставником или духовником, мы впервые\nпочувствовали, что способны простить других, как бы сильно они нас ни обидели.\nНаша моральная оценка собственного «я» убедила нас в том, что желательно\nвсегда прощать. Но только всерьез взявшись за работу по Пятому Шагу, мы\nвнутренне осознаём возможность того, что мы будем прощены, и собственную\nспособность даровать прощение.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 67  \nTwelve Steps and Twelve Traditions, p. 58_**\n\nКакое же это великое чувство — прощение! Сколько нового открывается в моей\nэмоциональной, психологической и духовной природе! А всего-то и требуется для\nэтого — готовности простить, все остальное сделает Бог.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"мы-прощаем","text":"МЫ ПРОЩАЕМ…"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
