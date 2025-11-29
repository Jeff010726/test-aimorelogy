import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Parser from 'rss-parser';

// Defaults can be overridden via FEED_URL and MAX_ITEMS env vars.
const FEED_URL = process.env.FEED_URL || 'https://hnrss.org/frontpage';
const MAX_ITEMS = Number(process.env.MAX_ITEMS || 10);

const parser = new Parser({
  customFields: {
    item: ['media:thumbnail']
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const normalizeText = (value = '') =>
  value.replace(/\s+/g, ' ').trim();

const pickImage = (item) => {
  if (item?.enclosure?.url) return item.enclosure.url;
  if (Array.isArray(item?.enclosure) && item.enclosure[0]?.url) return item.enclosure[0].url;
  if (item['media:thumbnail']) return item['media:thumbnail'];
  return '';
};

async function main() {
  const feed = await parser.parseURL(FEED_URL);
  const items = (feed.items || []).slice(0, MAX_ITEMS).map((item, idx) => {
    const linkHost = item.link ? new URL(item.link).hostname.replace(/^www\./, '') : '';
    const summary = normalizeText(item.contentSnippet || item.content || '');
    return {
      id: idx + 1,
      title: normalizeText(item.title || 'Untitled'),
      summary: summary.slice(0, 220),
      date: item.isoDate || item.pubDate || new Date().toISOString(),
      source: linkHost || feed.title || 'News',
      link: item.link || FEED_URL,
      image: pickImage(item)
    };
  });

  const output = {
    fetchedAt: new Date().toISOString(),
    feed: FEED_URL,
    items
  };

  const outputPath = path.resolve(__dirname, '../public/data/latest-headlines.json');
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify(output, null, 2), 'utf8');
  console.log(`Fetched ${items.length} items from ${FEED_URL}`);
}

main().catch((err) => {
  console.error('Failed to fetch headlines:', err);
  process.exit(1);
});
