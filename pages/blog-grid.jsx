import Layout from "@/src/layout/Layout";
const BlogGrid = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Grid"}>
      <div>
        <section className="gap no-top">
          <div className="container">
            <div className="splash-area blog">
              <h2>
                Latest News
                <br />
                From Our Blog
              </h2>
              <h5 className="blog-sub">Blog Grid</h5>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/blog-pic.png"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>May 23 , 2023</span>
                  </a>

                  <h4>Innovative Strategies for Digital Success in 2024</h4>
                  <span>by Jane Luna | Digital Strategy Expert</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/blog-pic1.png"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>June 25, 2020</span>
                  </a>

                  <h4>
                    Enhancing Business Connectivity with Advanced Server
                    Solutions
                  </h4>
                  <span>by Alex Martinez | Lead Server Architect</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/blog-pic3.png"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>December 10, 2023</span>
                  </a>
                  <h4>Streamlining Operations with Cloud Integration</h4>
                  <span>by Michael Smith | Cloud Solutions Expert</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/blog-pic4.png"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>July 10, 2024</span>
                  </a>
                  <h4>Securing Your Network: Best Practices for 2024</h4>
                  <span>by Lisa Johnson | Cybersecurity Specialist</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/blog-pic5.png"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>September 15, 2023</span>
                  </a>
                  <h4>Maximizing Uptime with Redundant Server Architecture</h4>
                  <span>by David Chen | Systems Engineer</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="latest-blog-post hoverstyle">
                  <figure>
                    <img
                      alt="img"
                      className="w-100"
                      src="assets/img/blog-pic6.png"
                    />
                  </figure>
                  <a href="#">
                    <i className="fa-regular fa-clock" />
                    <span>August 10, 2022</span>
                  </a>
                  <h4>Future-Proofing Your IT Infrastructure</h4>
                  <span>by Emily Davis | IT Infrastructure Manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="next-previous-page">
          <div className="container">
            <div className="next-previous">
              <div className="prev">
                <a href="#">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    style={{ enableBackground: "new 0 0 476.213 476.213" }}
                    xmlSpace="preserve"
                  >
                    <polygon
                      points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                    />
                  </svg>
                  <a href="/portfolio-single-v2"> prev page</a>
                </a>
              </div>
              <div className="next">
                <a href="/blog-single-post">
                  next page
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    style={{ enableBackground: "new 0 0 476.213 476.213" }}
                    xmlSpace="preserve"
                  >
                    <polygon
                      points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogGrid;
