(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "maui-sustainable-solutions.myshopify.com",
      storefrontAccessToken: "72d62a14e468c3c994edba0f47d398f1"
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: [1960997617750],
        node: document.getElementById("product-component-652e2edcb1a"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "modal",
            variantId: "all",
            width: "240px",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              options: false,
              price: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            text: {
              button: "VIEW PRODUCT"
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  //   "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                },
                "@media (max-width: 601px)": {
                  "font-size": "10px"
                }
              },
              compareAt: {
                "font-size": "12px"
              }
            }
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                }
              },
              footer: {
                "background-color": "#ffffff"
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  //   "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                },
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                }
              }
            }
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();

(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "maui-sustainable-solutions.myshopify.com",
      storefrontAccessToken: "72d62a14e468c3c994edba0f47d398f1"
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: [1960990539862],
        node: document.getElementById("product-component-fff77e859fa"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "modal",
            variantId: "all",
            width: "240px",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              options: false,
              price: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            text: {
              button: "VIEW PRODUCT"
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  //   "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                },
                "@media (max-width: 601px)": {
                  "font-size": "10px"
                }
              },
              compareAt: {
                "font-size": "12px"
              }
            }
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                }
              },
              footer: {
                "background-color": "#ffffff"
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  //   "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                },
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                }
              }
            }
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();

(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "maui-sustainable-solutions.myshopify.com",
      storefrontAccessToken: "72d62a14e468c3c994edba0f47d398f1"
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: [1958813171798],
        node: document.getElementById("product-component-318c8a91217"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            buttonDestination: "modal",
            variantId: "all",
            width: "240px",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              options: false,
              price: false,
              description: false,
              buttonWithQuantity: false,
              quantity: false
            },
            text: {
              button: "VIEW PRODUCT"
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  //   "max-width": "100%",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                },
                "@media (max-width: 601px)": {
                  "font-size": "10px"
                }
              },
              compareAt: {
                "font-size": "12px"
              }
            }
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                }
              },
              footer: {
                "background-color": "#ffffff"
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  //   "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              button: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                },
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#31b0d5",
                ":hover": {
                  "background-color": "#117787"
                },
                ":focus": {
                  "background-color": "#117787"
                }
              }
            }
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();