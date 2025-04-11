import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]); // State for search results

  // Handle input change and filter the results based on the search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Filter your search results here (example, you can replace with actual search logic)
    const filteredResults = query ? fakeSearch(query) : []; // replace fakeSearch with actual search logic
    setResults(filteredResults);
  };

  // Example search function - replace with your actual search logic
  const fakeSearch = (query) => {
    const data = [
      'Back to the Future (1985)',
      'Back to the Future Part II (1989)',
      'Back to the Future Part III (1990)',
    ];

    return data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <Layout title="Meilisearch Docs" description="Everything you need to use Meilisearch.">
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Build an intuitive search experience in a snap</h1>
          <input
            className={styles.searchInput}
            placeholder="🔍 Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className={styles.results}>
            {results.length > 0 ? (
              results.map((result, index) => <p key={index}>{result}</p>)
            ) : (
              searchQuery && <p>No results found for "{searchQuery}".</p> // Show only if there is a search query and no results
            )}
          </div>
        </div>
      </header>
    </Layout>
  );
}
