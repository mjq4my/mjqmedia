import Footer from '../footer/Footer'
import "./blog.css";
import YouTubeEmbed from '../embeds/YouTubeEmbed';
import InstagramEmbed from '../embeds/InstagramEmbed';

const Blog = () => {
  return (
    <>
      <main className="container blog-page">
        <h2>Welcome to my blog!</h2>
        <p>Here are some of my recent posts</p>

        <div className="embed post-embed">
          <div className="post-content">
            <h3>Antarctica 2022</h3>
          </div>
          <YouTubeEmbed videoId="Y5ssq8rWnIo" title="Antarctica" noWrapper />
        </div>

        <div className="embed post-embed">
          <div className="post-content">
            <h3>Alps Trek 2024</h3>
          </div>
          <YouTubeEmbed videoId="qqEChJiNqSo" title="Alps" noWrapper />
        </div>

        <div className="embed post-embed">
          <div className="post-content">
            <h3>Gerry Connolly Cross County Trail</h3>
          </div>
          <YouTubeEmbed videoId="V6Y-KrJPZTs" title="CCT" noWrapper />
        </div>

        <div className="embed post-embed">
          <div className="post-content">
            <h3>Colorado River Rafting 2021</h3>
          </div>
          <YouTubeEmbed videoId="Hh0whtUeuHo" title="AZRR" noWrapper />
        </div>

        {/* <section className="post">
          <h3>Example: Instagram Post</h3>
          <InstagramEmbed postUrl="https://www.instagram.com/p/Cs-example/" />
        </section> */}
      </main>

      <Footer />
    </>
  );
};

export default Blog;
