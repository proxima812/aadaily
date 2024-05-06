import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"план-на-день\">ПЛАН НА ДЕНЬ</h2>\n<p><strong>Проснувшись утром, надо подумать о предстоящих 24 часах жизни. Рассмотрим\nнаши планы. В самом начале дня мы просим Бога направить наши помыслы в верное\nрусло, уберечь нас от жалости к себе, бесчестных поступков, корыстолюбия.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 83-84<br>\nAlcoholics Anonymous, p. 86</em></strong></p>\n<p>Каждый день я прошу Бога зажечь во мне огонь Его любви, чтобы эта любовь, горя\nво мне ярко и чисто, освещала мои мысли и позволяла мне лучше исполнять Его\nволю. Весь день, когда внешние обстоятельства отрицательно влияют на мое\nнастроение, я прошу Бога помочь мне осознать, что я могу начать день заново;\nесли надо, то и сто раз.</p>";

				const frontmatter = {"title":"12 марта","description":"Размышления АА на сегодня - 12 марта","id":"72","datePublished":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/mart/daily_12-03.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПЛАН НА ДЕНЬ\n\n**Проснувшись утром, надо подумать о предстоящих 24 часах жизни. Рассмотрим\nнаши планы. В самом начале дня мы просим Бога направить наши помыслы в верное\nрусло, уберечь нас от жалости к себе, бесчестных поступков, корыстолюбия.**\n\n**_Анонимные Алкоголики, с. 83-84  \nAlcoholics Anonymous, p. 86_**\n\nКаждый день я прошу Бога зажечь во мне огонь Его любви, чтобы эта любовь, горя\nво мне ярко и чисто, освещала мои мысли и позволяла мне лучше исполнять Его\nволю. Весь день, когда внешние обстоятельства отрицательно влияют на мое\nнастроение, я прошу Бога помочь мне осознать, что я могу начать день заново;\nесли надо, то и сто раз.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"план-на-день","text":"ПЛАН НА ДЕНЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
