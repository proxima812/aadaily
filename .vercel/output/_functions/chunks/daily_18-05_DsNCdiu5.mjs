import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"свобода-быть-самим-собой\">СВОБОДА БЫТЬ САМИМ СОБОЙ</h2>\n<p><strong>Если эта фаза нашего развития болезненна для нас, мы будем удивлены, когда\nполовина пути окажется позади. Мы познáем новую свободу и новое счастье.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 81<br>\nAlcoholics Anonymous, p. 83</em></strong></p>\n<p>Моя первая и истинная свобода — это свобода не выпить сегодня. Если я искренне\nхочу ее обрести, то буду работать по Двенадцати Шагам. И счастье этой свободы\nпридет ко мне именно через Шаги, может скоро, а может, и не очень. За ней\nпоследуют другие свободы, познание их — это новая свобода. Сегодня мне дана\nновая свобода — свобода быть самим собой. У меня есть свобода быть лучше, чем\nкогда-либо раньше.</p>";

				const frontmatter = {"title":"18 мая","description":"Размышления АА на сегодня - 18 мая","id":"139","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_18-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## СВОБОДА БЫТЬ САМИМ СОБОЙ\n\n**Если эта фаза нашего развития болезненна для нас, мы будем удивлены, когда\nполовина пути окажется позади. Мы познáем новую свободу и новое счастье.**\n\n**_Анонимные Алкоголики, с. 81  \nAlcoholics Anonymous, p. 83_**\n\nМоя первая и истинная свобода — это свобода не выпить сегодня. Если я искренне\nхочу ее обрести, то буду работать по Двенадцати Шагам. И счастье этой свободы\nпридет ко мне именно через Шаги, может скоро, а может, и не очень. За ней\nпоследуют другие свободы, познание их — это новая свобода. Сегодня мне дана\nновая свобода — свобода быть самим собой. У меня есть свобода быть лучше, чем\nкогда-либо раньше.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"свобода-быть-самим-собой","text":"СВОБОДА БЫТЬ САМИМ СОБОЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
