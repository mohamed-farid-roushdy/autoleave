
import React from 'react'
import styleUsedCars from "./used-cars.module.css"
import Image from "next/image"
import petrol from "@/app/favicon.ico"
import Link from 'next/link'

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var raw = "{\n    \"username\" : \"yarob\",\n    \"password\" : \"HelloWorld\"\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://apps-tech.link/auto/api/all-cars?page=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// async function getData() {
//   const res = await fetch('https://apps-tech.link/auto/api/say-hello')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

const page =  () => {




  // const data = await getData()

  // let arr =[];
  // arr.push(data)

 



  return (
    <div className={styleUsedCars.container}>
      <div>

        {/* {
          arr.map(item => (
            <>
              <h1>{item.msg}</h1>
              <br />
              <h1>{item.success.toString()}</h1>
            </>
          ))} */}


      </div>







      {/* <div className={styleUsedCars.containerCard}>
      <div className={styleUsedCars.img}>

        <Image src={"https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?"}
          alt="" className={styleUsedCars.img}
          width={310}
          height={160} />

      </div>
      <div className={styleUsedCars.location}>

        <Image src={petrol} alt="" width={10} height={10} />

        <h5>القاهرة ، مصرالجديدة</h5>
      </div>
      <div className={styleUsedCars.category}>
        <h4>هيونداي توسان 2021</h4>
      </div>
      <div className={styleUsedCars.details}>
        <p>     لدواعي السفر سيارة فابريكا استعمال نظيف </p>
      </div>
      <div className={styleUsedCars.price}>
        <p className={styleUsedCars.mount}>1,400,000</p>
        <p className={styleUsedCars.pound}> جنيه </p>
      </div>
      <div className={styleUsedCars.features_tag}>
        <div className={styleUsedCars.km}>
          <Image src={petrol} alt="" width={10} height={10} />

          <p>34,000</p>
          <p> كم </p>
        </div>
        <div className={styleUsedCars.km}>

          <Image src={petrol} alt="" width={10} height={10} />

          <p> اتوماتك </p>
        </div>
        <div className={styleUsedCars.km}>

          <Image src={petrol} alt="" width={10} height={10} />

          <p> cc </p>
          <p>1600</p>
        </div>
      </div>
    </div> */}






    </div>
  )
}

export default page