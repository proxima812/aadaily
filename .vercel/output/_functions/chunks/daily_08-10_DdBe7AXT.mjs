import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"ежедневный-самоанализ\">ЕЖЕДНЕВНЫЙ САМОАНАЛИЗ</h2>\n<p><strong>…и когда допускали ошибки, сразу признавали это.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 57<br>\nAlcoholics Anonymous, p. 59</em></strong></p>\n<p>Я приближался к новой трезвой жизни с непривычным для себя энтузиазмом.\nПоявлялись новые друзья, восстанавливались разрушенные ранее отношения. Жизнь\nстановилась интересной, и мне даже стала нравиться моя работа. Я осмелел\nнастолько, что написал до-кладную об отсутствии должного внимания к некоторым\nнашим клиентам. Вскоре коллега сказал, что мой шеф расстроен: я подал до-\nкладную вышестоящему начальству «через его голову», и это поставило его в\nзатруднительное положение. Я понял, что проблема вы-звана моей докладной, и\nсчел себя в ответе за трудности шефа. Обсуждая со мной эту ситуацию, коллега\nстарался убедить меня, что извиняться нет необходимости. Но я вскоре пришел к\nвыводу, что должен что-то сделать, независимо от того, чем все закончится. Я\nпришел к начальнику и взял на себя ответственность за его затруднения. Он,\nнадо сказать, сильно удивился. Неожиданным был результат нашей встречи — мы\nсумели договориться о более откровенном и эффективном сотрудничестве в\nбудущем.</p>";

				const frontmatter = {"title":"8 октября","description":"Размышления АА на сегодня - 8 октября","id":"282","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_08-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЕЖЕДНЕВНЫЙ САМОАНАЛИЗ\n\n**…и когда допускали ошибки, сразу признавали это.**\n\n**_Анонимные Алкоголики, с. 57  \nAlcoholics Anonymous, p. 59_**\n\nЯ приближался к новой трезвой жизни с непривычным для себя энтузиазмом.\nПоявлялись новые друзья, восстанавливались разрушенные ранее отношения. Жизнь\nстановилась интересной, и мне даже стала нравиться моя работа. Я осмелел\nнастолько, что написал до-кладную об отсутствии должного внимания к некоторым\nнашим клиентам. Вскоре коллега сказал, что мой шеф расстроен: я подал до-\nкладную вышестоящему начальству «через его голову», и это поставило его в\nзатруднительное положение. Я понял, что проблема вы-звана моей докладной, и\nсчел себя в ответе за трудности шефа. Обсуждая со мной эту ситуацию, коллега\nстарался убедить меня, что извиняться нет необходимости. Но я вскоре пришел к\nвыводу, что должен что-то сделать, независимо от того, чем все закончится. Я\nпришел к начальнику и взял на себя ответственность за его затруднения. Он,\nнадо сказать, сильно удивился. Неожиданным был результат нашей встречи — мы\nсумели договориться о более откровенном и эффективном сотрудничестве в\nбудущем.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ежедневный-самоанализ","text":"ЕЖЕДНЕВНЫЙ САМОАНАЛИЗ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
