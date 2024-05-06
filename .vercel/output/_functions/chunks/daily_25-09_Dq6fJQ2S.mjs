import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"первым-делом--главное\">ПЕРВЫМ ДЕЛОМ — ГЛАВНОЕ</h2>\n<p><strong>Многие из нас на своей шкуре познали одну простую истину — есть у нас работа\nили нет ее, есть жена или нет, мы продолжаем пить, пока в первую очередь\nполагаемся на людей, а не на Бога.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 95<br>\nAlcoholics Anonymous, p. 98</em></strong></p>\n<p>До прихода в АА я всегда находил оправ-дания для выпивки: «Она сказала…», «Он\nсказал…», «Меня вчера уволили…», «Сегодня я так хорошо выполнил работу…». Если\nя снова начну пить, ни одна из сфер моей жизни ни в чем не будет\nблагополучной. В трезвости жизнь с каждым днем становится все лучше. Я всегда\nдолжен помнить о том, чтоб не пить, доверять Богу и оставаться активным членом\nАА. Ставлю ли я сегодня что-либо выше трезвости, Бога и АА?</p>";

				const frontmatter = {"title":"25 сентября","description":"Размышления АА на сегодня - 25 сентября","id":"269","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_25-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПЕРВЫМ ДЕЛОМ — ГЛАВНОЕ\n\n**Многие из нас на своей шкуре познали одну простую истину — есть у нас работа\nили нет ее, есть жена или нет, мы продолжаем пить, пока в первую очередь\nполагаемся на людей, а не на Бога.**\n\n**_Анонимные Алкоголики, с. 95  \nAlcoholics Anonymous, p. 98_**\n\nДо прихода в АА я всегда находил оправ-дания для выпивки: «Она сказала…», «Он\nсказал…», «Меня вчера уволили…», «Сегодня я так хорошо выполнил работу…». Если\nя снова начну пить, ни одна из сфер моей жизни ни в чем не будет\nблагополучной. В трезвости жизнь с каждым днем становится все лучше. Я всегда\nдолжен помнить о том, чтоб не пить, доверять Богу и оставаться активным членом\nАА. Ставлю ли я сегодня что-либо выше трезвости, Бога и АА?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"первым-делом--главное","text":"ПЕРВЫМ ДЕЛОМ — ГЛАВНОЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
