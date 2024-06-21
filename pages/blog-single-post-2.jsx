import Layout from "@/src/layout/Layout";
import { blogswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";




const BlogSinglePost2 = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Single Post"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2>Latest News From Our Blog</h2>
            <a href="#">Blog Slider</a>
          </div>
          <Swiper {...blogswiper} className="swiper-container blogswiper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blogSinglepr9.png"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      <a href="#">
                        <i className="fa-regular fa-clock" />
                        <span>August 10, 2023</span>
                      </a>

                      <h2>
                        Enhancing Digital Strategies with Cutting-Edge
                        Technologies
                      </h2>
                      <p>
                        In today's fast-paced digital world, staying ahead
                        requires innovative solutions and strategic thinking.
                        Our advanced methodologies ensure your business thrives,
                        with seamless integration and optimized performance.
                        Experience the difference with our expertly crafted
                        digital strategies.
                      </p>
                      <span>by Jane Luna | Digital Strategy Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blogSinglepr9p.png"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      <a href="#">
                        <i className="fa-regular fa-clock" />
                        <span>July 10, 2024</span>
                      </a>

                      <h2>
                        Transforming Business Operations with Innovative
                        Solutions
                      </h2>
                      <p>
                        Achieve unparalleled efficiency and growth with our
                        state-of-the-art solutions designed to streamline your
                        business operations. Our strategies are tailored to meet
                        the unique needs of your organization, ensuring optimal
                        performance and success in the digital landscape.
                      </p>
                      <span>by Josepht trhill | Digital Strategy Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/blogSinglepr9pl.png"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                      <a href="#">
                        <i className="fa-regular fa-clock" />
                        <span>August 10, 2023</span>
                      </a>

                      <h2>
                        Revolutionizing Digital Experiences with Strategic
                        Innovation
                      </h2>
                      <p>
                        Stay ahead in the digital era with our cutting-edge
                        solutions designed to enhance user experiences and drive
                        business growth. Our approach integrates the latest
                        technologies and strategic insights to deliver
                        exceptional results, ensuring your digital presence is
                        both impactful and effective.
                      </p>
                      <span>by Alex Carter | Digital Strategy Expert</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-next">
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
            </div>
            <div className="swiper-button-prev">
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
            </div>
          </Swiper>
        </div>
      </section>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>January 10, 2019</span>
                </a>
                <h4>Innovative Strategies for Modern Businesses</h4>
                <span>by Emily Thompson | Digital Strategy Expert</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr2.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 15, 2020</span>
                </a>

                <h4>Enhancing Connectivity with Advanced Server Integration</h4>
                <span>by Michael Rivera | Digital Strategy Expert</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr3.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>October 20, 2022</span>
                </a>

                <h4>Seamless Integration for Superior Performance</h4>
                <span>by Sarah Mitchell | Technology Consultant</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr4.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>

                <h4>Optimize Your Workflow with Advanced Automation</h4>
                <span>by David Parker | Innovation Specialist</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr5.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>July 5, 2023</span>
                </a>

                <h4>Elevate Your Brand with Strategic Design</h4>
                <span>by Olivia Harris | Creative Director</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr6.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>

                <h4>Boosting Efficiency with Cutting-Edge Technology</h4>
                <span>by Mark Robinson | Digital Strategy Specialist</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-blog-post hoverstyle">
                <figure>
                  <img
                    alt="img"
                    className="w-100"
                    src="assets/img/blogSinglepr7.png"
                  />
                </figure>
                <a href="#">
                  <i className="fa-regular fa-clock" />
                  <span>August 10, 2023</span>
                </a>

                <h4>
                  Empowering Businesses through Strategic Digital Transformation
                </h4>
                <span>by Emma Davis | Digital Strategy Consultant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogSinglePost2;
