import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"понимание-болезни\">ПОНИМАНИЕ БОЛЕЗНИ</h2>\n<p><strong>Когда имеешь дело с алкоголиком, часто возникает раздражение, как это\nчеловек может быть столь слабым, глупым и безответственным. И даже когда\nузнаешь больше об этой болезни, то бывает, что это чувство только\nусиливается.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 135<br>\nAlcoholics Anonymous, p. 139</em></strong></p>\n<p>Настрадавшись от алкоголизма, я должен понимать эту болезнь. Но порой я\nчувствую раздражение и даже презрение к человеку, который не может добиться\nуспеха в АА. Когда у меня появляется такое чувство, это означает, что я\nневольно тешу свое ложное чувство собственного превосходства и мне следует\nвспомнить, что я <em>здесь</em> по милости Божьей.</p>";

				const frontmatter = {"title":"19 декабря","description":"Размышления АА на сегодня - 19 декабря","id":"354","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_19-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПОНИМАНИЕ БОЛЕЗНИ\n\n**Когда имеешь дело с алкоголиком, часто возникает раздражение, как это\nчеловек может быть столь слабым, глупым и безответственным. И даже когда\nузнаешь больше об этой болезни, то бывает, что это чувство только\nусиливается.**\n\n**_Анонимные Алкоголики, с. 135  \nAlcoholics Anonymous, p. 139_**\n\nНастрадавшись от алкоголизма, я должен понимать эту болезнь. Но порой я\nчувствую раздражение и даже презрение к человеку, который не может добиться\nуспеха в АА. Когда у меня появляется такое чувство, это означает, что я\nневольно тешу свое ложное чувство собственного превосходства и мне следует\nвспомнить, что я _здесь_ по милости Божьей.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"понимание-болезни","text":"ПОНИМАНИЕ БОЛЕЗНИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
