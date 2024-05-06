import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"заглядывая-в-себя\">ЗАГЛЯДЫВАЯ В СЕБЯ</h2>\n<p><strong>Глубоко и бесстрашно оценили себя и свою жизнь с нравственной точки зрения</strong></p>\n<p>. ** <em>Двенадцать шагов и двенадцать традиций, с. 49<br>\nTwelve Steps and Twelve Traditions, p. 42</em>**</p>\n<p>Четвертый Шаг — это решительное и болезненное усилие для того, чтобы осознать\nсвои прежние и нынешние наклонности. Я хочу точно понять, как, когда и где\nдеформировались мои естественные желания. Я хочу прямо взглянуть на\nпричиненные мне и другим в результате этого несчастья. Выяснив, что собой\nпредставляют мои эмоциональные расстройства, я могу начать исправлять\nситуацию. Без готовности и настойчивых усилий в этом направлении у меня не\nможет быть полноценной трезвости или порядка в душе.</p>\n<p>Для избавления от противоречивых чувств мне нужно иметь ясное и точное\nпредставление о себе. Такое осознание не приходит в одночасье, и представления\nо себе все время меняются. Только честно оценив реальность, каждый из нас\nможет духовно расти и углубляться в осознании себя. Если я не бегу от проблем,\nа встречаю их напрямую и смело берусь за их решение, их становится все меньше\nи меньше.</p>";

				const frontmatter = {"title":"1 апреля","description":"Размышления АА на сегодня - 1 апреля","id":"92","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_01-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЗАГЛЯДЫВАЯ В СЕБЯ\n\n**Глубоко и бесстрашно оценили себя и свою жизнь с нравственной точки зрения**\n\n. ** _Двенадцать шагов и двенадцать традиций, с. 49  \nTwelve Steps and Twelve Traditions, p. 42_**\n\nЧетвертый Шаг — это решительное и болезненное усилие для того, чтобы осознать\nсвои прежние и нынешние наклонности. Я хочу точно понять, как, когда и где\nдеформировались мои естественные желания. Я хочу прямо взглянуть на\nпричиненные мне и другим в результате этого несчастья. Выяснив, что собой\nпредставляют мои эмоциональные расстройства, я могу начать исправлять\nситуацию. Без готовности и настойчивых усилий в этом направлении у меня не\nможет быть полноценной трезвости или порядка в душе.\n\nДля избавления от противоречивых чувств мне нужно иметь ясное и точное\nпредставление о себе. Такое осознание не приходит в одночасье, и представления\nо себе все время меняются. Только честно оценив реальность, каждый из нас\nможет духовно расти и углубляться в осознании себя. Если я не бегу от проблем,\nа встречаю их напрямую и смело берусь за их решение, их становится все меньше\nи меньше.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"заглядывая-в-себя","text":"ЗАГЛЯДЫВАЯ В СЕБЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };