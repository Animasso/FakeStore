function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
}

export async function getUser() {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,
    requestOptions
  );
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const browserData = getSession();
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function createOrder(cartlist, user, total) {
  const browserData = getSession();
  const order = {
    cartlist: cartlist,
    amount_paid: total,
    quantity: cartlist.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
}
