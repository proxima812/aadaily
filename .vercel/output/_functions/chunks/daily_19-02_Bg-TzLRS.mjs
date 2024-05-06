import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"я-не-другой\">Я НЕ ДРУГОЙ</h2>\n<p><strong>Вначале понадобилось целых четыре года, прежде чем АА дало трезвость первой\nженщине-алкоголичке. Подобно многим алкоголикам с «мелким дном» женщины\nговорили, что они — другие. Всякий бродяга говорил, что он особенный… то же\nговорили художники и инженеры, богатые и бедные, верующие и неверующие,\nиндейцы и эскимосы, ветераны и заключенные… теперь же все они и тысячи других\nтрезво говорят о том, какие все мы, алкоголики, одинаковые, когда признаем,\nчто наша карта бита…</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 24</em></strong></p>\n<p>Я не должен считать себя в АА «особенным». При таком подходе я изолировал бы\nсебя от других и от соприкосновения с Высшей Силой. Если я чувствую себя в АА\nизолированным, то не люди виноваты в этом. Это делаю я сам своим мнением, что\nя какой-то «особенный». Сегодня я просто еще один алкоголик в мировом\nСодружестве АА.</p>";

				const frontmatter = {"title":"19 февраля","description":"Размышления АА на сегодня - 19 февраля","id":"50","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_19-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## Я НЕ ДРУГОЙ\n\n**Вначале понадобилось целых четыре года, прежде чем АА дало трезвость первой\nженщине-алкоголичке. Подобно многим алкоголикам с «мелким дном» женщины\nговорили, что они — другие. Всякий бродяга говорил, что он особенный… то же\nговорили художники и инженеры, богатые и бедные, верующие и неверующие,\nиндейцы и эскимосы, ветераны и заключенные… теперь же все они и тысячи других\nтрезво говорят о том, какие все мы, алкоголики, одинаковые, когда признаем,\nчто наша карта бита…**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 24_**\n\nЯ не должен считать себя в АА «особенным». При таком подходе я изолировал бы\nсебя от других и от соприкосновения с Высшей Силой. Если я чувствую себя в АА\nизолированным, то не люди виноваты в этом. Это делаю я сам своим мнением, что\nя какой-то «особенный». Сегодня я просто еще один алкоголик в мировом\nСодружестве АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"я-не-другой","text":"Я НЕ ДРУГОЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };