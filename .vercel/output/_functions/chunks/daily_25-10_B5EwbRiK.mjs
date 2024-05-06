import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"биение-сердца-аа\">БИЕНИЕ СЕРДЦА АА</h2>\n<p><strong>Без единства сердце АА перестанет биться…</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 125</em></strong></p>\n<p>Без единства я не смог бы выздоравливать в АА день за днем. Придерживаясь\nпринципа единства в своей группе, с другими членами АА и на всех уровнях этого\nвеликого Содружества, я четко осознаю, что являюсь частью чуда, сотворенного\nБожьей волей. Способность Билла У. и доктора Боба сообща работать и делиться с\nдругими членами АА говорит мне, что отдавать означает сохранять. Единство —\nэто целостность, а Содружество — для всех нас.</p>";

				const frontmatter = {"title":"25 октября","description":"Размышления АА на сегодня - 25 октября","id":"299","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_25-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## БИЕНИЕ СЕРДЦА АА\n\n**Без единства сердце АА перестанет биться…**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 125_**\n\nБез единства я не смог бы выздоравливать в АА день за днем. Придерживаясь\nпринципа единства в своей группе, с другими членами АА и на всех уровнях этого\nвеликого Содружества, я четко осознаю, что являюсь частью чуда, сотворенного\nБожьей волей. Способность Билла У. и доктора Боба сообща работать и делиться с\nдругими членами АА говорит мне, что отдавать означает сохранять. Единство —\nэто целостность, а Содружество — для всех нас.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"биение-сердца-аа","text":"БИЕНИЕ СЕРДЦА АА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
