import React from "react"

const AboutUs = () => {
  return (
    <div className='w-full mt-[4rem] mb-[3rem] mx-auto p-4 text-justify grid grid-cols-1 gap-[20px] sm:grid-cols-2'>
    <div className='text-center sm:col-span-2'>
    <h2 className='text-3xl text-[#00CBFF] font-bold'>About Us</h2>

      <h4>Welcome to Yummy-Food, your ultimate destination for delicious and wholesome meals!</h4>
      </div>
      <p>
At Yummy-Food, we believe that food is more than just nourishment—it's a way to connect, celebrate, and create memories. Our mission is to bring you flavors that delight your taste buds, using fresh, high-quality ingredients to craft meals that are as nutritious as they are flavorful.
      </p>

      <p>
Whether you're craving classic comfort food, exotic international cuisines, or healthy options to fuel your day, we've got something special for everyone. With a passion for culinary excellence and a commitment to customer satisfaction, we strive to make every bite an experience to remember.
      </p>

      <p>
        <em>Join us on this flavorful journey and discover why Yummy-Food is the name everyone’s talking about. Your next favorite dish is just a click away!</em>
      </p>
    </div>
  )
}

export default AboutUs;