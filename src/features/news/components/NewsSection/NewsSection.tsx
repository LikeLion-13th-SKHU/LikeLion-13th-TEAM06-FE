// src/features/news/components/NewsSection/NewsSection.tsx

import NewsColumnList from '@/features/news/components/NewsList/NewsColumnList/NewsColumnList';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import { newsMock } from '@/features/news/mocks/newsMock';
import styles from './NewsSection.module.scss';
import { Link } from 'react-router-dom';

interface NewsSectionProps {
  title: string;
  link: string;
  items?: typeof newsMock;
  layout?: 'row' | 'column';
}

export default function NewsSection({
  title,
  link,
  items = newsMock,
  layout = 'row',
}: NewsSectionProps) {
  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSectionHeader}>
        <h2 className={styles.newsSectionTitle}>{title}</h2>
        <Link to={link} className={styles.newsSectionMore}>
          더보기
        </Link>
      </div>
      {layout === 'row' ? <NewsRowList items={items} /> : <NewsColumnList items={items} />}
    </section>
  );
}
