import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"жизненно-важная-поддержка\">ЖИЗНЕННО ВАЖНАЯ ПОДДЕРЖКА</h2>\n<p><strong>Те из нас, кто стал регулярно молиться, не могут обходиться без молитвы как\nбез воздуха, пищи или солнечного света. И по одним и тем же причинам. Когда мы\nотказываем себе в воздухе, свете или пище, наше тело страдает. Точно также,\nкогда мы отказываемся от медитации и молитвы, мы лишаем наше сознание, наши\nчувства и нашу интуицию жизненно необходимой для них поддержки.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 110-111<br>\nTwelve Steps and Twelve Traditions, p. 97</em></strong></p>\n<p>Одиннадцатый Шаг не должен подавлять меня. Осознанный контакт с Богом может\nбыть таким же простым и столь же глубоким, как и осознанный контакт с другим\nчеловеком. Я могу улыбаться. Я могу слушать. Я могу прощать. Каждая встреча с\nдругим человеком — это возможность для молитвы, для признания присутствия во\nмне Бога.</p>\n<p>Сегодня я могу немного приблизить себя к Высшей Силе. Чем больше я ищу красоту\nБожьего творения в других людях, тем увереннее я в Его присутствии во мне.</p>";

				const frontmatter = {"title":"15 ноября","description":"Размышления АА на сегодня - 15 ноября","id":"320","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_15-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЖИЗНЕННО ВАЖНАЯ ПОДДЕРЖКА\n\n**Те из нас, кто стал регулярно молиться, не могут обходиться без молитвы как\nбез воздуха, пищи или солнечного света. И по одним и тем же причинам. Когда мы\nотказываем себе в воздухе, свете или пище, наше тело страдает. Точно также,\nкогда мы отказываемся от медитации и молитвы, мы лишаем наше сознание, наши\nчувства и нашу интуицию жизненно необходимой для них поддержки.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 110-111  \nTwelve Steps and Twelve Traditions, p. 97_**\n\nОдиннадцатый Шаг не должен подавлять меня. Осознанный контакт с Богом может\nбыть таким же простым и столь же глубоким, как и осознанный контакт с другим\nчеловеком. Я могу улыбаться. Я могу слушать. Я могу прощать. Каждая встреча с\nдругим человеком — это возможность для молитвы, для признания присутствия во\nмне Бога.\n\nСегодня я могу немного приблизить себя к Высшей Силе. Чем больше я ищу красоту\nБожьего творения в других людях, тем увереннее я в Его присутствии во мне.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"жизненно-важная-поддержка","text":"ЖИЗНЕННО ВАЖНАЯ ПОДДЕРЖКА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
