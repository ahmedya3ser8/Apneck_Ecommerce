
function MainHeading({head, text}) {
  return (
    <div className="main-heading w-fit p-[10px] mb-10 text-center sm:m-auto sm:mb-10">
      <h2 className="text-[35px] mb-[5px] text-[#ff4500] font-bold">{head}</h2>
      <p className="text-[14px text-[#777]]">{text}</p>
    </div>
  )
}

export default MainHeading;