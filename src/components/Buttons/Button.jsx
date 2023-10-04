import { Link } from "react-router-dom";

function Button({text}) {
  return (
    <Link to={'blog'} className="p-[10px] w-fit bg-[#ff6000] text-white rounded-[10px] text-[14px] border-[1px] border-solid border-transparent transition duration-300 hover:bg-transparent hover:border-[#ccc] hover:text-black">
      {text}
    </Link>
  )
}

export default Button;