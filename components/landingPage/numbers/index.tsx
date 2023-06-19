import React from 'react'
const messages = [
  { m: " Enrolled students", n: "3000+" },
  {m:" Staff", n:"30"},
 {m: "Global Alumini", n:"10,000"},
];
const Numbers = () => {
  return (
    <section className="bg-[#081D24] flex justify-center items-center p-6 py-24 w-full small:p-10 ">
      <div className=" flex flex-wrap items-center justify-center lg:justify-between gap-5 text-white max-w-6xl mx-auto font-displayFair font-extrabold lg:text-[40px] text-[30px] w-full">
        <p className="max-w-sm text-center lg:text-left">Join the winning school now</p>
        <div className="flex  flex-wrap justify-between items-center gap-7">
          {messages.map(({ m, n }) => (
            <div key={m} className="flex flex-col items-center justify-center">
              <span>{n}</span>
              <span className="lg:text-[20px] text-[12px] font-medium">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Numbers