import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"абсолютно-честен\">АБСОЛЮТНО ЧЕСТЕН</h2>\n<p><strong>Если мы хотим жить долго или быть счастливыми в этом мире, нам следует быть\nсовершенно честными перед кем-нибудь.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 72<br>\nAlcoholics Anonymous, pp. 73-74</em></strong></p>\n<p>Честностью, равно как и другими достоинствами, надо делиться. Честность\nпришла, когда я поделился «…историей всей моей жизни с другим человеком…»,\nпричем сделал это для того, чтобы найти свое место в Содружестве. Позднее,\nчтобы помочь новичкам найти свое место рядом с нами, я делился с ними\nсобственным опытом. Такой обмен помогает мне быть честным во всех моих делах и\nверить, что Божий замысел в отношении меня претворяется в жизнь через мою\nискреннюю открытость, желание и готовность.</p>";

				const frontmatter = {"title":"4 мая","description":"Размышления АА на сегодня - 4 мая","id":"125","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_04-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## АБСОЛЮТНО ЧЕСТЕН\n\n**Если мы хотим жить долго или быть счастливыми в этом мире, нам следует быть\nсовершенно честными перед кем-нибудь.**\n\n**_Анонимные Алкоголики, с. 72  \nAlcoholics Anonymous, pp. 73-74_**\n\nЧестностью, равно как и другими достоинствами, надо делиться. Честность\nпришла, когда я поделился «…историей всей моей жизни с другим человеком…»,\nпричем сделал это для того, чтобы найти свое место в Содружестве. Позднее,\nчтобы помочь новичкам найти свое место рядом с нами, я делился с ними\nсобственным опытом. Такой обмен помогает мне быть честным во всех моих делах и\nверить, что Божий замысел в отношении меня претворяется в жизнь через мою\nискреннюю открытость, желание и готовность.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"абсолютно-честен","text":"АБСОЛЮТНО ЧЕСТЕН"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
