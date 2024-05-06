import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"недостатки-устраняются\">НЕДОСТАТКИ УСТРАНЯЮТСЯ</h2>\n<p><strong>Теперь в словах «сам по себе я ничто, все решает Отец Небесный» появился\nсмысл и обещание помощи.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 87<br>\nTwelve Steps and Twelve Traditions, p. 75</em></strong></p>\n<p>Приступая к выполнению Седьмого Шага, я должен помнить, что здесь не надо\nзаполнять никаких форм или бланков. В нем не сказано: «Смиренно просили Его\n(быстренько заполнив бланк) устранить наши недостатки. Годами я заполнял\nвоображаемые бланки с пунктами: «Помоги мне», «Дай мне мужество сделать то-то\nи то-то», «Дай мне силы…» и т. п. В Седьмом Шаге просто говорится, что Бог\nустранит мои недостатки. Единственное усилие, которое от меня требуется, — это\n«смиренно попросить». А это для меня означает просить с пониманием, что сам я\nничто, а все в моей жизни «решает Отец Небесный».</p>";

				const frontmatter = {"title":"20 июля","description":"Размышления АА на сегодня - 20 июля","id":"202","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_20-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## НЕДОСТАТКИ УСТРАНЯЮТСЯ\n\n**Теперь в словах «сам по себе я ничто, все решает Отец Небесный» появился\nсмысл и обещание помощи.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 87  \nTwelve Steps and Twelve Traditions, p. 75_**\n\nПриступая к выполнению Седьмого Шага, я должен помнить, что здесь не надо\nзаполнять никаких форм или бланков. В нем не сказано: «Смиренно просили Его\n(быстренько заполнив бланк) устранить наши недостатки. Годами я заполнял\nвоображаемые бланки с пунктами: «Помоги мне», «Дай мне мужество сделать то-то\nи то-то», «Дай мне силы…» и т. п. В Седьмом Шаге просто говорится, что Бог\nустранит мои недостатки. Единственное усилие, которое от меня требуется, — это\n«смиренно попросить». А это для меня означает просить с пониманием, что сам я\nничто, а все в моей жизни «решает Отец Небесный».\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"недостатки-устраняются","text":"НЕДОСТАТКИ УСТРАНЯЮТСЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
