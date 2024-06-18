const Footer = () => {
  return (
    <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo">
              <p>
                Our commitment to excellence ensures that your project is in
                good hands. We strive to deliver the best results for your
                business.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Additional links</h6>
              <ul>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="team.html">team</a>
                </li>
                <li>
                  <a href="blog-grid.html">News</a>
                </li>
                <li className="pb-0">
                  <a href="contacts.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Latest News</h6>
              <ul>
                <li>
                  <p>
                    Stay updated with our latest news and developments. Our team
                    is committed to delivering exceptional results, tailored to
                    your needs.
                  </p>
                  <span>dec 10, 2019 / 20 comments</span>
                </li>
                <li className="pt-4">
                  <p>
                    Our team is here to provide you with top-notch service.
                    Contact us today to get started on your project.
                  </p>
                  <span>dec 10, 2019 / 10 comments</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="latest-news">
              <h6>Subscribe</h6>
              <p>
                Stand out from the crowd with our innovative approach and
                cutting-edge solutions. Our team is dedicated to helping your
                business succeed in today's competitive market.
              </p>
              <form>
                <input
                  type="text"
                  name="email"
                  placeholder="your email address"
                />
                <button>go</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2021 Batistack - All Rights Reserved | Developed by Batistack</p>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-m" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
