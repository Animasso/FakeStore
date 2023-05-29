import React from "react";
import { useState, useEffect } from "react";
import { DashboardEmpty } from "../DashBoard/Components/DashboardEmpty";
import { DashboardCard } from "../DashBoard/Components/DashboardCard";
import { getUserOrders } from "../../services";
import { useTitle } from "../../hook/useTitle";
export const DashboardPage = () => {
  useTitle("DashBoard");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchOrder() {
      const data = await getUserOrders();
      setOrders(data);
    }
    fetchOrder();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>
      <section>{!orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};
