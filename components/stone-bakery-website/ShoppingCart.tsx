import React from "react";

function ShoppingCart() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="bg-neutral self-start rounded-3xl p-5 w-full h-full">
          <h1 className="text-6xl mb-10">Bakery Shop & Cart </h1>
          <p className="text-left">
            A functional shopping cart was developed for the bakery shop. The
            cart was developed using Vanilla JavaScript and CSS. The cart allows
            users to add items to the cart, remove items from the cart, and
            update the quantity of items in the cart. The cart also calculates
            the total price of the items in the cart. The cart was designed to
            be responsive and works on all screen sizes. An empty state for the
            cart was also designed to ensure that the user is made aware when
            the cart is empty and to encourage them to add items to the cart by
            navigating to the shop page.
          </p>
        </div>

        <video
          autoPlay
          loop
          muted
          width={1440}
          height={1080}
          className="rounded-3xl shadow-2xl  border-4 border-accent  place-self-center xl:col-span-2"
        >
          <source src="/assets/stone-bakery/cart.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default ShoppingCart;
