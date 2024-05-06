import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"облегчая-бремя\">ОБЛЕГЧАЯ БРЕМЯ</h2>\n<p><strong>…Показать другим, как к нам в схожей ситуации пришла помощь. Именно это\nделает нашу жизнь более ценной… наше темное прошлое — …ключ к жизни и счастью\nдругих.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 120<br>\nAlcoholics Anonymous, p. 124</em></strong></p>\n<p>За время трезвости я избавилась от многих страданий — из-за обмана партнера,\nпредательства лучшего друга, крушения маминых надежд относительно меня. В\nкаждом случае кто-нибудь в Программе рассказывал мне о подобной же проблеме, и\nэто позволяло и мне поделиться тем, что произошло со мной. А когда моя история\nбыла мною поведана, мы оба расставались с легким сердцем.</p>";

				const frontmatter = {"title":"28 августа","description":"Размышления АА на сегодня - 28 августа","id":"241","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_28-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОБЛЕГЧАЯ БРЕМЯ\n\n**…Показать другим, как к нам в схожей ситуации пришла помощь. Именно это\nделает нашу жизнь более ценной… наше темное прошлое — …ключ к жизни и счастью\nдругих.**\n\n**_Анонимные Алкоголики, с. 120  \nAlcoholics Anonymous, p. 124_**\n\nЗа время трезвости я избавилась от многих страданий — из-за обмана партнера,\nпредательства лучшего друга, крушения маминых надежд относительно меня. В\nкаждом случае кто-нибудь в Программе рассказывал мне о подобной же проблеме, и\nэто позволяло и мне поделиться тем, что произошло со мной. А когда моя история\nбыла мною поведана, мы оба расставались с легким сердцем.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"облегчая-бремя","text":"ОБЛЕГЧАЯ БРЕМЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
