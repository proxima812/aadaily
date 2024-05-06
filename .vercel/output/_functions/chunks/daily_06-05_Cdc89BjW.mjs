import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"ничего-не-держать-в-себе\">НИЧЕГО НЕ ДЕРЖАТЬ В СЕБЕ</h2>\n<p><strong>Лучшим доказательством правильности выбора является ваша готовность\nоткрыться и доверие к человеку, с которым вы собираетесь поделиться\nнравственной оценкой своего прошлого.</strong></p>\n<p><strong>…Если вы не будете ничего утаивать, чувство облегчения будет возрастать с\nкаждой минутой. Все копившиеся годами отвратительные эмоции прорвут\nсдерживавшую их преграду и чудесным образом исчезнут сразу после того, как вы\nрасскажете о них другому человеку. Как только боль утихнет, ее место займет\nисцеляющий покой.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 71-72<br>\nTwelve Steps and Twelve Traditions, pp. 61-62</em></strong></p>\n<p>Крохотное зернышко долго сдерживаемых чувств начало прорастать, когда я\nпосетил первые несколько собраний АА. И тогда же предметом изучения стало для\nменя познание самого себя. Новое понимание себя изменило мою реакцию на\nжизненные ситуации. Я понял, что имею право выбора, и внутренний диктат\nпривычек постепенно ослабел.</p>\n<p>Думаю, что если я ищу Бога, то могу наладить для себя более приемлемый образ\nжизни. Поэтому я ежедневно прошу Его помочь мне жить трезвой жизнью.</p>";

				const frontmatter = {"title":"6 мая","description":"Размышления АА на сегодня - 6 мая","id":"127","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_06-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## НИЧЕГО НЕ ДЕРЖАТЬ В СЕБЕ\n\n**Лучшим доказательством правильности выбора является ваша готовность\nоткрыться и доверие к человеку, с которым вы собираетесь поделиться\nнравственной оценкой своего прошлого.**\n\n**…Если вы не будете ничего утаивать, чувство облегчения будет возрастать с\nкаждой минутой. Все копившиеся годами отвратительные эмоции прорвут\nсдерживавшую их преграду и чудесным образом исчезнут сразу после того, как вы\nрасскажете о них другому человеку. Как только боль утихнет, ее место займет\nисцеляющий покой.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 71-72  \nTwelve Steps and Twelve Traditions, pp. 61-62_**\n\nКрохотное зернышко долго сдерживаемых чувств начало прорастать, когда я\nпосетил первые несколько собраний АА. И тогда же предметом изучения стало для\nменя познание самого себя. Новое понимание себя изменило мою реакцию на\nжизненные ситуации. Я понял, что имею право выбора, и внутренний диктат\nпривычек постепенно ослабел.\n\nДумаю, что если я ищу Бога, то могу наладить для себя более приемлемый образ\nжизни. Поэтому я ежедневно прошу Его помочь мне жить трезвой жизнью.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ничего-не-держать-в-себе","text":"НИЧЕГО НЕ ДЕРЖАТЬ В СЕБЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
