import { useState } from "react";

const About = () => {
  const [name, setName] = useState("Adriel");
  const [desc, setDesc] = useState("");
  const [btnDesc, setBtnDesc]=useState("Show More")
  

  const handleClick = ()=>{
    setName('Adriel Omarpadu Pandiangan');
    const description = "Netlab Bookstore is the most complete bookstore center in Bogor. This shop has been around for 3 years. Many local and foreign books are in this shop. This shop is never empty of visitors. So arrange your schedule and come here to visit our store."
    setDesc(description);
    const updateBtn = "====fyi====="
    setBtnDesc(updateBtn)
  }

  return (
    <div class="bg-cyan-600">
      <h1 class="p-6 text-4xl">About Netlab Bookstore</h1>
      <div class="py-2 px-10">
        <img src="https://pinhome-blog-assets-public.s3.amazonaws.com/2021/11/Gambar-Kartun-Orang-Sedang-Berdiri.gif" class="py-4"></img>
        <p>
          My name is {name} with 320200401001 from Unhan as the owner of Netlab Bookstore.
        </p>
        <p> I manage this bookstore from Bogor</p>
        <br></br>
        <p>{desc}</p>
        <button onClick={handleClick} class="bg-cyan-100 rounded-full px-3">{btnDesc}</button>
      </div>
    </div>
  );
};

export default About;
