import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"лакмусовая-бумажка\">«ЛАКМУСОВАЯ БУМАЖКА»</h2>\n<p><strong>Работая по первым Девяти Шагам, мы готовимся к приключениям новой жизни. Но\nесли мы подошли к Десятому Шагу — это значит, что мы готовы жить принципами АА\nизо дня в день, образно говоря, в хорошую и в плохую погоду. Наступает момент\nсерьезного испытания: способны ли мы вести трезвый образ жизни, сохранять\nэмоциональное равновесие и видеть цель при любых условиях?</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 100<br>\nTwelve Steps and Twelve Traditions, p. 88</em></strong></p>\n<p>Я знаю, что Обещания сбываются в моей жизни, но хочу умножать и\nсовершенствовать их, ежедневно применяя Десятый Шаг. Этот Шаг научил меня,\nчто, если мне неспокойно, значит, не все в порядке со мной. Возможно, другой\nчеловек тоже неправ, но я могу разобраться только со своими чувствами. Когда я\nобижен или расстроен, то должен искать причину в себе, а затем признать свои\nошибки и исправить их. Это нелегко, но пока я знаю, что духовно расту, я могу\nоценивать свои усилия как хорошо выполненную работу. Я понял, что страдание —\nдруг мне: оно дает знать, что мои эмоции не в порядке, точно так же, как\nфизическая боль говорит о нарушениях в организме. Когда я предпринимаю\nсоответствующие действия по Двенадцати Шагам, боль постепенно уходит.</p>";

				const frontmatter = {"title":"2 октября","description":"Размышления АА на сегодня - 2 октября","id":"276","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_02-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## «ЛАКМУСОВАЯ БУМАЖКА»\n\n**Работая по первым Девяти Шагам, мы готовимся к приключениям новой жизни. Но\nесли мы подошли к Десятому Шагу — это значит, что мы готовы жить принципами АА\nизо дня в день, образно говоря, в хорошую и в плохую погоду. Наступает момент\nсерьезного испытания: способны ли мы вести трезвый образ жизни, сохранять\nэмоциональное равновесие и видеть цель при любых условиях?**\n\n**_Двенадцать шагов и двенадцать традиций, с. 100  \nTwelve Steps and Twelve Traditions, p. 88_**\n\nЯ знаю, что Обещания сбываются в моей жизни, но хочу умножать и\nсовершенствовать их, ежедневно применяя Десятый Шаг. Этот Шаг научил меня,\nчто, если мне неспокойно, значит, не все в порядке со мной. Возможно, другой\nчеловек тоже неправ, но я могу разобраться только со своими чувствами. Когда я\nобижен или расстроен, то должен искать причину в себе, а затем признать свои\nошибки и исправить их. Это нелегко, но пока я знаю, что духовно расту, я могу\nоценивать свои усилия как хорошо выполненную работу. Я понял, что страдание —\nдруг мне: оно дает знать, что мои эмоции не в порядке, точно так же, как\nфизическая боль говорит о нарушениях в организме. Когда я предпринимаю\nсоответствующие действия по Двенадцати Шагам, боль постепенно уходит.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"лакмусовая-бумажка","text":"«ЛАКМУСОВАЯ БУМАЖКА»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
