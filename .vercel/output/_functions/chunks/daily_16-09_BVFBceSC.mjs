import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"мы-стоим--или-падаем--вместе\">МЫ СТОИМ — ИЛИ ПАДАЕМ — ВМЕСТЕ</h2>\n<p><strong>…ни одно другое сообщество мужчин и женщин не испытывало столь острой\nпотребности в постоянном единстве и стремления к действенности своих усилий.\nМы, алкоголики, видим, что мы должны работать совместно и держаться друг\nдруга, иначе большинство из нас в конце концов погибнет в одиночку.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 173<br>\nAlcoholics Anonymous, p. 563</em></strong></p>\n<p>Неспроста Двенадцать Шагов АА написаны в определенной последовательности, и то\nже самое можно сказать о Двенадцати Традициях. Задача Первого Шага и Первой\nТрадиции — привить мне смирения достаточно, чтобы получить шанс выжить. Вместе\nони составляют основу, на которой строятся все остальные Шаги и Традиции. Этот\nпроцесс умаления самого себя позволяет мне — как личности — духовно расти по\nШагам, и как полезному члену группы — по Традициям. Полное принятие Первой\nТрадиции позволяет мне отбросить в сторону личные амбиции, страхи и злобу,\nкоторые вредят общему благу. И таким образом оно способствует работе — вместе\nс другими алкоголиками — для нашего совместного выживания. Без Первой Традиции\nу нас мало шансов сохранить единство, столь необходимое для эффективной\nсовместной работы. Без нее я могу потерять также и остальные Традиции,\nСодружество и свою жизнь.</p>";

				const frontmatter = {"title":"16 сентября","description":"Размышления АА на сегодня - 16 сентября","id":"260","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_16-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## МЫ СТОИМ — ИЛИ ПАДАЕМ — ВМЕСТЕ\n\n**…ни одно другое сообщество мужчин и женщин не испытывало столь острой\nпотребности в постоянном единстве и стремления к действенности своих усилий.\nМы, алкоголики, видим, что мы должны работать совместно и держаться друг\nдруга, иначе большинство из нас в конце концов погибнет в одиночку.**\n\n**_Анонимные Алкоголики, с. 173  \nAlcoholics Anonymous, p. 563_**\n\nНеспроста Двенадцать Шагов АА написаны в определенной последовательности, и то\nже самое можно сказать о Двенадцати Традициях. Задача Первого Шага и Первой\nТрадиции — привить мне смирения достаточно, чтобы получить шанс выжить. Вместе\nони составляют основу, на которой строятся все остальные Шаги и Традиции. Этот\nпроцесс умаления самого себя позволяет мне — как личности — духовно расти по\nШагам, и как полезному члену группы — по Традициям. Полное принятие Первой\nТрадиции позволяет мне отбросить в сторону личные амбиции, страхи и злобу,\nкоторые вредят общему благу. И таким образом оно способствует работе — вместе\nс другими алкоголиками — для нашего совместного выживания. Без Первой Традиции\nу нас мало шансов сохранить единство, столь необходимое для эффективной\nсовместной работы. Без нее я могу потерять также и остальные Традиции,\nСодружество и свою жизнь.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"мы-стоим--или-падаем--вместе","text":"МЫ СТОИМ — ИЛИ ПАДАЕМ — ВМЕСТЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
