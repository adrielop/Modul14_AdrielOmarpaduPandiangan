import { useState } from "react";

const Contact = () => {
  const [cont] = useState({
    email: "netlab_bookstore@rocketmail.com",
    ig: "netlab_Bstore",
    phone: "147202",
  });
  return (
    <div class="bg-cyan-600">
      <h1 class="p-12 text-4xl">Contact Us</h1>
      <div class="pb-72 pt-8 px-24 ">
        <div class=" bg-cyan-200 p-5 rounded-full">
        <tbody >
            <tr>
                <td>Email</td>
                <td>: {cont.email}</td>
            </tr>
            <tr>
                <td>Instagram</td>
                <td>: {cont.ig}</td>
            </tr>
            <tr>
                <td>Phone </td>
                <td>: {cont.phone}</td>
            </tr>
        </tbody>
        </div>
      </div>
    </div>
  );
};

export default Contact;