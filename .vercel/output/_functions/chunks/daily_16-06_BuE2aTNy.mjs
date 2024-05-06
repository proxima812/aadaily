import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"непредубежденность\">НЕПРЕДУБЕЖДЕННОСТЬ</h2>\n<p><strong>Мы обнаружили, что Бог не ставит чересчур жестких условий для тех, кто ищет\nЕго. Для нас царство Духа широко, просторно, всеобъемлюще и не является\nнедоступным или запретным для тех, кто искренне ищет. Мы верим, что оно\nоткрыто для всех.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 7</em></strong></p>\n<p>Непредвзятое отношение к Высшей Силе открывает духовные врата. В различных\nучениях и верованиях я часто нахожу общечеловеческую духовность. Я обретаю\nдуховность, разделяя свою жизнь с другими. Только так я присоединяюсь к\nчеловеческому сообществу и становлюсь ближе к Богу, как я Его понимаю.</p>";

				const frontmatter = {"title":"16 июня","description":"Размышления АА на сегодня - 16 июня","id":"168","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_16-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## НЕПРЕДУБЕЖДЕННОСТЬ\n\n**Мы обнаружили, что Бог не ставит чересчур жестких условий для тех, кто ищет\nЕго. Для нас царство Духа широко, просторно, всеобъемлюще и не является\nнедоступным или запретным для тех, кто искренне ищет. Мы верим, что оно\nоткрыто для всех.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 7_**\n\nНепредвзятое отношение к Высшей Силе открывает духовные врата. В различных\nучениях и верованиях я часто нахожу общечеловеческую духовность. Я обретаю\nдуховность, разделяя свою жизнь с другими. Только так я присоединяюсь к\nчеловеческому сообществу и становлюсь ближе к Богу, как я Его понимаю.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"непредубежденность","text":"НЕПРЕДУБЕЖДЕННОСТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
