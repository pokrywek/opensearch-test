import { RequestHandler } from 'express';

export const searchHandler = (baseUrl: string): RequestHandler => {
  return (req, res, _) => {
    const phrase = req.query.phrase;
    const description = `
      <?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0"
      xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">
        <channel>
          <title>Example Search: ${phrase}</title>
          <link>${baseUrl}</link>
          <description>Search results for "${phrase}" at Example.com</description>
          <opensearch:totalResults>100</opensearch:totalResults>
          <opensearch:startIndex>0</opensearch:startIndex>
          <opensearch:itemsPerPage>5</opensearch:itemsPerPage>
          <item>
            <title>Unit testing framework</title>
            <link>https://www.example.com/library/unittest.html</link>
            <description>The unit testing framework is ...</description>
            <pubDate>Sat, 07 Sep 2002 0:00:01 GMT</pubDate>
          </item>
          <item>
            <title>Cancer tests | Cancer Research</title>
            <link>https://www.example.com/library/cancertest.html</link>
            <description>A short overview about current cancer research ...</description>
            <pubDate>Sat, 07 Sep 2002 0:00:01 GMT</pubDate>
          </item>
        </channel>
      </rss>
    `.trim()
    res
      .status(200)
      .contentType('application/rss+xml')
      .send(description);
  }
};
