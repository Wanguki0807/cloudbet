import React from "react";

const BigCardGrid = () => {
  const cards = [
    {
      imgSrc: "https://cdn.prod.website-files.com/6659430ddebf16a696c96358/6711b168661d02328e558fdd_Cash%20Bundle.svg",
      title: "Cash back",
      description: "on every bet",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/6659430ddebf16a696c96358/67059e3863128052f142a700_Rocket%20Stars.svg",
      title: "Highest limits",
      description: "on major sports",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/6659430ddebf16a696c96358/6711b194d6a42b3fdb1d740c_Lambo.svg",
      title: "Exclusive",
      description: "VIP experiences",
    },
  ];

  return (
    <div className="grid grid-cols-3 u-grid-column-3">
      {cards.map((card, index) => (
        <div key={index} className="relative w-[80px] ">
          <div className="relative">
            <div className="g_visual_wrap u-cover-absolute">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="g_visual_img u-cover-absolute u-contain"
              />
            </div>
          </div>
          <div
            data-theme="dark"
            className="layout_card_card u-vflex-center-top u-height-100"
          >
            <div className="u-cover-absolute z-index--1">
              <div
                data-radius="rounded-3xl"
                data-background-color="background-50"
                className="g_card_wrap u-cover-absolute"
              ></div>
            </div>
            <div className="layout_card_inner u-vflex-stretch-between u-gap-6">
              <div className="g_content_wrap u-gap-12 u-vflex-center-center is-center-aligned">
                <div className="g_content_header u-gap-4 u-vflex-center-center is-center-aligned">
                  <div
                    className="u-max-width-100 u-text-h6"
                    style={{ maxWidth: "18ch" }}
                  >
                    <div data-heading-color="orange" className="heading-title w-richtext">
                      <p>
                        <strong>{card.title}</strong>
                      </p>
                    </div>
                  </div>
                  <div
                    className="u-text-main"
                    style={{ maxWidth: "42ch" }}
                  >
                    <div className="w-richtext">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BigCardGrid;
