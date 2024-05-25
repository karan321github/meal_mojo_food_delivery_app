import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    console.log("show cart is called");
    setUserProgress("cart");
    console.log("progress after showcart", userProgress);
  }

  function hideCart() {
    console.log("hide checkout is called");
    setUserProgress("");
    console.log("progress after hidecheckout is called", userProgress);
  }

  function showCheckout() {
    console.log("checkout is called");
    setUserProgress("checkout");
    console.log("progress after showCheckOut is", userProgress);
  }

  function hideCheckout() {
    console.log("hideCheckout called");
    setUserProgress("none"); // or 'cart' depending on your flow
    console.log("Progress after hideCheckout:", userProgress);
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  console.log(userProgressCtx);
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
