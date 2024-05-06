import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"возместить-ущерб\">ВОЗМЕСТИТЬ УЩЕРБ</h2>\n<p><strong>Прежде всего нам нужно постараться быть абсолютно уверенными, что мы не\nоткладываем это дело только потому, что нам страшно.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 99<br>\nTwelve Steps and Twelve Traditions, p. 87</em></strong></p>\n<p>Мужество и отсутствие страха — это дары моей трезвости. Они придают мне сил\nпросить о помощи — с чувством собственного достоинства и со смирением, и в\nдальнейшем возмещать ущерб. Возмещение ущерба требует определенной честности,\nкоторой мне, как я чувствую, недостает. И все же, с Божьей помощью и опираясь\nна мудрость других людей, я способен заглянуть внутрь себя и обре-сти силу для\nконкретного действия. Люди могут принять или не принять мои извинения, но\nпосле того как они мною принесены, я могу чувствовать себя свободно и быть\nуверенным, что отвечаю за сегодняшний день.</p>";

				const frontmatter = {"title":"11 сентября","description":"Размышления АА на сегодня - 11 сентября","id":"255","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_11-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВОЗМЕСТИТЬ УЩЕРБ\n\n**Прежде всего нам нужно постараться быть абсолютно уверенными, что мы не\nоткладываем это дело только потому, что нам страшно.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 99  \nTwelve Steps and Twelve Traditions, p. 87_**\n\nМужество и отсутствие страха — это дары моей трезвости. Они придают мне сил\nпросить о помощи — с чувством собственного достоинства и со смирением, и в\nдальнейшем возмещать ущерб. Возмещение ущерба требует определенной честности,\nкоторой мне, как я чувствую, недостает. И все же, с Божьей помощью и опираясь\nна мудрость других людей, я способен заглянуть внутрь себя и обре-сти силу для\nконкретного действия. Люди могут принять или не принять мои извинения, но\nпосле того как они мною принесены, я могу чувствовать себя свободно и быть\nуверенным, что отвечаю за сегодняшний день.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"возместить-ущерб","text":"ВОЗМЕСТИТЬ УЩЕРБ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
