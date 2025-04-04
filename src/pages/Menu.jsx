import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Menu.css";

const menuItems = {
  hotCoffee: [
    { id: 1, name: "Cappuccino", price: 1.99, image: "https://www.haushaltstipps.net/wp-content/uploads/cappucino-selber-machen.jpg" },
    { id: 2, name: "Café Latte", price: 2.99, image: "https://th.bing.com/th/id/R.c828d47fe30f0338f8fd968c8ab698bc?rik=AfNYktuWpOeEmQ&riu=http%3a%2f%2frecipesnobs.com%2fwp-content%2fuploads%2f2016%2f05%2fcoffee-latte.jpg&ehk=bonPS7DNc3Rii4dZNjWcTYdeWkXNaNwFFAYjVyy9NM8%3d&risl=&pid=ImgRaw&r=0" },
    { id: 3, name: "Velvet Coffee", price: 4.99, image: "https://th.bing.com/th/id/OIP.hThdjCwVBr4YgjNvmxLBDQAAAA?w=259&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 4, name: "Espresso", price: 1.99, image: "https://th.bing.com/th/id/OIP.mV4SR31SCw6jGnBXBPMKSwHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 5, name: "Vanilla Latte", price: 3.99, image: "https://2.bp.blogspot.com/-5JEun1J-DxQ/VNk7t253Y7I/AAAAAAAAElI/zhDMzXxoRE0/s1600/honeyvanilla2.jpg" },
    { id: 6, name: "Filter Coffee", price: 4.99, image: "https://th.bing.com/th/id/R.0583dd98c49c53b322808f81c7d0a891?rik=vK7FaYfGgh5EoQ&riu=http%3a%2f%2fberubusiness.com%2fcdn%2fshop%2farticles%2fresized_img.jpg%3fv%3d1693298132&ehk=PNNDdAIF7KN56MHtJ77wQ5Ngx5UEsZJO5P6ooOKRXZo%3d&risl=&pid=ImgRaw&r=0" },
  ],
  coldCoffee: [
    { id: 7, name: "Vegan Shake", price: 1.99, image: "https://www.veganblueberry.com/wp-content/uploads/2020/05/vegan-chocolate-milkshake-14-1-1024x1536.jpg" },
    { id: 8, name: "Cold Mocha", price: 4.99, image: "https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-picture-683x1024.jpg" },
    { id: 9, name: "Iced Tea", price: 1.99, image: "https://bellyfull.net/wp-content/uploads/2022/07/Long-Island-Iced-Tea-blog-1.jpg" },
    { id: 10, name: "Belgian Chocolate", price: 1.99, image: "https://i.ytimg.com/vi/TzAOGymJjyk/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCt3b15rUbQRPFQMIpBpsPXEFFkig" },
    { id: 11, name: "Crunchy Frappé", price: 3.99, image: "http://www.funfoodfrolic.com/wp-content/uploads/2013/05/IMG_3984.jpg" },
    { id: 12, name: "Chocolate Shake", price: 4.99, image: "https://buildyourbite.com/wp-content/uploads/2017/08/double-chocolate-sweet-potato-milkshake.jpg" },
  ],
  snacks: [
    { id: 13, name: "Sandwich", price: 1.99, image: "https://www.rd.com/wp-content/uploads/2016/03/aol-food-perfect-sandwich-ft.jpg" },
    { id: 14, name: "Veg Burger", price: 2.99, image: "https://www.blondelish.com/wp-content/uploads/2019/02/Easy-Veggie-Burger-Recipe-Vegan-Healthy-9.jpg" },
    { id: 15, name: "Garlic Bread", price: 4.99, image: "https://thumbs.dreamstime.com/b/toasted-bread-herbs-garlic-closeup-paper-horizontal-rustic-style-53793769.jpg" },
    { id: 16, name: "Bread Sticks", price: 1.99, image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2024-01/Breadsticks-V2-Horizontal.jpg?itok=-UJ0CSgQ" },
    { id: 17, name: "Veg Pizza", price: 1.99, image: "https://product-assets.faasos.io/production/product/image_1676360743721_Thin_Crust_Pizza_Ultimate_Veg_Pizza_1_.jpg" },
    { id: 18, name: "Pita Bread", price: 4.99, image: "https://thumbs.dreamstime.com/b/homemade-greek-pita-bread-close-up-table-horizontal-wooden-287590133.jpg" },
  ],
  dessert: [
    { id: 19, name: "Cheesecake", price: 1.99, image: "https://thumbs.dreamstime.com/b/classical-cheesecake-fresh-berries-wooden-board-selective-focus-horizontal-composition-113707502.jpg" },
    { id: 20, name: "Berry Cheesecake", price: 2.99, image: "https://thumbs.dreamstime.com/z/blueberry-cheesecake-berry-sauce-horizontal-top-view-plate-closeup-42646364.jpg" },
    { id: 21, name: "Brownie", price: 4.99, image: "https://st.focusedcollection.com/8860618/i/650/focused_119159660-stock-photo-iced-chocolate-brownie.jpg" },
    { id: 22, name: "Choco Fudge", price: 1.99, image: "https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2016/12/Hot-Chocolate-Fudge-Horizontal-2.jpg" },
    { id: 23, name: "Vanilla Scoop", price: 3.99, image: "https://static.vecteezy.com/system/resources/previews/041/713/984/non_2x/ai-generated-vanilla-ice-cream-scoop-with-textured-swirls-on-transparent-background-stock-png.png" },
    { id: 24, name: "Strawberry Cake", price: 3.99, image: "https://thumbs.dreamstime.com/b/cake-strawberry-horizontal-chocolate-decorated-fresh-juicy-strawberries-31523794.jpg" },
  ],
};

const Menu = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const addToCart = (item) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
  };

  return (
    <div className="menu-container">
      <h2>Menu Collections</h2>

      {/* Hot Coffee Section */}
      <div className="menu-section">
        <h3>Hot Coffee</h3>
        <div className="menu-items">
          {menuItems.hotCoffee.map((item) => (
            <div key={item.id} className="menu-item">
              {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cold Coffee Section */}
      <div className="menu-section">
        <h3>Cold Coffee</h3>
        <div className="menu-items">
          {menuItems.coldCoffee.map((item) => (
            <div key={item.id} className="menu-item">
              {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Snacks Section */}
      <div className="menu-section">
        <h3>Snacks</h3>
        <div className="menu-items">
          {menuItems.snacks.map((item) => (
            <div key={item.id} className="menu-item">
              {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Dessert Section */}
      <div className="menu-section">
        <h3>Dessert</h3>
        <div className="menu-items">
          {menuItems.dessert.map((item) => (
            <div key={item.id} className="menu-item">
              {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Go to Cart Button */}
      <div className="go-to-cart">
        <button onClick={() => navigate('/cart')} className="go-to-cart-btn">
          Go to Cart
        </button>
      </div>
    </div>
  );
};

Menu.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Menu;