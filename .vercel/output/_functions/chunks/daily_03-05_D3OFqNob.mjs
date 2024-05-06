import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"уборка-в-доме\">УБОРКА В ДОМЕ</h2>\n<p><strong>Почему-то нас в меньшей степени смущает перспектива быть наедине с Богом,\nчем предстать перед другим человеком. Пока мы не сядем с кем-нибудь и не\nобсудим то, что так долго таили в себе, наше желание «произвести чистку в\nдоме» существует в основном в теории.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 69<br>\nTwelve Steps and Twelve Traditions, p. 60</em></strong></p>\n<p>Мне было довольно просто рассказать Богу и самому себе о недостатках моего\nхарактера. Но сесть лицом к лицу с другим человеком и обсудить с ним\nсокровенные подробности моей жизни оказалось куда сложнее. Когда же это\nслучилось, я испытал такое же облегчение, как и тогда, когда впервые признал\nсебя алкоголиком. Я начал ценить духовное значение Программы и понимать, что\nэтот Шаг — всего лишь прелюдия к тому, что еще последует в других Шагах.</p>";

				const frontmatter = {"title":"3 мая","description":"Размышления АА на сегодня - 3 мая","id":"124","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_03-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## УБОРКА В ДОМЕ\n\n**Почему-то нас в меньшей степени смущает перспектива быть наедине с Богом,\nчем предстать перед другим человеком. Пока мы не сядем с кем-нибудь и не\nобсудим то, что так долго таили в себе, наше желание «произвести чистку в\nдоме» существует в основном в теории.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 69  \nTwelve Steps and Twelve Traditions, p. 60_**\n\nМне было довольно просто рассказать Богу и самому себе о недостатках моего\nхарактера. Но сесть лицом к лицу с другим человеком и обсудить с ним\nсокровенные подробности моей жизни оказалось куда сложнее. Когда же это\nслучилось, я испытал такое же облегчение, как и тогда, когда впервые признал\nсебя алкоголиком. Я начал ценить духовное значение Программы и понимать, что\nэтот Шаг — всего лишь прелюдия к тому, что еще последует в других Шагах.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"уборка-в-доме","text":"УБОРКА В ДОМЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
